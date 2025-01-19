"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEye } from "react-icons/fa"; // Import the eye icon

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group flex gap-2 mb-4 cursor-pointer sm:mb-8  last:mb-0" // Changed mb-3 to mb-4 for gap
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      <section 
        className={`bg-gray-100 max-w-[42rem] gap-4   border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] 
          transition duration-300 ${isHovered ? 'bg-black bg-opacity-80' : 'hover:bg-gray-200'} 
          dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]  flex flex-col gap-4 h-full sm:group-even:ml-[18rem]">
          <h3 className={`text-2xl font-semibold ${isHovered ? 'text-white' : 'text-white'}`}>{title}</h3>
          <p className={`mt-2 leading-relaxed ${isHovered ? 'text-white' : 'text-gray-700'} dark:text-white/70`}>
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image 
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] hover:shadow-6xl rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.18]
        group-hover:-translate-x-2
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-2
        group-even:group-hover:translate-y-2
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />

        {/* Hover message with eye icon */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-75 rounded-lg">
            <span className="flex items-center text-white text-lg font-semibold">
              <FaEye className="mr-2" /> {/* Eye icon */}
              Click to view the live project
            </span>
          </div>
        )}
      </section>
    </motion.a>
  );
}
