"use client";

import { useEffect, useRef, useState } from "react";
import { stepLabels } from "@/lib/home";

export function StepFlow({ steps }: { steps: readonly string[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [state, setState] = useState<"idle" | "play" | "done">("idle");

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setState("done");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setState("play");
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={listRef}
      className={`flow mt-10 grid grid-cols-4 gap-3 rounded-[28px] border border-ink/10 bg-white p-4 sm:gap-6 sm:p-8 ${
        state === "play" ? "is-on" : ""
      } ${state === "done" ? "is-done" : ""}`}
      data-flow={state}
    >
      {steps.map((step, index) => {
        const last = index === steps.length - 1;
        return (
          <li key={step} className="min-w-0">
            <div className="flex items-center">
              <span
                className="flow-marker"
                style={{ animationDelay: `${index * 1.15}s` }}
              >
                {last ? "✓" : index + 1}
              </span>
              {last ? null : (
                <span className="flow-seg" aria-hidden="true">
                  <span className="flow-seg-fill" style={{ animationDelay: `${0.35 + index * 1.15}s` }} />
                </span>
              )}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-ink sm:text-xl">{stepLabels[index]}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted sm:text-base">{step}</p>
          </li>
        );
      })}
    </ol>
  );
}
