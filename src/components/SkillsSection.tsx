import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsSection = ({
  skills = [
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "languages" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "CSS/Tailwind", level: 85, category: "frontend" },
    { name: "JavaScript", level: 95, category: "languages" },
    { name: "GraphQL", level: 75, category: "backend" },
    { name: "UI/UX Design", level: 70, category: "design" },
    { name: "Figma", level: 65, category: "design" },
    { name: "Python", level: 60, category: "languages" },
    { name: "Docker", level: 70, category: "devops" },
    { name: "AWS", level: 65, category: "devops" },
    { name: "Git", level: 90, category: "devops" },
    { name: "Machine Learning", level: 75, category: "ai" },
    { name: "Natural Language Processing", level: 80, category: "ai" },
    { name: "Computer Vision", level: 70, category: "ai" },
    { name: "TensorFlow", level: 65, category: "ai" },
    { name: "PyTorch", level: 60, category: "ai" },
  ],
  title = "My Skills",
  description = "I specialize in modern web technologies with a focus on creating responsive, accessible, and performant applications. I'm particularly passionate about working with AI technologies to build intelligent solutions.",
}: SkillsSectionProps) => {
  // Get unique categories
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Card key={skill.name} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg">{skill.name}</h3>
                          <Badge variant="secondary">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
