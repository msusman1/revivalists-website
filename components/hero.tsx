"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with Islamic art pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated gradient accent */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#f7bd00]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#f7bd00]/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f7bd00] to-amber-400">Reviving</span>{" "}
            Islamic Knowledge & Education
          </h1>

          <div className="w-24 h-1 bg-[#f7bd00] mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            This is a critical moment in our history where the past and future come together. Revivalists stand at this
            important crossroads with a commitment to reviving Islamic knowledge and education. Our aim is clear: to
            prepare for a new era where our cultural roots and heritage shape the future of society.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("join")}
              className="bg-[#f7bd00] hover:bg-[#e0ac00] text-black font-bold px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              Join The Movement
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="border-[#f7bd00] text-[#f7bd00] hover:bg-[#f7bd00]/10 font-bold px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-[#f7bd00] flex justify-center">
          <div className="w-1 h-3 bg-[#f7bd00] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
