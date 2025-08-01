"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      className={`px-2 flex items-center justify-between w-full fixed md:px-14 h-12 bg-white/30 backdrop-blur-lg shadow-sm z-10 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/" className="text-primary font-bold grow">
        Carolinne Melo
      </Link>
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild className="md:hidden">
          {isMenuOpen ? (
            <FaHamburger className="text-2xl text-accent" />
          ) : (
            <Menu className="text-2xl" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white/30 backdrop-blur-lg shadow-sm ">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <DropdownMenuItem
                key={link.href}
                className={`${isActive && "bg-white/70"}`}
              >
                <Link href={link.href} className="text-primary">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <NavigationMenuList className="hidden md:flex gap-4">
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
