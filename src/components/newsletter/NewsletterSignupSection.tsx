'use client';
import { useState } from "react";
import SignupCTA from "./SignupCTA";
import SignupForm from "./SignupForm";
import SignupThankYou from "./SignupThankYou";

export default function NewsletterSignupSection() {
  const [step, setStep] = useState<"cta"|"form"|"thankyou">("cta");

  return (
    <section>
      {step === "cta" && <SignupCTA onStart={() => setStep("form")} />}
      {step === "form" && (
        <SignupForm
          onSuccess={() => setStep("thankyou")}
          onCancel={() => setStep("cta")}
        />
      )}
      {step === "thankyou" && <SignupThankYou />}
    </section>
  );
}