"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "Home" },
    {
      label: "Per Chi",
      subItems: [
        { href: "#per-chi", label: "Clienti" },
        { href: "/brochure_final.html", label: "Brochure", isExternal: true },
      ],
    },
    { href: "#vantaggi", label: "Vantaggi" },
    { href: "#come-funziona", label: "Come Funziona" },
    { href: "#piani", label: "Piani" },
    { href: "#dealer", label: "Dealer" },
    { href: "#legal-info", label: "Info Legali" },
    { href: "#contatti", label: "Contatti" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="./logo-mobility-safe.png"
              alt="Mobility Safe"
              width={0}
              height={0}
              className="h-40 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                item.subItems ? (
                  <div key={item.label} className="relative group">
                    <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                      {item.label}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.href}
                            onClick={() => scrollToSection(subItem.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href!)}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contatti")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a
                href="https://tidycal.com/sviluppo/introduzione-mobility-express-mnop9zp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota una call
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden h-screen overflow-y-auto pb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.href}
                      onClick={() => scrollToSection(subItem.href)}
                      className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href!)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-2 px-3">
              <Button
                onClick={() => scrollToSection("#wizard")}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Trova il tuo piano
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
