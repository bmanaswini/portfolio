import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import EducationalBackground from "./EducationalBackground";
import WorkExperience from "./WorkExperience";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id="hero" className="py-20">
            <HeroSection />
          </section>

          <motion.section
            id="experience"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <WorkExperience />
          </motion.section>

          <motion.section
            id="skills"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <SkillsSection />
          </motion.section>

          <motion.section
            id="education"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <EducationalBackground />
          </motion.section>

          <motion.section
            id="contact"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ContactSection />
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-muted py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed and built with React, Tailwind CSS, and ShadCN UI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
