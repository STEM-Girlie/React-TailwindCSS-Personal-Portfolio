import { Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <section id="footer container mx-auto flex items-center gap-6">
      <footer className="py-6 text-sm text-muted-foreground ">
        <div className="container mx-auto flex justify-center items-center gap-6">
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:text-primary "
          >
            NB<span className="text-primary">.</span>
          </a>

          <span>&copy; All rights reserved &reg; 2026</span>

          <span>
            <span className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/STEM-Girlie" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nasreenbaker",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </span>
          </span>
        </div>
      </footer>
    </section>
  );
};
