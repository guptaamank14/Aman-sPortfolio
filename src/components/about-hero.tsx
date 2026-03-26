import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col gap-12 px-6 pt-20 sm:px-14 md:mt-20 md:px-20 lg:mt-0">
      <div className="w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Aman Kumar Gupta
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 max-w-4xl text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              {"A technology enthusiast who enjoys building innovative solutions that solve real-world problems. I have a strong interest in artificial intelligence, machine learning, and software development, and I'm passionate about exploring how these technologies can create meaningful impact."}
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 max-w-4xl text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              {"I enjoy turning ideas into practical projects, whether it's developing intelligent systems, working with data, or building user-friendly applications. I'm always eager to learn new tools, experiment with emerging technologies, and continuously improve my skills while creating projects that are both useful and impactful."}
            </p>
          </FadeUp>

          <FadeUp key="my-approach" duration={0.6} delay={0.6}>
            <div className="mt-12 max-w-4xl">
              <h2 className="text-3xl font-bold text-accent sm:text-4xl">
                My Approach
              </h2>
              <p className="mt-6 border-l-4 border-accent pl-4 text-base font-medium italic text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                I believe in creating technology that&apos;s not just functional
                but meaningful. Every line of code I write aims to solve real
                problems and enhance user experiences. I value clean
                architecture, collaborative development, and continuous learning
                as the foundations of great software.
              </p>
            </div>
          </FadeUp>

          <FadeUp key="not-coding" duration={0.6} delay={0.8}>
            <div className="mt-12 max-w-4xl">
              <h2 className="text-3xl font-bold text-accent sm:text-4xl">
                When I&apos;m Not Coding
              </h2>
              <ul className="mt-6 space-y-4 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl text-accent">✦</span>
                  <div>
                    <strong className="text-foreground">Surfing Web:</strong>{" "}
                    Exploring new design trends, reading tech blogs, discovering
                    innovative developer tools, and staying updated with the
                    ever-evolving world of web development.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl text-accent">✦</span>
                  <div>
                    <strong className="text-foreground">Reading:</strong> Diving
                    into sci-fi adventures, personal development books, and
                    technical literature that expands my perspective and
                    sharpens my analytical thinking.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl text-accent">✦</span>
                  <div>
                    <strong className="text-foreground">Music:</strong>{" "}
                    Discovering new genres and using music to maintain focus and
                    creativity during long coding sessions, as well as finding
                    inspiration in rhythmic patterns.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl text-accent">✦</span>
                  <div>
                    <strong className="text-foreground">Hobbies:</strong>{" "}
                    Engaging in outdoor activities, experimenting with different
                    creative pursuits, and occasionally participating in tech
                    community meetups to share knowledge.
                  </div>
                </li>
              </ul>
            </div>
          </FadeUp>

          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={1.0}
            className="mr-0 mt-12 flex items-center justify-start gap-4 lg:mr-8"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Punjab, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
