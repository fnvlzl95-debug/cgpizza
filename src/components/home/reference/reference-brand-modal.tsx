"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark, revealEase } from "@/components/home/reference/reference-primitives";

type ReferenceBrandModalContent = {
  title: string;
  description: string;
  points: readonly string[];
  closeLabel: string;
};

type ReferenceBrandModalProps = {
  isOpen: boolean;
  onClose: () => void;
  reducedMotion: boolean;
  modal: ReferenceBrandModalContent;
};

export function ReferenceBrandModal({ isOpen, onClose, reducedMotion, modal }: ReferenceBrandModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleEscape);
      lastFocusedRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020a1f]/68 px-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 14, scale: reducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 10, scale: reducedMotion ? 1 : 0.98 }}
            transition={{ duration: 0.22, ease: revealEase }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="brand-modal-title"
            className="w-full max-w-[32rem] rounded-[8px] border border-white/12 bg-[#09235e] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <BrandMark className="h-8 w-8 text-[#ffd12a]" />
                  <h2 id="brand-modal-title" className="text-xl font-black">
                    {modal.title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/78">{modal.description}</p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition hover:bg-white/12"
                aria-label={modal.closeLabel}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {modal.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/6 px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ffd12a]" />
                  <p className="text-sm font-semibold leading-6 text-white/86">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
