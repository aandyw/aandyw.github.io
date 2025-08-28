const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-border-color mt-16">
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
    </footer>
  );
};

export default Footer;