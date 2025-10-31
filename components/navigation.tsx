"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-accent/10 shadow-lg"
          : "bg-background/40 backdrop-blur-sm border-b border-accent/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <CHANGE> Enhanced logo with better styling */}
        <div
          className="font-mono text-lg font-bold cursor-pointer group relative"
          onClick={() => scrollToSection("hero")}
        >
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">
            {"<NM />"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-cyan-300/0 rounded opacity-0 group-hover:opacity-100 blur transition-opacity" />
        </div>

        {/* <CHANGE> Enhanced desktop navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-semibold text-muted-foreground hover:text-cyan-300 transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>

        {/* <CHANGE> Enhanced mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center group"
        >
          <div className="space-y-1.5">
            <div
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* <CHANGE> Enhanced mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-accent/20 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-2 p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-cyan-300 hover:bg-cyan-400/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
