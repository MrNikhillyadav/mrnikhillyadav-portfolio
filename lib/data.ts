import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ExcalidrawImg from "@/public/excalidraw.png";
import ChatAppImg from "@/public/chatapp.png";
import GithubCopilotImg from "@/public/githubCopilot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development (Intern)",
    location: "Reway Soft-Technologies",
    description:
      "Deployed three React projects including a startup website from scratch ,built tender management system and explored various new tech stacks, for comprehensive functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Jan 2024",
  },
  
  {
    title: "Full Stack Developer, Freelance",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Real-time Chat App",
    description:
      "Built a full stack real-time chat app using websockets, Next.js and Tailwind CSS to chat with multiple user in real-time.",
    tags: ["React", "Next.js", "Prisma","Postgres", "Tailwind CSS",],
    imageUrl: ChatAppImg,
  },
  {
    title: "Excalidraw",
    description:
      "This is an Implementation of student attendace system to keep track of all the records regarding students Performance.",
    tags: ["React", "Next.js", "Prisma","Postgres", "Tailwind CSS",],
    imageUrl: ExcalidrawImg,
  },
  {
    title: "GitHub Copilot clone",
    description:
      "Crafted a GitHub Copilot clone with TypeScript, Node.js, Next.js and  for a streamlined user experience.",
    tags: ["Next.js","Prisma ORM", "TailwindCSS", "Node.js"],
    imageUrl: GithubCopilotImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Next.js",
  "Websocket",
  "Node.js",
  "MongoDB",
  "Prisma",
  "Git",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "C++"
] as const;
