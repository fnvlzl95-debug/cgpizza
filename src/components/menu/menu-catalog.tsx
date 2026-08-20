"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { menuPageData, type MenuCategoryId } from "@/lib/menu-page-data";

type TabId = (typeof menuPageData.tabs)[number]["id"];

/** Where each tab lands when the reader is looking at the whole board. */
const sectionAnchor = {
  all: "#menu-all",
  best: "#menu-best",
  special: "#menu-special",
  spicy: "#menu-spicy",
  classic: "#menu-classic",
  side: "#menu-side",
} satisfies Partial<Record<MenuCategoryId, string>>;

/**
 * The catalogue's category row, and the board it filters.
 *
 * Choosing a category narrows what is on screen, never what the page
 * contains: the wrapper carries the choice as an attribute and the stylesheet
 * answers it, so all nineteen items stay in the served HTML for search and
 * for anyone reading without CSS.
 *
 * On 전체 the row goes back to reporting instead of filtering — it lights the
 * section the reader has scrolled into, which is the only honest answer when
 * every category is on screen at once.
 */
export function MenuCatalog({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<TabId>("all");
  // Which pill is lit is not always which category is filtered: on 전체 the
  // scrollspy lights the section underfoot while the filter stays open.
  const [lit, setLit] = useState<TabId>("all");
  const trackRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  // Scrollspy, but only while the board is unfiltered. Once a category is
  // chosen the row is stating a choice, and having scroll overwrite it would
  // undo the reader's own press.
  useEffect(() => {
    if (active !== "all") return;
    const targets: Array<{ id: TabId; el: HTMLElement }> = [];
    for (const tab of menuPageData.tabs) {
      if (tab.id === "all") continue;
      const el = document.querySelector<HTMLElement>(sectionAnchor[tab.id]);
      if (el) targets.push({ id: tab.id, el });
    }
    if (targets.length === 0) return;
    // Scan in the order the reader meets the sections, not the order the row
    // lists them: they differ, and tab order picked the wrong pill for it.
    targets.sort((a, b) =>
      a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
    );

    let frame = 0;
    const sync = () => {
      frame = 0;
      const line = window.innerHeight * 0.34;
      let current: TabId = "all";
      for (const target of targets) {
        if (target.el.getBoundingClientRect().top <= line) current = target.id;
      }
      setLit(current);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);

  // The filled pill slides between labels rather than blinking from one to
  // the next, so the row shows where the selection went.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const target = track.querySelector<HTMLElement>(`[data-tab="${lit}"]`);
      if (!target) return;
      // offsetLeft is measured against the positioned nav, which is what the
      // pill is absolutely placed inside.
      setPill({ left: target.offsetLeft, width: target.offsetWidth });
      if (track.scrollWidth > track.clientWidth + 1) {
        // Scrolling is measured against the track instead, so the track's own
        // padding does not skew where the lit pill comes to rest.
        const trackBox = track.getBoundingClientRect();
        const targetBox = target.getBoundingClientRect();
        const left =
          track.scrollLeft +
          (targetBox.left - trackBox.left) -
          (track.clientWidth - targetBox.width) / 2;
        track.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    // The display face lands after first paint and moves the labels with it.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [lit]);

  const choose = useCallback((id: TabId) => {
    setActive(id);
    setLit(id);
    const board = boardRef.current;
    if (!board) return;
    const offset = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-offset"),
    );
    const top =
      board.getBoundingClientRect().top +
      window.scrollY -
      (Number.isFinite(offset) ? offset : 76) -
      // Clear the rail itself, which is sticky right under the header.
      64;
    // Only pull the reader down to the board — never yank them back up from
    // deeper in the catalogue when they are already past it.
    if (window.scrollY < top) window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* One control, not six labels flung at the container's edges. The
          group is a track that hugs its own content and centres, so it reads
          as a single switch at any width, and every pill takes its padding in
          `em` — that keeps 매콤 and 클래식 the same shape instead of scaling
          the gap with the viewport and leaving the short words as blobs. */}
      <div className="sticky top-[var(--header-offset)] z-30 border-b border-hairline bg-cream-ground shadow-[0_10px_24px_rgba(1,23,80,0.06)]">
        <div
          ref={trackRef}
          className="mx-auto flex max-w-[90rem] justify-start overflow-x-auto px-5 py-2.5 [scrollbar-width:none] md:justify-center md:px-8 md:py-3.5 min-[1800px]:py-4 min-[2200px]:py-5 [&::-webkit-scrollbar]:hidden"
        >
          <nav
            aria-label="메뉴 카테고리"
            className="relative flex w-max gap-1 rounded-full bg-white p-1.5 ring-1 ring-hairline"
          >
            {pill ? (
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 top-1.5 rounded-full bg-navy-900 transition-[left,width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ left: pill.left, width: pill.width }}
              />
            ) : null}
            {menuPageData.tabs.map((tab) => {
              const isLit = tab.id === lit;
              return (
                <button
                  key={tab.id}
                  type="button"
                  data-tab={tab.id}
                  onClick={() => choose(tab.id)}
                  aria-pressed={tab.id === active}
                  className={`relative shrink-0 rounded-full px-[1.5em] py-[0.62em] text-[0.95rem] font-black tracking-[-0.02em] transition-colors duration-200 md:text-[1.05rem] xl:text-[1.15rem] min-[1800px]:text-[1.3rem] min-[2200px]:text-[1.5rem] ${
                    isLit ? "text-yellow-500" : "text-navy-900/70 hover:text-navy-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div ref={boardRef} data-filter={active}>
        {children}
      </div>
    </>
  );
}
