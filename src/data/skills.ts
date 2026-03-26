import { SiSocketdotio, SiSpring, SiScikitlearn } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { BiData } from "react-icons/bi";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "C++",
        icon: TbBrandCpp,
      },
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Libraries & Frameworks",
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpring,
      },
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "scikit-learn",
        icon: SiScikitlearn,
      },
    ],
  },
  {
    sectionName: "Backend & Real-time",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "DBMS",
        icon: BiData,
      },
    ],
  },
];
