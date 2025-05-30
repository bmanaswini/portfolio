import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection?: string;
  sections?: Array<{ id: string; label: string }>;
}

const Header = ({
  activeSection = "hero",
  sections = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background",
        isScrolled ? "shadow-md py-2" : "py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#hero" className="text-xl font-bold">
            Portfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {section.label}
            </a>
          ))}
          <a
            href="/Manaswini_Burugupalli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="default">
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4">
          <nav className="flex flex-col space-y-4 px-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {section.label}
              </a>
            ))}
            <a
              href="/Manaswini_Burugupalli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button size="sm" variant="default" className="w-full">
                Resume
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
