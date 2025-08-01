"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Importa o hook para obter a rota atual
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu
      className={`md:px-14 flex items-center justify-between fixed w-full h-12 bg-white/30 backdrop-blur-lg shadow-sm z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <span className="text-primary">Carolinne Melo</span>
      <NavigationMenuList className="flex gap-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavigationMenuItem
              key={link.href}
              className={`py-1 px-2 h-full w-full rounded-sm ${
                isActive ? "bg-white" : "hover:bg-white/70"
              }`}
            >
              <NavigationMenuLink asChild>
                <Link href={link.href} className="text-primary">
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
