import { Stethoscope, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">MediSlot</span>
            </div>
            <p className="text-gray-400">
              Connecting patients with trusted healthcare professionals for better health outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/find-doctors" className="hover:text-blue-400 transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Specializations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/find-doctors?spec=Cardiology" className="hover:text-blue-400 transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/find-doctors?spec=Orthopedics" className="hover:text-blue-400 transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/find-doctors?spec=Dermatology" className="hover:text-blue-400 transition-colors">
                  Dermatology
                </Link>
              </li>
              <li>
                <Link href="/find-doctors?spec=Pediatrics" className="hover:text-blue-400 transition-colors">
                  Pediatrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@medislot.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>123 Healthcare Ave, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© 2025 MediSlot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
