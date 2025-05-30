import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  avatarUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const HeroSection = ({
  name = "Manaswini Burugupalli",
  title = "Full Stack Developer",
  tagline = "Building technologies that make a difference.",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
  socialLinks = {
    github: "https://github.com/manaswini0",
    linkedin: "https://www.linkedin.com/in/manaswinib/",
  },
}: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {name}
            </h1>
            <h3 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
              {title}
            </h3>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">{tagline}</p>

          <div className="flex gap-4 pt-4">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img
              src={avatarUrl}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <a
              href="#experience"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground animate-bounce"
              aria-label="Scroll to experience"
            >
              <ArrowDownIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
