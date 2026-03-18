import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";

const CV_PATH = "/Alok-Kumar-Sharma-CV.pdf";

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
              A quick look at my professional background — download a copy below.
            </p>
          </div>
        </FadeUp>

        <FadeUp key="cv-card" duration={0.6} delay={0.2}>
          <div className="cv-card">
            {/* PDF Thumbnail */}
            <div className="cv-preview-wrapper">
              <iframe
                src={`${CV_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="Alok Kumar Sharma - CV Preview"
                className="cv-iframe"
              />
              {/* Overlay to block iframe interaction and keep it clean */}
              <div className="cv-overlay" />
            </div>

            {/* Info + Download */}
            <div className="cv-info">
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
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div>
                  <p className="cv-filename">Alok Kumar Sharma — General CV</p>
                  <p className="cv-filetype">PDF Document</p>
                </div>
              </div>

              <a
                href={CV_PATH}
                download="Alok-Kumar-Sharma-CV.pdf"
                className="cv-download-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="cv-btn-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </FadeUp>
      </AnimatePresence>

      <style jsx>{`
        .cv-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          padding: 2rem;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: box-shadow 0.3s ease;
        }

        .cv-card:hover {
          box-shadow:
            0 16px 48px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(0, 191, 255, 0.15);
        }

        @media (min-width: 1024px) {
          .cv-card {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        /* PDF Preview */
        .cv-preview-wrapper {
          position: relative;
          flex-shrink: 0;
          width: 100%;
          height: 480px;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #fff;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
        }

        @media (min-width: 1024px) {
          .cv-preview-wrapper {
            width: 420px;
            height: 560px;
          }
        }

        .cv-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          border-radius: 1rem;
        }

        /* Transparent overlay — blocks pointer events on iframe so rest of page stays interactive */
        .cv-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          cursor: default;
          border-radius: 1rem;
        }

        /* Info panel */
        .cv-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          flex: 1;
          padding: 0.5rem 0;
        }

        .cv-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cv-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 0.875rem;
          background: linear-gradient(135deg, #00bfff22, #a855f722);
          border: 1px solid rgba(0, 191, 255, 0.25);
          flex-shrink: 0;
        }

        .cv-icon-svg {
          width: 1.6rem;
          height: 1.6rem;
          color: #00bfff;
        }

        .cv-filename {
          font-size: 1rem;
          font-weight: 600;
          color: inherit;
          margin: 0;
        }

        .cv-filetype {
          font-size: 0.8rem;
          color: #888;
          margin: 0;
          margin-top: 2px;
        }

        /* Download button */
        .cv-download-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          border-radius: 0.875rem;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #00bfff, #a855f7);
          box-shadow:
            0 4px 20px rgba(0, 191, 255, 0.35),
            0 2px 8px rgba(168, 85, 247, 0.2);
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            opacity 0.25s ease;
          align-self: flex-start;
          pointer-events: auto;
        }

        .cv-download-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 8px 32px rgba(0, 191, 255, 0.5),
            0 4px 16px rgba(168, 85, 247, 0.35);
          opacity: 0.95;
        }

        .cv-download-btn:active {
          transform: translateY(0);
        }

        .cv-btn-icon {
          width: 1.2rem;
          height: 1.2rem;
        }
      `}</style>
    </section>
  );
}
