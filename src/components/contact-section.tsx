import { useState } from "react";
import ContactForm, {
  type ContactFormValues,
} from "@/components/contact-form/contact-form";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function ContactSection() {
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSendingMail(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setToastState({
          type: "success",
          value: true,
          message: "Successfully sent email",
        });
      } else {
        setToastState({
          type: response.status === 429 ? "warning" : "failure",
          value: true,
          message:
            response.status === 429
              ? "Rate Limiter: Only 5 email per hour"
              : "Oop! Unable to send email",
        });
      }
    } catch {
      setToastState({
        type: "failure",
        value: true,
        message: "Oop! Unable to send email",
      });
    }
    setIsSendingMail(false);
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-12 lg:flex-row lg:gap-20 lg:p-16">
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Fill out the form below or
          reach out directly through my contact information.
        </p>
        <div className="mt-2 rounded-xl bg-accent p-6 shadow-lg shadow-accent/10">
          <ContactForm
            isSubmitting={isSendingMail}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-10 lg:w-1/2 lg:pt-20">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-foreground">
            Contact Information
          </h3>
          <div className="flex flex-col gap-4 text-lg text-zinc-600 dark:text-zinc-400">
            <p className="flex items-center gap-2">
              <strong className="text-foreground">Email:</strong>
              <a
                href="mailto:guptaamank14@gmail.com"
                className="transition-colors hover:text-accent"
              >
                guptaamank14@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-foreground">Phone:</strong>
              <a
                href="tel:+919755292642"
                className="transition-colors hover:text-accent"
              >
                +91 97552 92642
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-foreground">Follow Me</h3>
          <div className="flex flex-col gap-4 text-lg font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.linkedin.com/in/amankumargupta2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-6 w-6" /> LinkedIn
            </a>
            <a
              href="https://github.com/guptaamank14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-accent"
            >
              <GithubIcon className="h-6 w-6" /> GitHub
            </a>
          </div>
        </div>
        <p className="mt-4 text-xl font-medium italic text-foreground">
          Looking forward to hearing from you!
        </p>
      </div>
      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </div>
  );
}
