"use client";

import { useEffect } from "react";

const MOBILE_BREAKPOINT = 768;
const DESKTOP_SNAP_BREAKPOINT = 1024;
const KAKAO_USER_AGENT_PATTERN = /kakaotalk/i;
const SNAP_SETTLE_DELAY_MS = 140;
const SNAP_DISTANCE_RATIO = 0.24;
const SNAP_DISTANCE_CAP = 320;
const SNAP_ANIMATION_MIN_MS = 380;
const SNAP_ANIMATION_MAX_MS = 620;
const SNAP_ANIMATION_FACTOR = 0.72;

function getViewportHeight() {
  return Math.round(window.visualViewport?.height ?? window.innerHeight);
}

function getHeaderOffset() {
  const rawValue = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-offset",
  );
  const parsedValue = Number.parseFloat(rawValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export function PortedViewportRuntimeFix() {
  useEffect(() => {
    const root = document.documentElement;
    const isKakaoInApp = KAKAO_USER_AGENT_PATTERN.test(window.navigator.userAgent);

    if (!isKakaoInApp) {
      delete root.dataset.inAppBrowser;
      root.style.removeProperty("--app-height");
      return;
    }

    root.dataset.inAppBrowser = "kakao";

    let lockedWidth = 0;
    let lockedHeight = 0;
    let rafId = 0;

    const commitHeight = (height: number) => {
      root.style.setProperty("--app-height", `${height}px`);
    };

    const syncViewport = (force = false) => {
      const width = window.innerWidth;
      const height = getViewportHeight();
      const isMobile = width < MOBILE_BREAKPOINT;

      if (!isMobile || force || lockedHeight === 0) {
        lockedWidth = width;
        lockedHeight = height;
        commitHeight(height);
        return;
      }

      const widthChanged = width !== lockedWidth;

      if (widthChanged) {
        lockedWidth = width;
        lockedHeight = height;
        commitHeight(height);
        return;
      }

      // Kakao WebView often emits height-only viewport changes while scrolling.
      // Keep the initial mobile height locked so fullscreen sections don't "drift".
      commitHeight(lockedHeight);
    };

    const scheduleSync = (force = false) => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        syncViewport(force);
      });
    };

    const handleResize = () => scheduleSync(false);
    const handleOrientationChange = () => scheduleSync(true);

    syncViewport(true);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleOrientationChange, {
      passive: true,
    });

    const viewport = window.visualViewport;
    viewport?.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      viewport?.removeEventListener("resize", handleResize);
      delete root.dataset.inAppBrowser;
      root.style.removeProperty("--app-height");
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia(
      `(min-width: ${DESKTOP_SNAP_BREAKPOINT}px)`,
    );
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let settleTimer = 0;
    let snapRafId = 0;
    let animationRafId = 0;
    let isAutoSnapping = false;

    const stopAutoSnap = () => {
      cancelAnimationFrame(animationRafId);
      animationRafId = 0;
      isAutoSnapping = false;
    };

    const clearPendingWork = () => {
      window.clearTimeout(settleTimer);
      cancelAnimationFrame(snapRafId);
      stopAutoSnap();
    };

    const getSnapTargets = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(".app-screen-snap-target"),
      ).filter((element) => element.offsetParent !== null);

    const getNearestSnapPoint = () => {
      const currentY = window.scrollY;
      const headerOffset = getHeaderOffset();
      const threshold = Math.min(
        window.innerHeight * SNAP_DISTANCE_RATIO,
        SNAP_DISTANCE_CAP,
      );

      let nearestPoint: { top: number; distance: number } | null = null;

      for (const target of getSnapTargets()) {
        const top =
          window.scrollY + target.getBoundingClientRect().top - headerOffset;
        const distance = Math.abs(top - currentY);

        if (!nearestPoint || distance < nearestPoint.distance) {
          nearestPoint = { top, distance };
        }
      }

      if (!nearestPoint || nearestPoint.distance > threshold) {
        return null;
      }

      return nearestPoint;
    };

    const animateScrollTo = (targetTop: number) => {
      const startTop = window.scrollY;
      const distance = targetTop - startTop;

      if (Math.abs(distance) < 2) {
        isAutoSnapping = false;
        return;
      }

      const duration = Math.min(
        SNAP_ANIMATION_MAX_MS,
        Math.max(
          SNAP_ANIMATION_MIN_MS,
          Math.abs(distance) * SNAP_ANIMATION_FACTOR,
        ),
      );
      const startTime = performance.now();

      const tick = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = easeOutCubic(progress);

        window.scrollTo({
          top: startTop + distance * easedProgress,
          behavior: "auto",
        });

        if (progress < 1) {
          animationRafId = window.requestAnimationFrame(tick);
          return;
        }

        animationRafId = 0;
        isAutoSnapping = false;
      };

      animationRafId = window.requestAnimationFrame(tick);
    };

    const snapToNearestSection = () => {
      if (
        !desktopQuery.matches ||
        reducedMotionQuery.matches ||
        isAutoSnapping
      ) {
        return;
      }

      const nearestPoint = getNearestSnapPoint();

      if (!nearestPoint || nearestPoint.distance < 2) {
        return;
      }

      isAutoSnapping = true;
      animateScrollTo(nearestPoint.top);
    };

    const scheduleSnap = () => {
      clearPendingWork();

      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      settleTimer = window.setTimeout(() => {
        snapRafId = window.requestAnimationFrame(snapToNearestSection);
      }, SNAP_SETTLE_DELAY_MS);
    };

    const handleScroll = () => {
      if (isAutoSnapping) {
        return;
      }

      scheduleSnap();
    };

    const handleViewportChange = () => {
      isAutoSnapping = false;
      scheduleSnap();
    };

    const handleWheel = () => {
      if (!isAutoSnapping) {
        return;
      }

      stopAutoSnap();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("resize", handleViewportChange, { passive: true });
    desktopQuery.addEventListener("change", handleViewportChange);
    reducedMotionQuery.addEventListener("change", handleViewportChange);

    return () => {
      clearPendingWork();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleViewportChange);
      desktopQuery.removeEventListener("change", handleViewportChange);
      reducedMotionQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return null;
}
