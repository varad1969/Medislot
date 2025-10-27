"use client"
import { Button } from "@/components/ui/button"
import { useUIStore } from "@/lib/store"
import { Stethoscope } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const { openModal } = useUIStore()

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">MediSlot</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/find-doctors" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Find Doctors
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            onClick={openModal}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  )
}
