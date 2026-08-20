"use client";

import { useEffect } from "react";

/**
 * Lands cross-page anchor navigation on its target.
 *
 * The browser scrolls to the hash as soon as the document parses, but this
 * page's lazy images then load above the target and push it down — arriving
 * at /#contact-cta from another route left the reader stranded mid-review
 * wall. Once everything has loaded we scroll one more time, compensating for
 * the fixed header the way the in-page handler does.
 *
 * The correction stands down the moment the reader scrolls on their own:
 * yanking the viewport out from under someone already reading is worse than
 * a slightly-off landing.
 */
export function HashLandingFix() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;

    let interacted = false;
    const markInteraction = () => {
      interacted = true;
    };
    const interactionEvents = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    for (const name of interactionEvents) {
      window.addEventListener(name, markInteraction, { passive: true, once: true });
    }

    const settle = () => {
      if (interacted) return;
      let target: HTMLElement | null = null;
      try {
        target = document.querySelector<HTMLElement>(hash);
      } catch {
        return;
      }
      if (!target) return;
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--header-offset");
      const offset = Number.parseFloat(raw);
      const top =
        window.scrollY +
        target.getBoundingClientRect().top -
        (Number.isFinite(offset) ? offset : 0);
      window.scrollTo({ top: Math.max(0, top) });
    };

    const schedule = () => window.requestAnimationFrame(settle);
    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      window.removeEventListener("load", schedule);
      for (const name of interactionEvents) {
        window.removeEventListener(name, markInteraction);
      }
    };
  }, []);

  return null;
}
