import { useRef } from "react";
import Image from "next/image";

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
                  Alok Kumar
                </h1>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                  Software Developer
                </span>
              </FadeUp>
              <FadeUp key="description" duration={0.6} delay={0.2}>
                <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                  Full Stack Engineer | Learning Devops &amp; Cloud |C++ &amp; DSA |
                  Attented 4+, National Hackathon Winner 1 x🏆| Building Scalable
                  Websites | Open Source and Linux Enthusiast
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
                      <Image
                        src="/images/profile.png"
                        alt="Alok Kumar - Profile"
                        width={500}
                        height={500}
                        className="profile-circle-img"
                        priority
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

        .profile-circle-ring {
          width: 340px;
          height: 340px;
          border-radius: 50%;
          padding: 5px;
          background: conic-gradient(
            from 0deg,
            #00bfff,
            #007bff,
            #a855f7,
            #ec4899,
            #00bfff
          );
          box-shadow:
            0 0 40px rgba(0, 191, 255, 0.4),
            0 0 80px rgba(168, 85, 247, 0.25),
            0 0 120px rgba(0, 191, 255, 0.1);
          animation: rotate-ring 4s linear infinite;
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

        @keyframes rotate-ring {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }

        .profile-circle-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #0a0a0a;
          background: #0a0a0a;
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

        .profile-circle-wrapper:hover .profile-circle-ring {
          box-shadow:
            0 0 60px rgba(0, 191, 255, 0.6),
            0 0 120px rgba(168, 85, 247, 0.4),
            0 0 180px rgba(0, 191, 255, 0.15);
          animation-duration: 2s;
        }
      `}</style>
    </motion.section>
  );
}
