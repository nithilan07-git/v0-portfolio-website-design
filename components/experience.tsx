export default function Experience() {
  const experiences = [
    {
      role: "Internship",
      company: "NVIDIA",
      period: "2025 – 2026",
      description:
        "Assisting in embedded system development and optimization tasks, working with cutting-edge technologies in compute and AI acceleration.",
      tags: ["Embedded Systems", "Optimization", "CUDA", "AI"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-card/20 relative overflow-hidden">
      {/* <CHANGE> Added decorative background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-background/50 card-gradient border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl p-8 transition-all duration-300 overflow-hidden glow-cyan-hover"
            >
              {/* <CHANGE> Added accent line on left */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-cyan-300">{exp.role}</h3>
                  <p className="text-lg text-blue-300/90 font-medium">{exp.company}</p>
                </div>
                <span className="inline-fit text-xs font-semibold tracking-widest text-muted-foreground/60 px-3 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/20">
                  {exp.period}
                </span>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6 font-light">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-200/90 border border-cyan-400/30 hover:bg-cyan-400/15 transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
