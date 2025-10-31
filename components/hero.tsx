"use client"

import { useRef } from "react"
import CircuitAnimation from "./circuit-animation"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <CircuitAnimation />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* <CHANGE> Enhanced profile avatar with better visuals */}
        <div className="flex justify-center mb-12 animate-in fade-in duration-1000">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl" />
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400/60 flex items-center justify-center glow-cyan">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30 border border-cyan-300/50 flex items-center justify-center">
                <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                  N
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <CHANGE> Improved main heading with better visual hierarchy */}
        <div className="space-y-4">
          <h1 className="gradient-text animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Nithilan M
          </h1>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-medium text-cyan-300/90 animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-300">
              Electronics Engineer × Web Developer × 3D Modeler
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-400">
              Crafting innovative solutions at the intersection of hardware and software
            </p>
          </div>
        </div>

        {/* <CHANGE> Enhanced CTA buttons with better styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <button
            onClick={() => {
              const el = document.getElementById("projects")
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 glow-cyan-hover shadow-lg"
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("contact")
              el?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 rounded-lg border-2 border-cyan-400/50 text-cyan-300 font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* <CHANGE> Enhanced social links */}
        <div className="flex gap-8 justify-center pt-8 text-muted-foreground">
          <a
            href="https://github.com/jfhfjssmsj"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-cyan-300 transition-colors duration-200"
          >
            <span className="text-sm">GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://linkedin.com/in/abcghdjd"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-cyan-300 transition-colors duration-200"
          >
            <span className="text-sm">LinkedIn</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* <CHANGE> Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground/50 tracking-widest">SCROLL</span>
            <svg className="w-5 h-5 text-cyan-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
