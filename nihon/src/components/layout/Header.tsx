"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "/", text: "Início" },
    { href: "/about", text: "Sobre Nós" },
  ];

  const socialLinks = [
    { href: "https://wa.me/5561999614440", icon: FaWhatsapp, hoverColor: "hover:text-green-500", label: "WhatsApp" },
    { href: "https://www.instagram.com/nihon_automacao/", icon: FaInstagram, hoverColor: "hover:text-pink-500", label: "Instagram" },
    { href: "https://maps.app.goo.gl/FEQ8GMZE9YFSNDoA9", icon: FaMapMarkerAlt, hoverColor: "hover:text-red-500", label: "Location" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[72px] px-6">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/logo/logoHorizontal.jpeg"
              alt="Nihon Automação Logo"
              width={120}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-5 text-gray-500 h-full">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <social.icon className={`w-6 h-6 transition-colors ${social.hoverColor}`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <FiX className="h-7 w-7 text-gray-800" /> : <FiMenu className="h-7 w-7 text-gray-800" />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm md:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-white md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-5">
            <button onClick={toggleMenu} aria-label="Close Menu">
              <FiX className="h-8 w-8 text-gray-800" />
            </button>
        </div>
        <nav className="flex flex-col items-center gap-8 text-xl font-medium mt-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={handleLinkClick} className="text-gray-800 hover:text-primary transition-colors">
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center items-center gap-8 text-gray-600 text-3xl mt-16">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} aria-label={social.label}>
                <social.icon className={`transition-colors ${social.hoverColor}`} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Header;