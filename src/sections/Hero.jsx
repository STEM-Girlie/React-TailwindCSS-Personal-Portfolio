import { Button } from "@/components/Button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0">
        <img
          src="/HeroImage.jpg"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/*green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full"
            style={{
              backgroundColor: "#20b2a6",
              opacity: 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/*content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left column for text content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Junior Web Developer • Cloud Practitioner
              </span>
            </div>
            {/*headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:7xl font-bold leading-tight animate-fade-in animation-delay-200">
                Aspiring Web Developer <br />
                <span className="text-primary glow-text italic font-serif ">
                  Design‑Focused, <br />
                  Cloud‑Driven.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                Hi, I'm Nasreen Baker - a Cloud Practitioner and junior
                developer who loves building with React, TailwindCSS,
                JavaScript, and Python. A lot of my free time goes into creating
                practical web apps and learning new techniques to level up my
                development skills.
              </p>
            </div>
            {/*CTAs*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button size-lg>
                Get In Touch <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/*social links*/}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">
                Follow my journey:
              </span>
              {[
                { icon: Github, href: "https://github.com/STEM-Girlie" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nasreenbaker",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/*right column for profile image*/}
        </div>
      </div>
    </section>
  );
};
