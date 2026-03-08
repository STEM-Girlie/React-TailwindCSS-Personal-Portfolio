export const Footer = () => {
  return (
    <section id="footer">
      {" "}
      <div>
        <footer className="text-center font-medium tracking-wider mx-auto px-6 relative text-muted-foreground">
          &copy; {new Date().getFullYear()} All Rights Reserved&reg;.
        </footer>
      </div>
    </section>
  );
};
