const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 border-t border-border-color mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          Copyright © 2024{" "}
          <a
            href="/"
            className="text-accent-purple hover:text-accent-purple-hover transition-colors"
          >
            Andy Wu
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
