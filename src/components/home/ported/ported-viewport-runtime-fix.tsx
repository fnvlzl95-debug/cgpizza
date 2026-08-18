"use client";

import { useEffect } from "react";

/**
 * Kakao's in-app browser reports a viewport height that does not match what
 * it paints, so the page reads the visual viewport and publishes it as
 * --app-height. That is all this does; the scroll snapping it used to carry
 * is CSS's job and conflicted with it.
 */

const MOBILE_BREAKPOINT = 768;
const KAKAO_USER_AGENT_PATTERN = /kakaotalk/i;

function getViewportHeight() {
  return Math.round(window.visualViewport?.height ?? window.innerHeight);
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

  return null;
}
