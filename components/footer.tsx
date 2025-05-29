import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#f7bd00]">REVIVALISTS</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Revivalists is dedicated to reviving Islamic knowledge and education, preparing for a new era where our
              cultural roots and heritage shape the future of society.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/revivalistsorg" className="text-gray-400 hover:text-[#f7bd00] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/revivalistsorg" className="text-gray-400 hover:text-[#f7bd00] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/revivalistsorg/" className="text-gray-400 hover:text-[#f7bd00] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@revivalistsorg" className="text-gray-400 hover:text-[#f7bd00] transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#join" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://the-revivalists.org/privacy-policy/" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://the-revivalists.org/terms-of-service/" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#f7bd00] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Revivalists. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <Mail className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-gray-500 text-sm">info@revivalists.org</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
