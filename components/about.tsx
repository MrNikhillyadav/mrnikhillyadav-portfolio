"use client";

import React from 'react'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a driven full-stack web developer currently pursuing B.Tech {" "}
        from Netaji Subhas University of Technology, New Delhi.
        My core stack is {" "}
        <span className="font-medium">
          Javascript, React, Next.js, Node.js, and MongoDB
        </span>
        . 
        I&apos; am also experienced working with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        I am currently
        learning about{" "}
        <span className="font-medium">Docker and Kubernetes </span>. I am also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
