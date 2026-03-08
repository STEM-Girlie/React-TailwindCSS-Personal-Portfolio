import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "TailwindCSS",
  "JavaScript",
  "Python",
  "AWS",
  "Github",
  "MicrosoftAzure",
  "VSCode",
  "Node.js",
  "HTML",
  "CSS",
];

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

          <div className="relative animate-fade-in animation-delay-300">
            {/*profile image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/headshot3.png"
                  alt="Nasreen Baker"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/*floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/*stats badge*/}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3 </div>
                  <div className="text-xs text-muted-foreground">
                    Months Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*skills section*/}
        <div className="mt-20 animate-fade-in-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-4 ">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shring-0 pxp-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
