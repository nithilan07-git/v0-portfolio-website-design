export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* <CHANGE> Added decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              I'm <span className="font-semibold text-cyan-300">Nithilan M</span>, an Electronics and Communication
              Engineering student at <span className="font-semibold text-blue-300">VIT Chennai</span> with a passion for
              building innovative solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              I specialize in bridging the gap between hardware and software, exploring everything from microprocessors
              and embedded systems to modern web technologies and 3D design.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Currently interning at <span className="font-semibold text-cyan-300">NVIDIA</span>, I'm driven by the
              challenge of creating elegant, scalable solutions to complex problems.
            </p>
          </div>

          {/* <CHANGE> Enhanced stats cards with better design */}
          <div className="space-y-4">
            <div className="group bg-card/50 card-gradient border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl p-8 transition-all duration-300 glow-cyan-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-300 mb-2">2029</h3>
                  <p className="text-muted-foreground/80 text-sm">Expected Graduation</p>
                </div>
                <span className="text-2xl group-hover:scale-110 transition-transform">📚</span>
              </div>
              <p className="text-cyan-200/60 text-xs mt-4 font-medium">B.Tech in Electronics & Communication Engineering</p>
              <p className="text-muted-foreground/60 text-xs mt-2">VIT Chennai</p>
            </div>

            <div className="group bg-card/50 card-gradient border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl p-8 transition-all duration-300 glow-cyan-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Core Interests</h3>
                  <p className="text-muted-foreground/80 text-sm">Passion-driven exploration</p>
                </div>
                <span className="text-2xl group-hover:scale-110 transition-transform">⚡</span>
              </div>
              <ul className="text-muted-foreground/70 space-y-2 mt-4 text-xs">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                  Microprocessors & Embedded Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                  Robotics & Automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                  Modern Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                  3D Modeling & Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
