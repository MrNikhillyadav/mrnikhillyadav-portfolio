import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ExcalidrawImg from "@/public/excalidraw.png";
import ChatAppImg from "@/public/chatapp-intro.png";
import GithubCopilotImg from "@/public/githubCopilot.png";
import MindXcapeImg from "@/public/mindXcape.png";
import LinearImg from "@/public/linearImg.png";
import JobHuntImg from "@/public/jobhunt.png";
import DevSpaceImg from "@/public/devspace.png";

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
    title: "DevSpace",
    description:
      "A full stack platform for developer to share their interview experiences and learning with others in the community.",
    tags: ["React", "Next.js", "Prisma","Postgres", "Tailwind CSS",],
    imageUrl: DevSpaceImg,
    href : "https://devxspace.vercel.app/",
  },
  {
    title: "Real-time Chat App",
    description:
      "Built a full stack real-time chat app using websockets, Next.js and Tailwind CSS to chat with multiple user in real-time.",
    tags: ["React", "Next.js", "Prisma","Postgres", "Tailwind CSS",],
    imageUrl: ChatAppImg,
    href : "https://chatify-seven-beige.vercel.app/",
  },
  {
    title: "GitHub Copilot clone",
    description:
      "Crafted a GitHub Copilot clone with TypeScript, Node.js, Next.js and  for a streamlined user experience.",
    tags: ["Next.js","Prisma ORM", "TailwindCSS", "Node.js"],
    imageUrl: GithubCopilotImg,
      href : "https://github-copilot-clone.vercel.app/",
  },
  {
    title: "JobHunt Portal",
    description:
      "A fullstack Job portal where you developers can find the latest job opportunities from all across the globe.",
    tags: ["Next.js","Prisma ORM", "TailwindCSS","NeonDb", "Vercel blob"],
    imageUrl: JobHuntImg,
      href : "https://jobhunt-rust.vercel.app/",
  },
  {
    title: "MindXcape",
    description:
      "Unlock mental clarity with our AI-Psychologist. Share your thoughts, receive personalized guidance, and find support anytime, anywhere.",
      tags: ["React", "Next.js", "Drizzle ORM","Neon DB", "Tailwind CSS",],
      imageUrl: MindXcapeImg,
      href : "https://mindxcape-ai.vercel.app/",
    },
    {
      title: "Linear app",
      description:
      "Linear is a purpose-built tool for planning and building products. Streamline issues, projects, and product roadmaps.",
      tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS",],
      imageUrl: LinearImg,
      href : "https://linear-page.vercel.app/",
    },
    {
      title: "Excalidraw",
      description:
        "This is an Implementation of student attendace system to keep track of all the records regarding students Performance.",
      tags: ["React", "Next.js", "Prisma","Postgres", "Tailwind CSS",],
      imageUrl: ExcalidrawImg,
        href : "https://chatify-seven-beige.vercel.app/",
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
