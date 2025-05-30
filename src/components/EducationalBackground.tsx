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

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  logoUrl?: string;
}

interface EducationalBackgroundProps {
  educations?: Education[];
}

const EducationalBackground = ({
  educations = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University of New York at Buffalo",
      location: "Buffalo, NY",
      period: "2018 - 2022",
      description:
        "Focus on Data Structures, Algorithms and Software Engineering",
      logoUrl:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=200&q=80",
    },
    {
      degree: "A levels (Cambridge Board)",
      institution: "Dr. Pillai Global Academy",
      location: "Mumbai, India",
      period: "2016 - 2018",
      description: "Advanced Placement in Mathematics and Computer Science",
      logoUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80",
    },
  ],
}: EducationalBackgroundProps) => {
  return (
    <div className="w-full bg-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and expertise in
            the field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
          {educations.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {education.logoUrl && (
                      <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={education.logoUrl}
                          alt={`${education.institution} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle>{education.degree}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {education.institution}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{education.location}</span>
                    <span>{education.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{education.description}</p>
                  {education.achievements && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">
                        Achievements & Activities
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {education.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline">Education</Badge>
                  <Badge variant="secondary">
                    {education.period.split(" - ")[1]}
                  </Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalBackground;
