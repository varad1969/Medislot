"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DoctorsSection } from "@/components/doctors-section"
import { AppointmentModal } from "@/components/appointment-modal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DoctorsSection />
      <Footer />
      <AppointmentModal />
    </main>
  )
}
