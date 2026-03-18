import { NextSeo } from "next-seo";

import dynamic from "next/dynamic";

import AboutHero from "@/components/about-hero";
import CVSection from "@/components/cv-section";
import AchievementsSection from "@/components/achievements-section";
import CertificationsSection from "@/components/certifications-section";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const ExperienceShowcaseList = dynamic(
  () => import("@/components/experience/experience-showcase-list"),
  { ssr: true },
);

export default function About() {
  return (
    <>
      <NextSeo
        title="About Alok Kumar | Software Developer"
        description="Learn more about Alok Kumar, a dedicated Software Developer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Alok Kumar - Software Developer",
          description:
            "Dive into the story of Alok Kumar, a Software Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Alok Kumar - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <CVSection />
      <AchievementsSection />
      <CertificationsSection />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
