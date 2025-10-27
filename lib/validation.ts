import { z } from "zod"

export const appointmentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  reason: z.string().min(5, "Reason must be at least 5 characters"),
  date: z.string().min(1, "Please select a date"),
})

export type AppointmentFormData = z.infer<typeof appointmentFormSchema>

export interface Doctor {
  id: string
  name: string
  specialization: string
  experience: number
  contact: string
  image: string
  bio?: string
  rating?: number
  reviews?: number
  availability?: string[]
  consultationFee?: string
}
