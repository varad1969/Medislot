"use client"

import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { useDoctorStore } from "@/lib/store"
import { fetchDoctors } from "@/lib/api"
import { DoctorCard } from "./doctor-card"
import { Skeleton } from "@/components/ui/skeleton"

export function DoctorsSection() {
  const { doctors, setDoctors } = useDoctorStore()
  const { data, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: fetchDoctors,
  })

  useEffect(() => {
    if (data) {
      setDoctors(data)
    }
  }, [data, setDoctors])

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Doctors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced healthcare professionals ready to serve you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="w-full h-64 rounded-lg" />
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-1/2 h-4" />
                </div>
              ))
            : doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
        </div>
      </div>
    </section>
  )
}
