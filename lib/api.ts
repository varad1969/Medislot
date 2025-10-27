import type { Doctor } from "./validation"

const mockDoctors: Doctor[] = [
  // Cardiology
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    experience: 12,
    contact: "+1 (555) 123-4567",
    image: "/female-doctor-cardiology.jpg",
    bio: "Specialized in heart disease prevention and treatment with 12 years of experience.",
    rating: 4.9,
    reviews: 156,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    consultationFee: "$150",
  },
  {
    id: "7",
    name: "Dr. David Thompson",
    specialization: "Cardiology",
    experience: 18,
    contact: "+1 (555) 789-0123",
    image: "/male-doctor-cardiology.jpg",
    bio: "Expert in interventional cardiology and cardiac surgery with 18 years of experience.",
    rating: 4.8,
    reviews: 203,
    availability: ["Monday", "Wednesday", "Friday"],
    consultationFee: "$180",
  },
  {
    id: "8",
    name: "Dr. Jennifer Lee",
    specialization: "Cardiology",
    experience: 10,
    contact: "+1 (555) 890-1234",
    image: "/female-doctor-cardiologist.jpg",
    bio: "Focused on preventive cardiology and lifestyle management.",
    rating: 4.7,
    reviews: 98,
    availability: ["Tuesday", "Thursday", "Saturday"],
    consultationFee: "$140",
  },
  // Orthopedics
  {
    id: "4",
    name: "Dr. James Wilson",
    specialization: "Orthopedics",
    experience: 15,
    contact: "+1 (555) 456-7890",
    image: "/male-doctor-orthopedic-surgeon.jpg",
    bio: "Specialist in joint replacement and sports medicine with 15 years of experience.",
    rating: 4.8,
    reviews: 187,
    availability: ["Monday", "Tuesday", "Thursday", "Friday"],
    consultationFee: "$160",
  },
  {
    id: "9",
    name: "Dr. Michael Brown",
    specialization: "Orthopedics",
    experience: 14,
    contact: "+1 (555) 901-2345",
    image: "/male-doctor-orthopedic.jpg",
    bio: "Expert in spine surgery and trauma management.",
    rating: 4.7,
    reviews: 142,
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    consultationFee: "$170",
  },
  {
    id: "10",
    name: "Dr. Patricia Garcia",
    specialization: "Orthopedics",
    experience: 11,
    contact: "+1 (555) 012-3456",
    image: "/female-doctor-orthopedic-surgeon.jpg",
    bio: "Specialized in arthroscopic surgery and rehabilitation.",
    rating: 4.6,
    reviews: 76,
    availability: ["Tuesday", "Thursday", "Friday"],
    consultationFee: "$150",
  },
  // Dermatology
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialization: "Dermatology",
    experience: 10,
    contact: "+1 (555) 345-6789",
    image: "/female-doctor-dermatologist.jpg",
    bio: "Expert in skin care and cosmetic dermatology with 10 years of experience.",
    rating: 4.9,
    reviews: 234,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    consultationFee: "$130",
  },
  {
    id: "11",
    name: "Dr. Christopher White",
    specialization: "Dermatology",
    experience: 13,
    contact: "+1 (555) 123-4568",
    image: "/male-doctor-dermatologist.jpg",
    bio: "Specialist in acne treatment and laser therapy.",
    rating: 4.8,
    reviews: 165,
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
    consultationFee: "$140",
  },
  {
    id: "12",
    name: "Dr. Amanda Martinez",
    specialization: "Dermatology",
    experience: 9,
    contact: "+1 (555) 234-5679",
    image: "/female-doctor-skin-specialist.jpg",
    bio: "Focused on eczema, psoriasis, and skin allergies.",
    rating: 4.7,
    reviews: 89,
    availability: ["Tuesday", "Thursday", "Saturday"],
    consultationFee: "$125",
  },
  // Pediatrics
  {
    id: "5",
    name: "Dr. Lisa Anderson",
    specialization: "Pediatrics",
    experience: 9,
    contact: "+1 (555) 567-8901",
    image: "/female-doctor-pediatrician.jpg",
    bio: "Dedicated to child health and development with 9 years of experience.",
    rating: 4.9,
    reviews: 198,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    consultationFee: "$120",
  },
  {
    id: "13",
    name: "Dr. Robert Taylor",
    specialization: "Pediatrics",
    experience: 16,
    contact: "+1 (555) 345-6790",
    image: "/male-doctor-pediatrician.jpg",
    bio: "Specialist in neonatal care and pediatric immunization.",
    rating: 4.8,
    reviews: 211,
    availability: ["Monday", "Wednesday", "Friday"],
    consultationFee: "$135",
  },
  {
    id: "14",
    name: "Dr. Susan Clark",
    specialization: "Pediatrics",
    experience: 8,
    contact: "+1 (555) 456-7891",
    image: "/female-doctor-child-specialist.jpg",
    bio: "Focused on behavioral pediatrics and child development.",
    rating: 4.7,
    reviews: 112,
    availability: ["Tuesday", "Thursday", "Saturday"],
    consultationFee: "$115",
  },
  // General Practice
  {
    id: "6",
    name: "Dr. Robert Martinez",
    specialization: "General Practice",
    experience: 20,
    contact: "+1 (555) 678-9012",
    image: "/male-doctor-general-practitioner.jpg",
    bio: "Experienced general practitioner providing comprehensive healthcare.",
    rating: 4.8,
    reviews: 267,
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    consultationFee: "$100",
  },
  {
    id: "15",
    name: "Dr. Nancy Wilson",
    specialization: "General Practice",
    experience: 12,
    contact: "+1 (555) 567-8902",
    image: "/female-doctor-general-practice.jpg",
    bio: "Holistic approach to patient care and wellness.",
    rating: 4.7,
    reviews: 154,
    availability: ["Monday", "Tuesday", "Thursday", "Friday"],
    consultationFee: "$95",
  },
]

export async function fetchDoctors(): Promise<Doctor[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return mockDoctors
}

export async function fetchDoctorById(id: string): Promise<Doctor | undefined> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 400))
  return mockDoctors.find((doc) => doc.id === id)
}

export async function bookAppointment(data: {
  name: string
  email: string
  phone: string
  reason: string
  date: string
  doctorId: string
}): Promise<{ success: boolean; message: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600))

  // Save to localStorage
  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]")
  appointments.push({
    ...data,
    id: Date.now(),
    bookedAt: new Date().toISOString(),
  })
  localStorage.setItem("appointments", JSON.stringify(appointments))

  return {
    success: true,
    message: `Appointment booked successfully!`,
  }
}
