"use client";
import Image from "next/image";
import { ChevronDown, Home, User, Palette, Phone } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Palette },
  { href: "/contact", label: "Contact", icon: Phone },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-2 lg:bottom-6 left-2 lg:left-6 z-50">
      <div className="relative">
        {/* Profile Button */}
        <button
  onClick={() => setOpen((prev) => !prev)}
  className="relative flex items-center justify-between focus:outline-none space-x-2 w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] p-1"
>
  {/* Profile Image */}
  <div className="relative w-full h-full rounded-full overflow-hidden">
    <Image
      src="/picofme.png"
      alt="Profile"
      fill
      className="object-cover border border-white rounded-full shadow-lg"
    />
  </div>

  {/* Chevron Arrow (only on large screens if needed) */}
  <ChevronDown
    className={`absolute -right-5 top-1/2 -translate-y-1/2 text-white transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  />
</button>


        {/* Dropdown */}
        <div
          className={`absolute bottom-full mb-8 left-0 w-52 rounded-lg transition-all duration-300 ease-in-out z-50 flex items-start lg:items-center flex-col space-y-8 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="relative group button"
            >
              
              {/* Icon + Label */}
              <Icon className="w-5 h-5 z-10" strokeWidth={1.5} />
              <span className="z-10 hidden lg:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
