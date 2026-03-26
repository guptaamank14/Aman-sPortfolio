import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  university: string;
  result: string;
  issued: string;
  expires?: string;
  credentialId: string;
  pdfPath: string;
  download: string;
  color: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: "summer-training",
    title: "Summer Training Certificate",
    issuer: "Summer Training Program",
    university: "—",
    result: "✅ Completed",
    issued: "2025",
    credentialId: "—",
    pdfPath: "/aman-summer-training-certificate.pdf",
    download: "Aman-Summer-Training-Certificate.pdf",
    color: "#38bdf8, #6366f1",
  },
  {
    id: "infosys",
    title: "Infosys Certificate",
    issuer: "Infosys",
    university: "—",
    result: "✅ Completed",
    issued: "2025",
    credentialId: "—",
    pdfPath: "/images/aman-infosys-certificate.jpeg",
    download: "Aman-Infosys-Certificate.jpeg",
    color: "#0ea5e9, #6366f1",
  },
  {
    id: "coding-wise",
    title: "Coding Wise Certificate",
    issuer: "Coding Wise",
    university: "—",
    result: "✅ Completed",
    issued: "2025",
    credentialId: "—",
    pdfPath: "/images/aman-coding-wise-certificate.jpeg",
    download: "Aman-Coding-Wise-Certificate.jpeg",
    color: "#f97316, #eab308",
  },
  {
    id: "freecodecamp",
    title: "FreeCodeCamp Certification",
    issuer: "FreeCodeCamp",
    university: "—",
    result: "✅ Completed",
    issued: "2025",
    credentialId: "—",
    pdfPath: "/images/aman-freecode-camp-certification.jpeg",
    download: "Aman-FreeCodeCamp-Certification.jpeg",
    color: "#22c55e, #06b6d4",
  },
  {
    id: "udemy",
    title: "Udemy Certificate",
    issuer: "Udemy",
    university: "—",
    result: "✅ Completed",
    issued: "2025",
    credentialId: "—",
    pdfPath: "/images/aman-udemy-certificate.jpeg",
    download: "Aman-Udemy-Certificate.jpeg",
    color: "#a855f7, #ec4899",
  },
];

export default function CertificationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-14 md:px-20">
      <AnimatePresence>
        <FadeUp key="cert-heading" duration={0.6}>
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">
              Certificates
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              Professional credentials and course completions.
            </p>
          </div>
        </FadeUp>

        <FadeUp key="cert-grid" duration={0.6} delay={0.2}>
          <div className="ach-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="ach-card">
                <div
                  className="ach-bar"
                  style={{
                    background: `linear-gradient(180deg, ${cert.color})`,
                  }}
                />

                <div className="ach-thumb-wrapper">
                  {cert.pdfPath.toLowerCase().endsWith(".pdf") ? (
                    <object
                      data={`${cert.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className="ach-object h-full w-full"
                      aria-label={cert.title}
                    >
                      <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-xs text-zinc-500">
                        PDF Unavailable
                      </div>
                    </object>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={cert.pdfPath}
                        alt={`${cert.title} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="ach-body">
                  <div className="ach-result text-zinc-800 dark:text-zinc-200">
                    {cert.result}
                  </div>
                  <div className="ach-title text-zinc-900 dark:text-zinc-100">
                    {cert.title}
                  </div>

                  <div className="ach-row mt-1">
                    <span className="ach-tag text-zinc-600 dark:text-zinc-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ach-tag-icon"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="ach-meta-row">
                    <span className="ach-meta-item">
                      <span className="ach-meta-label text-zinc-500 dark:text-zinc-400">
                        Issued
                      </span>
                      <span className="ach-meta-value text-zinc-800 dark:text-zinc-200">
                        {cert.issued}
                      </span>
                    </span>
                    {cert.expires && (
                      <span className="ach-meta-item">
                        <span className="ach-meta-label text-zinc-500 dark:text-zinc-400">
                          Expires
                        </span>
                        <span className="ach-meta-value text-zinc-800 dark:text-zinc-200">
                          {cert.expires}
                        </span>
                      </span>
                    )}
                  </div>

                  {cert.credentialId !== "—" && (
                    <p className="ach-credential text-zinc-600 dark:text-zinc-400">
                      ID:{" "}
                      <span className="ach-credential-value text-zinc-800 dark:text-zinc-200">
                        {cert.credentialId}
                      </span>
                    </p>
                  )}

                  <a
                    href={cert.pdfPath}
                    download={cert.download}
                    className="ach-download-btn"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color})`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ach-btn-icon"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </AnimatePresence>

      <style jsx>{`
        .ach-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 1024px) {
          .ach-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .ach-card {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 1.125rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(10px);
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding-right: 1.25rem;
        }
        .ach-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        .ach-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          height: 100%;
        }

        .ach-thumb-wrapper {
          width: 180px;
          aspect-ratio: 297 / 210;
          background: #fff;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 0.5rem;
          line-height: 0;
          margin: 1.25rem;
          margin-left: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .ach-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.25rem 0;
          flex: 1;
        }
        .ach-result {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        .ach-title {
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.3;
        }
        .ach-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .ach-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          font-weight: 500;
          line-height: 1.4;
        }
        .ach-tag-icon {
          width: 0.75rem;
          height: 0.75rem;
          flex-shrink: 0;
          opacity: 0.65;
        }
        .ach-meta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 0.1rem;
        }
        .ach-meta-item {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .ach-meta-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 600;
        }
        .ach-meta-value {
          font-size: 0.75rem;
          font-weight: 600;
        }
        .ach-credential {
          font-size: 0.65rem;
          margin: 0;
          word-break: break-all;
        }
        .ach-credential-value {
          font-weight: 600;
        }

        .ach-download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 0.5rem;
          padding: 0.5rem 0.9rem;
          border-radius: 0.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease, opacity 0.2s ease;
          align-self: flex-start;
        }
        .ach-download-btn:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }
        .ach-btn-icon {
          width: 0.85rem;
          height: 0.85rem;
        }
      `}</style>
    </section>
  );
}
