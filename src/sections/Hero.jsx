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
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80to-background"></div>
      </div>
    </section>
  );
};
