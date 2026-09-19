"use client";

import { createContext, useContext, useMemo, useState } from "react";

type WaitlistContextValue = {
  isOpen: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openWaitlist: () => setIsOpen(true),
      closeWaitlist: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return (
    <WaitlistContext.Provider value={value}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return ctx;
}
