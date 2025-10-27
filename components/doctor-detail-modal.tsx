"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useDoctorStore, useUIStore } from "@/lib/store"
import Image from "next/image"
import { Star, MapPin, Clock, DollarSign } from "lucide-react"

export function DoctorDetailModal() {
  const selectedDoctor = useDoctorStore((state) => state.selectedDoctor)
  const { isDoctorDetailOpen, closeDoctorDetail, openModal } = useUIStore()
  const setSelectedDoctor = useDoctorStore((state) => state.setSelectedDoctor)

  const handleBookAppointment = () => {
    closeDoctorDetail()
    openModal()
  }

  const handleClose = () => {
    closeDoctorDetail()
    setSelectedDoctor(null)
  }

  if (!selectedDoctor) return null

  return (
    <Dialog open={isDoctorDetailOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Doctor Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Doctor Image and Basic Info */}
          <div className="flex gap-6">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={selectedDoctor.image || "/placeholder.svg"}
                alt={selectedDoctor.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedDoctor.name}</h2>
              <p className="text-xl text-blue-500 font-semibold mb-4">{selectedDoctor.specialization}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">
                    {selectedDoctor.rating || 4.8} ({selectedDoctor.reviews || 120} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>{selectedDoctor.experience} years of experience</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="w-5 h-5 text-blue-500" />
                  <span>Consultation Fee: {selectedDoctor.consultationFee || "$100"}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{selectedDoctor.contact}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
            <p className="text-gray-700 leading-relaxed">
              {selectedDoctor.bio ||
                `Dr. ${selectedDoctor.name.split(" ")[1]} is a highly qualified ${selectedDoctor.specialization} specialist with ${selectedDoctor.experience} years of experience in providing excellent healthcare services.`}
            </p>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Availability</h3>
            <div className="flex flex-wrap gap-2">
              {(selectedDoctor.availability || ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]).map((day) => (
                <span key={day} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleBookAppointment}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3"
            >
              Book Appointment
            </Button>
            <Button onClick={handleClose} variant="outline" className="flex-1 bg-transparent">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
