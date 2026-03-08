import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "I'm always eager to learn new technologies and stay updated with industry trends.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I believe in the power of teamwork and enjoy working alongside others to achieve common goals.",
  },
  {
    icon: Rocket,
    title: "Dedication",
    description:
      "No matter how long the journey, I remain committed to delivering my best work.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Starting off on the right foot is crucial; I prioritize learning how to write clean, maintainable code from the very beginning of each project.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*left column */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-200 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>
            <div className="space-y-4  text-muted-foreground animate-fade-in animation-delay-300">
              <p>
                I’m a newly qualified cloud professional with a lifelong
                curiosity for how things work and combined with a passion for
                learning. That instinct to take things apart—conceptually and
                technically—drives the way I learn, solve problems, and approach
                every new challenge. I thrive on understanding the “why” behind
                systems just as much as the “how.”
              </p>
              <p>
                My journey into tech has led me to hands‑on experience with
                JavaScript, React, TailwindCSS, and Python, where I’ve
                discovered how much I enjoy building clean, intuitive
                interfaces. Whether I’m designing a component or troubleshooting
                a stubborn bug, I bring patience, persistence, and a genuine
                love for problem‑solving.
              </p>
              <p>
                At the heart of my work is a commitment to creating friendly,
                accessible user experiences. I care about clarity, simplicity,
                and thoughtful design—solutions that feel good to use, not just
                good to build. I’m excited to keep growing, keep experimenting,
                and keep learning every day.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border hover:translate-transform hover:scale-110 transition-transform duration-300 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground font-serif">
                My mission is to keep learning, keep improving, and craft
                user‑friendly products that solve real problems with clarity and
                care.
              </p>
            </div>
          </div>
          {/*right column - highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in animation-delay-{index * 100 + 700}"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/1 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
