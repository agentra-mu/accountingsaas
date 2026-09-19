"use client";

import { FormEvent, useEffect, useState } from "react";
import { useWaitlist } from "./WaitlistContext";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function WaitlistModal() {
  const { isOpen, closeWaitlist } = useWaitlist();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firmName, setFirmName] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setState("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeWaitlist();
    }
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeWaitlist]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, firmName }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong. Try again.");
      }

      setState("success");
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeWaitlist();
      }}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
      >
        <button
          className="modal-close"
          onClick={closeWaitlist}
          aria-label="Close"
        >
          ✕
        </button>

        {state === "success" ? (
          <>
            <p className="kicker">Docket</p>
            <h3 id="waitlist-title">You&apos;re on the list.</h3>
            <p className="desc">
              We&apos;ll email you when Docket is ready for your firm. No spam,
              just the one message when it&apos;s your turn.
            </p>
            <button className="cta-btn" onClick={closeWaitlist} type="button">
              Done
            </button>
          </>
        ) : (
          <>
            <p className="kicker">Join the waitlist</p>
            <h3 id="waitlist-title">Get early access to Docket.</h3>
            <p className="desc">
              We&apos;re onboarding firms in small batches. Leave your details
              and we&apos;ll reach out when a spot opens up.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="firmName">Firm name (optional)</label>
                <input
                  id="firmName"
                  type="text"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  autoComplete="organization"
                />
              </div>
              <button
                className="cta-btn"
                type="submit"
                disabled={state === "submitting"}
              >
                {state === "submitting" ? "Joining…" : "Join the waitlist"}
              </button>
              {state === "error" && (
                <p className="form-note error">{errorMessage}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
