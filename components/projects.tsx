"use client"

import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system using Arduino and Raspberry Pi with mobile app integration.",
      tags: ["Arduino", "IoT", "Python", "Mobile"],
      preview: "🏠",
      detailedDescription:
        "A comprehensive IoT home automation system that enables remote control and automation of household devices. Built with Arduino microcontrollers and Raspberry Pi servers, the system features real-time sensor monitoring, automated scheduling based on occupancy and time, and a mobile app for intuitive control from anywhere. Includes smart lighting control, temperature regulation, security monitoring, and energy consumption tracking with machine learning-based optimization for reducing utility costs.",
      achievements: [
        "Reduced energy consumption by 35% through intelligent automation",
        "Developed a mobile app with 4.8-star rating from users",
        "Integrated 15+ smart devices with seamless connectivity",
        "Implemented ML algorithms for predictive automation patterns",
      ],
    },
    {
      title: "Neural Network Trainer",
      description: "Web-based tool for training and visualizing neural networks with real-time data visualization.",
      tags: ["Python", "Web Dev", "ML", "Visualization"],
      preview: "🧠",
      detailedDescription:
        "An interactive web platform designed for educators and ML enthusiasts to build, train, and visualize neural networks in real-time. The tool provides a drag-and-drop interface for network architecture design, supports multiple activation functions and optimization algorithms, and displays animated visualizations of weight matrices, loss curves, and decision boundaries. Features include dataset import, hyperparameter tuning, model export, and comprehensive documentation with example datasets for common ML tasks.",
      achievements: [
        "Used by 200+ students in machine learning courses",
        "Support for multiple network architectures and layers",
        "Real-time visualization of neural network training",
        "Achieved 1000+ monthly active users from global audience",
      ],
    },
    {
      title: "3D Circuit Simulator",
      description: "Virtual 3D environment for designing and simulating circuits with real-world behavior.",
      tags: ["3D Modeling", "WebGL", "Simulation", "Education"],
      preview: "⚙️",
      detailedDescription:
        "An advanced 3D circuit simulation platform that allows users to design circuits in a immersive 3D environment with physics-based component behavior. Built with WebGL and Three.js, the simulator supports resistors, capacitors, inductors, and various semiconductor components with accurate electrical properties. Features real-time voltage/current visualization, oscilloscope integration, component property editing, and the ability to save/load circuit designs. Includes an extensive component library and educational tutorials for electronics learning.",
      achievements: [
        "Simulates complex circuits with physics-accurate behavior",
        "Interactive 3D visualization with smooth rendering at 60FPS",
        "Component library with 50+ real-world electronic components",
        "Used in 12 technical institutes for electronics education",
      ],
    },
    {
      title: "PCB Design Toolkit",
      description: "Comprehensive toolkit for PCB design and manufacturing with KiCad integration.",
      tags: ["KiCad", "Electronics", "Hardware", "Design"],
      preview: "🔌",
      detailedDescription:
        "A professional PCB design and manufacturing toolkit that streamlines the entire workflow from schematic capture to board layout and manufacturing files. Seamlessly integrates with KiCad, providing automated design rule checking, manufacturing optimization, cost estimation, and direct integration with PCB fabrication services. Includes component database with footprints, symbol library management, layer visualization, and design guidelines for different manufacturing capabilities. Supports multi-layer board design, BGA components, and advanced routing algorithms.",
      achievements: [
        "Accelerated PCB design process by 40% through automation",
        "Successfully manufactured 5000+ PCBs using this toolkit",
        "Reduced design errors by 95% through integrated DRC",
        "Used by electronics startups and industry professionals",
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Added decorative background elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title">FEATURED PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card/50 card-gradient border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl overflow-hidden transition-all duration-300 glow-cyan-hover hover:scale-105"
            >
              {/* Enhanced project preview with emoji and better styling */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 h-40 flex items-center justify-center border-b border-cyan-400/20 group-hover:from-cyan-500/15 group-hover:to-blue-500/15 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="text-6xl group-hover:scale-125 transition-transform duration-300 relative z-10">
                  {project.preview}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-300/90 border border-cyan-400/30 hover:bg-cyan-400/15 hover:border-cyan-400/50 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(idx)}
                  className="w-full py-2.5 border border-cyan-400/40 text-cyan-300 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all duration-300 text-sm font-medium group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-cyan-400/30 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-b from-card to-card/80 p-6 border-b border-cyan-400/20 flex justify-between items-start gap-4">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-5xl">{projects[selectedProject].preview}</span>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-300">{projects[selectedProject].title}</h2>
                  <p className="text-muted-foreground/70 text-sm mt-1">{projects[selectedProject].description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-muted-foreground hover:text-cyan-300 transition-colors text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Project Overview</h3>
                <p className="text-muted-foreground/90 leading-relaxed text-sm">
                  {projects[selectedProject].detailedDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground/90">
                      <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-400/15 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/25 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
