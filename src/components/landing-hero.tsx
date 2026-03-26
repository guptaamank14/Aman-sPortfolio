import { useRef } from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  return (
    <motion.section
      style={{ y }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Text Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6}>
                <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                  Aman kumar Gupta
                </h1>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                  Machine Learning Student
                </span>
              </FadeUp>
              <FadeUp key="description" duration={0.6} delay={0.2}>
                <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                  {
                    "Hi, I'm Aman Kumar Gupta, a passionate Machine Learning student who enjoys building intelligent systems that learn from complex data. I have a strong foundation in deep learning, statistical modeling, and AI, and I'm driven by exploring how these technologies can solve real-world problems and create meaningful impact. Whether it's training predictive models, optimizing neural networks, or deploying AI solutions, I'm always eager to learn new algorithms and continuously refine my skills in the evolving AI landscape."
                  }
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>

          {/* Right: Circular Profile Image */}
          <div className="pointer-events-auto flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
            <AnimatePresence>
              <FadeUp key="hero-profile" duration={0.7} delay={0.3}>
                <div className="profile-circle-wrapper">
                  <div className="profile-circle-ring">
                    <div className="profile-circle-inner">
                      <img
                        src="/images/profile.png"
                        alt="Aman kumar Gupta - Profile"
                        className="profile-circle-img"
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-circle-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }

        /* Ring container — only for sizing, NO filter here */
        .profile-circle-ring {
          position: relative;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .profile-circle-ring {
            width: 420px;
            height: 420px;
          }
        }

        @media (min-width: 1024px) {
          .profile-circle-ring {
            width: 460px;
            height: 460px;
          }
        }

        /* Spinning gradient ring — pseudo-element, completely independent of the image */
        .profile-circle-ring::before {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #00bfff,
            #007bff,
            #a855f7,
            #ec4899,
            #00bfff
          );
          animation: spin-ring 4s linear infinite;
          z-index: 0;
        }

        /* Blurred glow layer — also a pseudo-element, no impact on image */
        .profile-circle-ring::after {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #00bfff,
            #007bff,
            #a855f7,
            #ec4899,
            #00bfff
          );
          filter: blur(18px);
          opacity: 0.55;
          animation: spin-ring 4s linear infinite;
          z-index: -1;
        }

        @keyframes spin-ring {
          to {
            transform: rotate(360deg);
          }
        }

        /* Image container sits on top of both pseudo-elements, fully isolated */
        .profile-circle-inner {
          position: relative;
          z-index: 1;
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #0a0a0a;
          background: #0a0a0a;
          isolation: isolate;
        }

        .profile-circle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 50%;
          display: block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-circle-wrapper:hover .profile-circle-img {
          transform: scale(1.05);
        }

        .profile-circle-wrapper:hover .profile-circle-ring::before {
          animation-duration: 2s;
        }

        .profile-circle-wrapper:hover .profile-circle-ring::after {
          opacity: 0.8;
          animation-duration: 2s;
        }
      `}</style>
    </motion.section>
  );
}
