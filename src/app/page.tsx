import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black selection:bg-purple-500/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/20 blur-[150px] animate-float-delayed"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 md:p-24">
        {/* Main Content Container */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-12">
          
          {/* Header Section */}
          <div className="space-y-6 animate-fade-in-up opacity-0">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wider text-gray-300">SYSTEM INITIALIZED</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#22989D]">
              안녕하세요,<br />김재언입니다
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
              Your new workspace is ready. Powered by Next.js App Router, Tailwind CSS, and TypeScript. Build something extraordinary.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200 opacity-0">
            <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 glass text-white font-semibold rounded-full transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
              View Documentation
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 animate-fade-in-up delay-300 opacity-0">
            {[
              {
                title: "Next.js 15",
                description: "App Router, Server Components, and the latest React features out of the box."
              },
              {
                title: "Tailwind CSS v4",
                description: "Utility-first styling with inline theme configuration and extreme performance."
              },
              {
                title: "TypeScript",
                description: "End-to-end type safety for a robust and developer-friendly experience."
              }
            ].map((feature, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-left hover:bg-white/5 transition-colors group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-4 h-4 rounded-full bg-white/80"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
