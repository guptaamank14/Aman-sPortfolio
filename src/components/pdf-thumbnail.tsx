import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Use the locally copied worker to bypass all CORS and Webpack import issues
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type Props = {
  src: string;
  width?: number;
};

export default function PdfThumbnail({ src, width = 400 }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    // Fallback: simple styled placeholder
    return (
      <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-10 w-10 text-zinc-400"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Skeleton shimmer while loading */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.4s infinite",
            zIndex: 0,
          }}
        />
      )}

      <Document
        file={src}
        onLoadSuccess={() => setLoaded(true)}
        onLoadError={() => setError(true)}
        loading={null}
      >
        <Page
          pageNumber={1}
          width={width}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          onRenderSuccess={() => setLoaded(true)}
          loading={null}
        />
      </Document>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        /* Make the canvas fill the container cleanly */
        .react-pdf__Page canvas {
          display: block;
          width: 100% !important;
          height: auto !important;
        }
        .react-pdf__Document {
          line-height: 0;
        }
      `}</style>
    </div>
  );
}
