"use client"

import { Button } from "@/components/ui/button"
import { useUIStore } from "@/lib/store"
import { Search, Calendar } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { openModal } = useUIStore()

  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-cyan-400 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Your Health, Our Priority
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
            Connect with trusted healthcare professionals and book appointments instantly. Quality healthcare is just a
            click away.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/find-doctors">
            <Button className="bg-white text-blue-500 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto">
              <Search className="w-5 h-5" />
              Find a Doctor
            </Button>
          </Link>
          <Button
            onClick={openModal}
            className="bg-white/20 text-white hover:bg-white/30 border border-white font-semibold px-8 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80 text-lg">Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/80 text-lg">Patients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80 text-lg">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
