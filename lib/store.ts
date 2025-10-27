import { create } from "zustand"
import type { Doctor } from "./validation"

interface DoctorStore {
  doctors: Doctor[]
  selectedDoctor: Doctor | null
  setDoctors: (doctors: Doctor[]) => void
  setSelectedDoctor: (doctor: Doctor | null) => void
}

export const useDoctorStore = create<DoctorStore>((set) => ({
  doctors: [],
  selectedDoctor: null,
  setDoctors: (doctors) => set({ doctors }),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
}))

interface UIStore {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  isDoctorDetailOpen: boolean
  openDoctorDetail: () => void
  closeDoctorDetail: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  isDoctorDetailOpen: false,
  openDoctorDetail: () => set({ isDoctorDetailOpen: true }),
  closeDoctorDetail: () => set({ isDoctorDetailOpen: false }),
}))

interface SearchStore {
  searchQuery: string
  selectedSpecialization: string | null
  setSearchQuery: (query: string) => void
  setSelectedSpecialization: (spec: string | null) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: "",
  selectedSpecialization: null,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedSpecialization: (spec) => set({ selectedSpecialization: spec }),
}))
