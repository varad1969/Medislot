"use client"

import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DoctorCard } from "@/components/doctor-card"
import { DoctorDetailModal } from "@/components/doctor-detail-modal"
import { AppointmentModal } from "@/components/appointment-modal"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useDoctorStore, useSearchStore, useUIStore } from "@/lib/store"
import { fetchDoctors } from "@/lib/api"
import { Search, X } from "lucide-react"

const SPECIALIZATIONS = ["Cardiology", "Orthopedics", "Dermatology", "Pediatrics", "General Practice"]

export default function FindDoctorsPage() {
  const { doctors, setDoctors } = useDoctorStore()
  const { searchQuery, selectedSpecialization, setSearchQuery, setSelectedSpecialization } = useSearchStore()
  const { openDoctorDetail } = useUIStore()
  const setSelectedDoctor = useDoctorStore((state) => state.setSelectedDoctor)

  const { data, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  })

  useEffect(() => {
    if (data) {
      setDoctors(data)
    }
  }, [data, setDoctors])

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSpecialization = !selectedSpecialization || doctor.specialization === selectedSpecialization

    return matchesSearch && matchesSpecialization
  })

  const handleViewDetails = (doctor: any) => {
    setSelectedDoctor(doctor)
    openDoctorDetail()
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Doctor</h1>
          <p className="text-lg text-gray-600">Search and filter doctors by specialization or name</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by doctor name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Specialization Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Specialization</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedSpecialization(null)}
              variant={selectedSpecialization === null ? "default" : "outline"}
              className={selectedSpecialization === null ? "bg-blue-500 hover:bg-blue-600" : ""}
            >
              All Specializations
            </Button>
            {SPECIALIZATIONS.map((spec) => (
              <Button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                variant={selectedSpecialization === spec ? "default" : "outline"}
                className={selectedSpecialization === spec ? "bg-blue-500 hover:bg-blue-600" : ""}
              >
                {spec}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredDoctors.length}</span> doctor
            {filteredDoctors.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="w-full h-64 rounded-lg" />
                <Skeleton className="w-3/4 h-6" />
                <Skeleton className="w-1/2 h-4" />
              </div>
            ))
          ) : filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} onViewDetails={handleViewDetails} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">No doctors found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <DoctorDetailModal />
      <AppointmentModal />
      <Footer />
    </main>
  )
}
