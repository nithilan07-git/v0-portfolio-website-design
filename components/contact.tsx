"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/20 relative overflow-hidden">
      {/* <CHANGE> Added decorative background elements */}
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* <CHANGE> Enhanced contact information section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-cyan-300">Get in Touch</h3>

            <div className="space-y-6">
              <div className="group">
                <p className="text-sm font-semibold text-muted-foreground/60 mb-2 tracking-widest">EMAIL</p>
                <a
                  href="mailto:nithilan@example.com"
                  className="text-lg text-cyan-300 hover:text-cyan-200 font-medium transition-colors duration-200 group-hover:translate-x-1 inline-block transition-transform"
                >
                  nithilan@example.com
                </a>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-muted-foreground/60 mb-2 tracking-widest">PHONE</p>
                <p className="text-lg text-cyan-300 font-medium">+91 XXXX XXXX XX</p>
              </div>

              <div className="group">
                <p className="text-sm font-semibold text-muted-foreground/60 mb-4 tracking-widest">FOLLOW ME</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/jfhfjssmsj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link w-12 h-12 rounded-lg bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-sm font-semibold text-cyan-300 group-hover/link:scale-125 transition-transform">GH</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/abcghdjd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link w-12 h-12 rounded-lg bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-sm font-semibold text-cyan-300 group-hover/link:scale-125 transition-transform">IN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <CHANGE> Enhanced form with better styling */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-muted-foreground/80 tracking-wide">YOUR NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 card-gradient border border-cyan-400/20 text-foreground placeholder-muted-foreground/50 focus:border-cyan-400/60 focus:bg-background focus:outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-muted-foreground/80 tracking-wide">YOUR EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 card-gradient border border-cyan-400/20 text-foreground placeholder-muted-foreground/50 focus:border-cyan-400/60 focus:bg-background focus:outline-none transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-muted-foreground/80 tracking-wide">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background/50 card-gradient border border-cyan-400/20 text-foreground placeholder-muted-foreground/50 focus:border-cyan-400/60 focus:bg-background focus:outline-none transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                submitted
                  ? "bg-green-500 text-white shadow-green-500/50"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 text-background hover:from-cyan-400 hover:to-blue-400 shadow-cyan-500/50 hover:shadow-cyan-500/70"
              }`}
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
