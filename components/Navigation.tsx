"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleThemeToggle = () => {
    setIsAnimating(true);
    
    // Add class to prevent transitions during theme change
    document.documentElement.classList.add('changing-theme');
    
    setTheme(theme === "light" ? "dark" : "light");
    
    // Remove the no-transition class after a brief delay
    setTimeout(() => {
      document.documentElement.classList.remove('changing-theme');
    }, 50);
    
    // Stop icon animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  const navItems = [
    { label: "about", href: "/" },
    { label: "blog", href: "/blog" },
    { label: "publications", href: "/publications" },
    { label: "projects", href: "/projects" },
    { label: "cv", href: "/cv" },
  ];

  return (
    <nav className="flex items-center justify-between w-full max-w-3xl mx-auto px-6 py-6">
      <div className="flex items-center space-x-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={`${
                isActive 
                  ? "text-accent-purple" 
                  : "text-foreground hover:text-accent-purple"
              } hover:bg-transparent p-0 h-auto font-light transition-colors`}
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          );
        })}
      </div>
      <Button
        variant="ghost"
        className={`text-muted-foreground hover:text-accent-purple hover:bg-transparent p-0 h-auto transition-all duration-200 cursor-pointer ${
          isAnimating ? 'animate-theme-icon-spin' : ''
        }`}
        aria-label="Toggle theme"
        onClick={handleThemeToggle}
      >
        <FontAwesomeIcon 
          icon={!mounted ? faMoon : theme === "light" ? faMoon : faSun} 
          className="w-5 h-5"
        />
      </Button>
    </nav>
  );
};

export default Navigation;