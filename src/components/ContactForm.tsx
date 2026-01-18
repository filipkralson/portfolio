"use client";

import React, { useActionState, useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import TerminalWindow from "./ui/TerminalWindow";
import { sendEmailAction } from "@/lib/actions";
import { motion } from "framer-motion";

const initialState = {
  success: false,
  message: "",
};

/**
 * Root component that manages the reset state.
 * Forcing a remount via `key` is the most reliable way to reset
 * all internal states, including useActionState results.
 */
export default function ContactForm() {
  const { t } = useTranslation("common");
  const [resetKey, setResetKey] = useState(0);

  const handleHardReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <TerminalWindow
      key={resetKey}
      title={t("titles.contact")}
      className="h-full bg-white border-tui-border text-tui-text"
    >
      <InnerTerminalForm onReset={handleHardReset} />
    </TerminalWindow>
  );
}

/**
 * Inner component containing all form logic and step management.
 */
function InnerTerminalForm({ onReset }: { onReset: () => void }) {
  const { t } = useTranslation("common");
  const [state, formAction, isPending] = useActionState(
    sendEmailAction,
    initialState,
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  // Auto-scroll to bottom whenever step, state, or error changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [step, state.success, state.message, error]);

  const handleNextStep = () => {
    if (!currentInput.trim()) {
      setError(t("contact.terminal.emptyError"));
      return;
    }

    if (step === 0) {
      if (!currentInput.includes("@")) {
        setError(t("contact.terminal.emailError"));
        return;
      }
      setEmail(currentInput);
    } else if (step === 1) {
      setName(currentInput);
    } else if (step === 2) {
      setMsg(currentInput);
    }

    setStep((prev) => prev + 1);
    setCurrentInput("");
    setError("");
  };

  return (
    <div
      ref={scrollRef}
      className="font-mono text-sm md:text-base space-y-4 h-full overflow-y-auto pr-2 scroll-smooth"
    >
      <p className="font-bold text-tui-accent mb-4">
        client@portfolio:~$ <span className="text-tui-text">./send.sh ⏎</span>
      </p>

      <p className="font-bold">{t("contact.terminal.intro")}</p>

      <div className="space-y-4">
        {/* Step 1: Email Result */}
        <StatusLine
          label={t("contact.terminal.step1")}
          value={email}
          isDone={!!email}
          stepNum={1}
        />

        {/* Step 2: Name Result */}
        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <StatusLine
              label={t("contact.terminal.step2")}
              value={name}
              isDone={!!name}
              stepNum={2}
            />
          </motion.div>
        )}

        {/* Step 3: Message Result */}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <StatusLine
              label={t("contact.terminal.step3")}
              value={msg}
              isDone={!!msg}
              stepNum={3}
            />
          </motion.div>
        )}

        {/* Dynamic Input Area */}
        {!state.success && step < 3 && (
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-tui-text font-bold">→</span>
              <span className="opacity-70 whitespace-nowrap font-bold">
                {step === 0
                  ? t("contact.terminal.labels.email")
                  : step === 1
                    ? t("contact.terminal.labels.name")
                    : t("contact.terminal.labels.message")}
              </span>
              <span className="text-xs opacity-50 hidden md:inline ml-auto italic">
                {t("contact.terminal.enterHint")}
              </span>
            </div>

            {step === 2 ? (
              <textarea
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleNextStep();
                  }
                }}
                rows={4}
                className="bg-tui-dim/40 border-2 border-tui-border outline-none px-3 py-2 w-full text-tui-text focus:border-tui-accent transition-all resize-none font-mono"
                autoFocus
              />
            ) : (
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleNextStep();
                  }
                }}
                className="bg-tui-dim/40 border-2 border-tui-border outline-none px-3 py-2 w-full text-tui-text focus:border-tui-accent transition-all font-mono"
                autoFocus
              />
            )}
          </div>
        )}

        {error && <p className="text-red-500 text-sm font-bold">! {error}</p>}

        {/* Final Confirmation */}
        {step === 3 && !state.success && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-tui-dim/20"
          >
            <form action={formAction} className="flex gap-4">
              <input type="hidden" name="email" value={email} />
              <input type="hidden" name="name" value={name} />
              <input type="hidden" name="description" value={msg} />
              <button
                type="submit"
                disabled={isPending}
                className="px-8 py-2 bg-tui-accent text-white hover:bg-white hover:text-tui-accent border-2 border-tui-accent transition-all font-bold cursor-pointer disabled:opacity-50"
              >
                {isPending
                  ? t("contact.terminal.sending")
                  : t("contact.terminal.buttons.submit")}
              </button>
            </form>
            <button
              onClick={onReset}
              className="px-8 py-2 bg-tui-text text-white hover:bg-white hover:text-tui-text border-2 border-tui-text transition-all font-bold cursor-pointer"
            >
              {t("contact.terminal.buttons.reset")}
            </button>
          </motion.div>
        )}

        {/* Success / Error Messages */}
        {state.success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-tui-accent font-bold mt-8 p-4 border-2 border-tui-accent bg-tui-accent/5"
          >
            <p className="text-lg">🎉 {t("contact.terminal.success")}</p>
            <button
              onClick={onReset}
              className="mt-6 text-sm underline text-tui-text hover:text-tui-accent transition-colors cursor-pointer font-bold block"
            >
              [{t("contact.terminal.buttons.reset")}]
            </button>
          </motion.div>
        )}

        {state.message && !state.success && (
          <div className="text-red-500 font-bold mt-4 p-2 border border-red-500 bg-red-500/5">
            {t("contact.terminal.error")}: {state.message}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusLine({
  label,
  value,
  isDone,
  stepNum,
}: {
  label: string;
  value: string;
  isDone: boolean;
  stepNum: number;
}) {
  return (
    <div className="flex flex-col">
      <p className={isDone ? "text-tui-accent/70" : "text-tui-text"}>
        {isDone ? "✔" : `${stepNum}.`} {label}
      </p>
      {isDone && (
        <p className="ml-6 text-tui-accent font-bold wrap-break-word">
          {value}
        </p>
      )}
    </div>
  );
}
