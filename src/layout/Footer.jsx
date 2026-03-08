export const Footer = () => {
  return (
    <section id="footer">
      <footer className="py-6 text-sm text-muted-foreground">
        <div className="container mx-auto flex justify-center items-center gap-6">
          <a
            href="#"
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            NB<span className="text-primary">.</span>
          </a>

          <span>&copy; All rights reserved &reg;</span>
          <span>2026</span>
        </div>
      </footer>
    </section>
  );
};
