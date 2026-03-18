import dynamic from "next/dynamic";
import FadeUp from "@/animation/fade-up";
import { AnimatePresence } from "framer-motion";

// Load PDF thumbnail client-side only (react-pdf requires browser APIs)
const PdfThumbnail = dynamic(() => import("@/components/pdf-thumbnail"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-700" />
  ),
});

const CVS = [
  {
    id: "general",
    label: "General CV",
    filename: "Alok Kumar Sharma — General",
    path: "/Alok-Kumar-Sharma-CV.pdf",
    download: "Alok-Kumar-Sharma-General-CV.pdf",
  },
  {
    id: "main",
    label: "Main CV",
    filename: "Alok Kumar — CV",
    path: "/Alok-Kumar-CV.pdf",
    download: "Alok-Kumar-CV.pdf",
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
              A quick look at my professional background — download a copy
              below.
            </p>
          </div>
        </FadeUp>

        <FadeUp key="cv-grid" duration={0.6} delay={0.2}>
          <div className="cv-grid">
            {CVS.map((cv) => (
              <div key={cv.id} className="cv-card">
                {/* PDF Thumbnail — crisp canvas render at lower resolution for speed */}
                <div className="cv-preview-wrapper">
                  <PdfThumbnail src={cv.path} width={200} />
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
                      <p className="cv-filename">{cv.filename}</p>
                      <p className="cv-filetype">PDF Document</p>
                    </div>
                  </div>

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
            ))}
          </div>
        </FadeUp>
      </AnimatePresence>

      <style jsx>{`
        .cv-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 1024px) {
          .cv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .cv-card {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          padding: 1.25rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.04);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .cv-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(0, 191, 255, 0.18);
        }

        .cv-preview-wrapper {
          width: 110px;
          flex-shrink: 0;
          aspect-ratio: 210 / 297;
          border-radius: 0.5rem;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          line-height: 0;
        }

        .cv-footer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          flex: 1;
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
          width: 3rem;
          height: 3rem;
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
          width: 1.4rem;
          height: 1.4rem;
          color: #00bfff;
        }

        .cv-filename {
          font-size: 0.95rem;
          font-weight: 600;
          color: #e4e4e7;
          margin: 0;
          line-height: 1.4;
        }

        .cv-filetype {
          font-size: 0.75rem;
          color: #a1a1aa;
          margin: 0;
          margin-top: 2px;
        }

        .cv-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: 0.625rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #00bfff, #a855f7);
          box-shadow: 0 4px 16px rgba(0, 191, 255, 0.3);
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cv-download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0, 191, 255, 0.5);
        }

        .cv-btn-icon {
          width: 1rem;
          height: 1rem;
        }
      `}</style>
    </section>
  );
}
