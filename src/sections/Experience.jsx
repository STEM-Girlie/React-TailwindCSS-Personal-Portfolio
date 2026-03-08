const experiences = [
  {
    company: "Transport for London (TfL)",
    role: "Licensing Case Worker",
    duration: "2024 - Present",
    description:
      "Responsible for screening and processing licensing applications for various transport services.",
    current: true,
  },
  {
    company: "Catherine Deane Bridal",
    role: "Bridal Consultant",
    duration: "2024 ",
    description:
      "Delivered exceptional customer service by assisting clients in selecting bridal gowns and accessories, ensuring a personalized and memorable shopping experience.",
    current: false,
  },
  {
    company: "London Hormone Clinic ",
    role: "Personal Assistant to Director",
    duration: "2019 –  2023 ",
    description:
      "Provided administrative support to the director, managing schedules, coordinating meetings, and handling correspondence to ensure efficient office operations.",
    current: false,
  },
  {
    company: "The Tavistock & Portman NHS Foundation Trust",
    role: "Personal Assistant to Chair of Board of Governors",
    duration: "2017 – 2018",
    description:
      "Handled administrative tasks for the Chair of the Board of Governors, including scheduling meetings, preparing documents, and facilitating communication between board members.",
    current: false,
  },
  {
    company: "The Harley Street Eye Clinic",
    role: "Managing Assistant & PA to Director",
    duration: "2015 – 2017 ",
    description: "",
  },
  {
    company: "Benugo CoffeeHouse",
    role: "Front of House & Barista",
    duration: "2015 – 2017 ",
    description:
      "provided excellent customer service, prepared and served beverages & food stuff, managed and trained a small team, and maintained a clean and welcoming environment for customers.",
    current: false,
  },
];
export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/*background glow effect */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/*section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Career Journey
          </span>
          <h2 className=" text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6 animation-fade-in animation-delay-200 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              shaped me.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional journey, from curiosity to
            qualification.
          </p>
        </div>

        {/*experience timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/*experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/*timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/*content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500
                    `}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
