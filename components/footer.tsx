export default function Footer() {
  return (
    <footer className="bg-background border-t border-cyan-400/20 py-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-cyan-400/10">
          <div className="text-center md:text-left">
            <p className="text-cyan-300/90 font-semibold tracking-wide text-sm">NITHILAN M</p>
            <p className="text-muted-foreground/60 text-xs mt-1">Electronics Engineer × Web Developer × 3D Modeler</p>
          </div>

          <div className="flex gap-8 text-xs font-semibold text-muted-foreground/70">
            <a href="#" className="hover:text-cyan-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a href="#" className="hover:text-cyan-300 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center space-y-3">
          <p className="text-muted-foreground/70 text-xs tracking-widest uppercase">Made with passion</p>
          <p className="text-muted-foreground/60 text-sm">
            Designed & built with <span className="text-cyan-300 font-semibold">💻</span>
            <span className="mx-1 text-muted-foreground/40">+</span>
            <span className="text-cyan-300 font-semibold">⚡</span>
          </p>
          <p className="text-muted-foreground/50 text-xs">© 2025 Nithilan M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
