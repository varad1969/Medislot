"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useDoctorStore, useUIStore } from "@/lib/store"
import type { Doctor } from "@/lib/validation"
import Image from "next/image"
import { Star, MapPin } from "lucide-react"

interface DoctorCardProps {
  doctor: Doctor
  onViewDetails?: (doctor: Doctor) => void
}

export function DoctorCard({ doctor, onViewDetails }: DoctorCardProps) {
  const setSelectedDoctor = useDoctorStore((state) => state.setSelectedDoctor)
  const openModal = useUIStore((state) => state.openModal)

  const handleBooking = () => {
    setSelectedDoctor(doctor)
    openModal()
  }

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(doctor)
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="relative w-full h-64 bg-gray-200">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-blue-500 font-semibold mb-3">{doctor.specialization}</p>

        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">
            {doctor.rating || 4.8} ({doctor.reviews || 120} reviews)
          </span>
        </div>

        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium">{doctor.experience} years</span>
            <span>experience</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{doctor.contact}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleViewDetails}
            variant="outline"
            className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
          >
            View Details
          </Button>
          <Button onClick={handleBooking} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold">
            Book
          </Button>
        </div>
      </div>
    </Card>
  )
}
