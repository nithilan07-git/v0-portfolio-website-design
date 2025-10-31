export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: "💻",
      skills: ["Python", "JavaScript", "C++", "HTML/CSS", "TypeScript"],
    },
    {
      category: "Design & Tools",
      icon: "🎨",
      skills: ["Figma", "Canva", "KiCad", "AutoCAD", "SolidWorks"],
    },
    {
      category: "Hardware & Robotics",
      icon: "🔌",
      skills: ["Arduino", "Raspberry Pi", "Microcontrollers", "PCB Design"],
    },
    {
      category: "Soft Skills",
      icon: "🧠",
      skills: ["Problem Solving", "Team Collaboration", "Innovation", "Leadership"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-card/20 relative overflow-hidden">
      {/* <CHANGE> Added decorative background elements */}
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title">SKILLS & EXPERTISE</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-background/50 card-gradient border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl p-6 transition-all duration-300 glow-cyan-hover"
            >
              <div className="mb-4 text-3xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-cyan-300 mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-cyan-400/10 text-cyan-200/90 text-xs font-medium border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/15 transition-all duration-200 cursor-default"
                  >
                    {skill}
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
