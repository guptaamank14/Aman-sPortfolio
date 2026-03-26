import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";

const CVS = [
  {
    id: "main",
    label: "Aman's CV",
    filename: "Aman Kumar Gupta — CV",
    path: "/Aman-Cv.pdf",
    download: "Aman-Kumar-Gupta-CV.pdf",
  },
];

export default function CVSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-14 md:px-20">
      <AnimatePresence>
        <FadeUp key="cv-heading" duration={0.6}>
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">
              My Resume
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              A quick look at my professional background — view or download a
              copy below.
            </p>
          </div>
        </FadeUp>

        <FadeUp key="cv-grid" duration={0.6} delay={0.2}>
          <div className="cv-grid">
            {CVS.map((cv) => (
              <div key={cv.id} className="cv-card">
                {/* PDF Preview using native browser renderer — always visible */}
                <div className="cv-preview-wrapper">
                  <object
                    data={`${cv.path}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    type="application/pdf"
                    className="cv-object"
                    aria-label={cv.filename}
                  >
                    {/* Fallback if browser can't render PDF inline */}
                    <div className="cv-fallback">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="cv-fallback-icon"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <p>PDF preview unavailable</p>
                    </div>
                  </object>
                </div>

                {/* Card footer */}
                <div className="cv-footer">
                  <div className="cv-meta">
                    <div className="cv-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cv-icon-svg"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    </div>
                    <div>
                      <p className="cv-filename text-zinc-900 dark:text-zinc-100">
                        {cv.filename}
                      </p>
                      <p className="cv-filetype text-zinc-600 dark:text-zinc-400">
                        PDF Document
                      </p>
                    </div>
                  </div>

                  <div className="cv-actions">
                    {/* View button — opens PDF in new tab */}
                    <a
                      href={cv.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-view-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cv-btn-icon"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      View
                    </a>

                    {/* Download button */}
                    <a
                      href={cv.path}
                      download={cv.download}
                      className="cv-download-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cv-btn-icon"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </AnimatePresence>

      <style jsx>{`
        .cv-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 560px;
        }

        @media (min-width: 1024px) {
          .cv-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 100%;
          }
        }

        .cv-card {
          display: flex;
          flex-direction: column;
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.04);
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .cv-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(0, 191, 255, 0.18);
        }

        /* Native PDF preview — tall portrait ratio */
        .cv-preview-wrapper {
          width: 100%;
          aspect-ratio: 210 / 280;
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        .cv-object {
          width: 100%;
          height: 100%;
          display: block;
          border: none;
        }

        .cv-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #71717a;
          font-size: 0.85rem;
        }

        .cv-fallback-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #a1a1aa;
        }

        /* Footer below the preview */
        .cv-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.25rem;
        }

        .cv-meta {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .cv-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 0.75rem;
          background: linear-gradient(
            135deg,
            rgba(0, 191, 255, 0.1),
            rgba(168, 85, 247, 0.1)
          );
          border: 1px solid rgba(0, 191, 255, 0.2);
          flex-shrink: 0;
        }

        .cv-icon-svg {
          width: 1.3rem;
          height: 1.3rem;
          color: #00bfff;
        }

        .cv-filename {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
        }

        .cv-filetype {
          font-size: 0.75rem;
          margin: 0;
          margin-top: 2px;
        }

        /* Action buttons row */
        .cv-actions {
          display: flex;
          gap: 0.75rem;
        }

        .cv-view-btn,
        .cv-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border-radius: 0.625rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cv-view-btn {
          color: #00bfff;
          border: 1px solid rgba(0, 191, 255, 0.35);
          background: rgba(0, 191, 255, 0.07);
        }

        .cv-view-btn:hover {
          background: rgba(0, 191, 255, 0.14);
          transform: translateY(-1px);
        }

        .cv-download-btn {
          color: #fff;
          background: linear-gradient(135deg, #00bfff, #a855f7);
          box-shadow: 0 4px 16px rgba(0, 191, 255, 0.3);
        }

        .cv-download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0, 191, 255, 0.5);
        }

        .cv-btn-icon {
          width: 0.95rem;
          height: 0.95rem;
        }
      `}</style>
    </section>
  );
}
