import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
}

const ProjectsSection = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      id: "2",
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard that displays current weather and forecasts for any location. Uses OpenWeather API and features dynamic backgrounds based on weather conditions.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/username/weather",
    },
    {
      id: "3",
      title: "Task Management App",
      description:
        "A productivity app for managing tasks and projects with features like drag-and-drop organization, priority levels, and deadline notifications.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/username/tasks",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and featuring smooth animations.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/username/portfolio",
    },
  ],
  title = "My Projects",
  subtitle = "Check out some of my recent work",
}: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between pt-4 border-t">
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
