import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Weather Application",
    description:
      "A simple weather app to display current conditions and forecasts using a REST API.",
    image: "/project5.png",
    link: "https://stem-girlie.github.io/Project-1---Weather-App/",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/STEM-Girlie/Project-1---Weather-App.git",
  },
  {
    title: "Interactive To-Do List",
    description: "A simple to-do list app with interactive features.",
    image: "/Project1.png",
    link: "https://stem-girlie.github.io/Project-2---To-Do-List/",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/STEM-Girlie/Project-2---To-Do-List.git",
  },
  {
    title: "Quiz Game",
    description: "A simple quiz game to test your knowledge.",
    image: "/Project2.png",
    link: "https://stem-girlie.github.io/Project-3---Quiz/",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/STEM-Girlie/Project-3---Quiz.git",
  },
  {
    title: "Password Generator",
    description: "A simple password generator app.",
    image: "/project6.png",
    link: "https://stem-girlie.github.io/Project-4---Password-Generator/",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/STEM-Girlie/Project-4---Password-Generator.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/*background glow effect */}
      <div className="relative max-w-md mx-auto"></div>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-3xl" />
      <div className="relative glass rounded-3xl p-2 glow-border">
        {/*section header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Experiments & Explorations
          </span>
          <h2 className=" text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6 animation-fade-in animation-delay-200 text-secondary-foreground">
            Projects built
            <span className="font-serif italic font-normal text-white">
              {" "}
              while learning.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-300">
            These projects reflect my journey into cloud and code—small steps,
            steady progress, and lots of curiosity.
          </p>
        </div>
        {/*projects grid */}
        <div className="grid md:grid-cols-2 gap-8 py-12 px-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/*image*/}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/*overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary border-none hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight classname="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary border-none hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/*content*/}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*call to action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-400">
          <AnimatedBorderButton>
            <ArrowUpRight className="w-5 h-5" />
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
