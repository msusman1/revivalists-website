"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
                src={ "/placeholder-logo.webp"}
                alt={"Logo"}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-[#f7bd00] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#f7bd00] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("blogs")}
              className="text-white hover:text-[#f7bd00] transition-colors"
            >
              Blogs
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-white hover:text-[#f7bd00] transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-white hover:text-[#f7bd00] transition-colors"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-[#f7bd00]" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md mt-4 py-4 px-2 rounded-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-[#f7bd00] transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-[#f7bd00] transition-colors py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("blogs")}
                className="text-white hover:text-[#f7bd00] transition-colors py-2"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-white hover:text-[#f7bd00] transition-colors py-2"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("join")}
                className="text-white hover:text-[#f7bd00] transition-colors py-2"
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
