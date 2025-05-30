import React from "react";
import Header from "./Header";
import EducationalBackground from "./EducationalBackground";
import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeSection="education" />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <EducationalBackground />
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

export default EducationPage;
