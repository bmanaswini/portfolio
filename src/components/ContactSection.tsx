import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setFormStatus("success");
        setFormState({ name: "", email: "", message: "" });

        // Reset form status after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      }, 1000);
    } else {
      setFormStatus("error");
    }
  };

  return (
    <section id={id} className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out using the form below or through any of my social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:bmanaswini21@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      bmanaswini21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Boston, MA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/manaswini0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manaswinib/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

              {formStatus === "success" && (
                <Alert className="mb-6 bg-success/10 text-success border-success/20">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your message has been sent successfully!
                  </AlertDescription>
                </Alert>
              )}

              {formStatus === "error" && (
                <Alert className="mb-6 bg-destructive/10 text-destructive border-destructive/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please fix the errors in the form.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
