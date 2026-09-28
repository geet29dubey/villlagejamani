"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";

/**
 * Days until the configured festival date. Renders nothing until mounted
 * (avoids hydration mismatch) and nothing at all if the date has passed.
 */
export function Countdown({
  targetIso,
  locale,
  label,
}: {
  targetIso: string;
  locale: Locale;
  label: string;
}) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(`${targetIso}T18:00:00+05:30`).getTime();
    const update = () => setDays(Math.ceil((target - Date.now()) / 86_400_000));
    update();
    const t = window.setInterval(update, 60_000);
    return () => window.clearInterval(t);
  }, [targetIso]);

  if (days === null || days < 0) return null;
  const text =
    days === 0
      ? locale === "hi"
        ? "आज!"
        : "Today!"
      : locale === "hi"
        ? `${days} दिन शेष`
        : `${days} ${days === 1 ? "day" : "days"} to go`;
  return (
    <p className="countdown pill" role="status">
      {label} · {text}
    </p>
  );
}
