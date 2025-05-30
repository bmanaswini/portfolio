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
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  logo?: string;
}

interface WorkExperienceProps {
  jobs?: Job[];
}

const WorkExperience = ({
  jobs = [
    {
      title: "Software Engineer",
      company: "Constant Contact",
      location: "Boston, MA",
      logo: "public/images/ctct-logo.png",
      period: "2022 - Present",
      description:
        "Leading development of cutting-edge web applications using modern technologies.",
      responsibilities: [
        "Configured tracking links identifying unique click counts on identical URLs, solving 100+ customer issues",
        "Architected system design for user entitlements segmenting 500+ users, enabling tailored content access",
        "Proposed POC to identify device types from tracking links, increasing 50% accuracy in reporting data",
        "Redesigned reporting dashboard increasing readability by 50%, increasing premium audience acquisition",
        "Tracked user actions on customer domain sites for attribution, improving tracking abilities by 40%",
        "Primarily maintained disaster recovery server for tracking email clicks, ensuring 100% uptime",
        "Migrated on-prem microservice to Kubernetes, slashing downtime by 70%, improving system reliability",
      ],
      technologies: [
        "Java",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "AWS",
      ],
    },
  ],
}: WorkExperienceProps) => {
  return (
    <div className="w-full bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions in the industry.
          </p>
        </motion.div>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="border-l-4 border-primary h-full">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex items-center gap-3">
                        {job.logo && (
                          <div className="flex-shrink-0 w-15 h-12 overflow-hidden bg-muted flex items-center justify-center">
                            <img
                              src={job.logo}
                              alt={`${job.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl md:text-2xl">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-primary font-medium flex items-center mt-1">
                            <Building2 className="h-4 w-4 mr-1" />
                            {job.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-foreground">{job.description}</p>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold">
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-sm">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  {job.technologies && (
                    <CardFooter className="flex flex-wrap gap-2 border-t bg-muted/50 pt-4">
                      {job.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </CardFooter>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
