"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export interface LightboxItem {
  key: string;
  src: string | null;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  caption: string;
  meta: { label: string; value: string }[];
  transcription?: { heading: string; lines: string[] }[] | null;
  badge?: React.ReactNode;
}

const ZOOM_STEPS = [1, 1.5, 2, 3, 4];

/**
 * Full-screen accessible viewer built on the native <dialog> element
 * (focus containment, Escape to close, focus restoration).
 */
export function Lightbox({
  items,
  index,
  onChange,
  onClose,
  locale,
}: {
  items: LightboxItem[];
  index: number | null;
  onChange: (i: number) => void;
  onClose: () => void;
  locale: Locale;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(0);
  const [showText, setShowText] = useState(true);
  const item = index === null ? null : items[index];

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index !== null && !d.open) {
      d.showModal();
      document.body.classList.add("menu-open");
    } else if (index === null && d.open) {
      d.close();
    }
  }, [index]);

  useEffect(() => setZoom(0), [index]);

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onChange],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 1, ZOOM_STEPS.length - 1));
    else if (e.key === "-") setZoom((z) => Math.max(z - 1, 0));
    else if (e.key === "0") setZoom(0);
  };

  const scale = ZOOM_STEPS[zoom];
  const hasText = !!item?.transcription?.length;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby="lightbox-title"
      onClose={() => {
        document.body.classList.remove("menu-open");
        onClose();
      }}
      onKeyDown={onKeyDown}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
    >
      {item ? (
        <div className="lightbox__frame">
          <div className="lightbox__toolbar">
            <p className="lightbox__count" aria-live="polite">
              {index! + 1} / {items.length}
            </p>
            <div className="lightbox__tools" role="group" aria-label={ui.zoomIn[locale]}>
              <button
                type="button"
                className="lb-btn"
                onClick={() => setZoom((z) => Math.max(z - 1, 0))}
                disabled={!item.src || zoom === 0}
                aria-label={ui.zoomOut[locale]}
                title={ui.zoomOut[locale]}
              >
                −
              </button>
              <button
                type="button"
                className="lb-btn lb-btn--wide"
                onClick={() => setZoom(0)}
                disabled={!item.src || zoom === 0}
                aria-label={ui.resetZoom[locale]}
                title={ui.resetZoom[locale]}
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                type="button"
                className="lb-btn"
                onClick={() => setZoom((z) => Math.min(z + 1, ZOOM_STEPS.length - 1))}
                disabled={!item.src || zoom === ZOOM_STEPS.length - 1}
                aria-label={ui.zoomIn[locale]}
                title={ui.zoomIn[locale]}
              >
                +
              </button>
              {hasText ? (
                <button
                  type="button"
                  className="lb-btn lb-btn--wide"
                  aria-pressed={showText}
                  onClick={() => setShowText((v) => !v)}
                >
                  {ui.transcription[locale]}
                </button>
              ) : null}
            </div>
            <button
              type="button"
              className="lb-btn lb-btn--close"
              onClick={() => dialogRef.current?.close()}
              aria-label={ui.close[locale]}
            >
              ✕
            </button>
          </div>

          <div
            className={`lightbox__stage${scale > 1 ? " is-zoomed" : ""}`}
            tabIndex={0}
            aria-label={item.alt}
          >
            {item.src ? (
              // eslint-disable-next-line @next/next/no-img-element -- pre-optimised static asset
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={
                  scale > 1
                    ? {
                        width: `${scale * 100}%`,
                        maxWidth: "none",
                        maxHeight: "none",
                        height: "auto",
                      }
                    : undefined
                }
              />
            ) : (
              <div className="lightbox__missing">{ui.scanPending[locale]}</div>
            )}
          </div>

          <aside className="lightbox__panel">
            <h2 id="lightbox-title" className="lightbox__title">
              {item.title}
            </h2>
            {item.badge}
            <p className="lightbox__caption">{item.caption}</p>
            <dl className="meta-list">
              {item.meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
            {hasText && showText ? (
              <section className="lightbox__transcription" aria-label={ui.transcription[locale]}>
                {item.transcription!.map((block) => (
                  <div key={block.heading}>
                    <h3>{block.heading}</h3>
                    {block.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ))}
              </section>
            ) : null}
          </aside>

          {items.length > 1 ? (
            <div className="lightbox__nav">
              <button type="button" className="lb-btn lb-btn--wide" onClick={() => go(-1)}>
                ← {ui.previous[locale]}
              </button>
              <button type="button" className="lb-btn lb-btn--wide" onClick={() => go(1)}>
                {ui.next[locale]} →
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </dialog>
  );
}
