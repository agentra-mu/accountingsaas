"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "finly-splash-shown";
const AUTO_DISMISS_MS = 1800;

export default function SplashGate({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable (privacy mode, etc.) — just show it once.
    }

    if (seen) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(dismiss, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setLeaving(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
    setTimeout(() => setVisible(false), 300);
  }

  return (
    <>
      {visible && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-paper transition-opacity duration-300"
          style={{ opacity: leaving ? 0 : 1 }}
        >
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <span className="font-serif text-3xl font-semibold tracking-tight">
              Finly<span className="text-accent">.</span>
            </span>
            <p className="max-w-[32ch] text-sm text-ink-soft">
              The follow-up your firm doesn&apos;t have to do.
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="mt-3 inline-flex h-9 items-center justify-center rounded-full border border-ink/70 px-5 font-sans text-[13px] font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Enter →
            </button>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
