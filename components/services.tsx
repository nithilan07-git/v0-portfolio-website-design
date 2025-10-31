export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive web design and full-stack development with Next.js, React, and contemporary frameworks.",
      icon: "💻",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "UI/UX Design",
      description: "Aesthetic user experiences crafted with Figma and Canva, focusing on intuitive interfaces and visual appeal.",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Embedded Systems",
      description: "Microcontroller-based development and prototyping using Arduino, Raspberry Pi, and custom PCB design.",
      icon: "🔌",
      color: "from-cyan-500 to-green-500",
    },
    {
      title: "Circuit Design",
      description: "PCB design and testing using KiCad and other professional tools for reliable hardware solutions.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "3D Modeling",
      description: "Professional 3D design and modeling for product visualization and prototyping using industry-standard tools.",
      icon: "📐",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cloud Computing",
      description: "Deployment and integration of scalable applications with modern cloud platforms and CI/CD pipelines.",
      icon: "☁️",
      color: "from-cyan-400 to-blue-600",
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* <CHANGE> Added decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title">SERVICES & EXPERTISE</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-card/50 card-gradient border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl p-8 transition-all duration-300 overflow-hidden glow-cyan-hover hover:scale-105"
            >
              {/* <CHANGE> Added gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 space-y-4">
                <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{service.title}</h3>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* <CHANGE> Added bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
