

import { BiCar } from "react-icons/bi"
import { useState } from "react"
import React from "react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState({
    quickLinks: false,
    headOffice: false,
    newsletter: false,
  })

  const toggleMenu = (section) => {
    setIsMenuOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <footer className="bg-[#000051] text-white py-8 md:py-16">
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Company Info - Always visible */}
          <div className="space-y-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2">
              <BiCar className="text-3xl md:text-4xl" />
              <h2 className="text-lg md:text-xl font-bold">
                Rent Car
                <span className="block text-xs md:text-sm font-normal">Service</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed pt-15">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id ipsa neque harum quod quae reiciendis
              et quasi illum alias. Vero ipsam a omnis! Totam nam eaque sequi voluptates doloribus?
            </p>
          </div>

          {/* Quick Links - Collapsible on mobile */}
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <button
              className="flex justify-between items-center w-full md:hidden mb-2"
              onClick={() => toggleMenu("quickLinks")}
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <svg
                className={`w-5 h-5 transition-transform ${isMenuOpen.quickLinks ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="hidden md:block text-lg font-semibold mb-4">Quick Links</h3>
            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen.quickLinks ? "max-h-48" : "max-h-0 md:max-h-48"}`}
            >
              {["About Us", "Our Services", "Privacy Policy", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office - Collapsible on mobile */}
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <button
              className="flex justify-between items-center w-full md:hidden mb-2"
              onClick={() => toggleMenu("headOffice")}
            >
              <h3 className="text-lg font-semibold">Head Office</h3>
              <svg
                className={`w-5 h-5 transition-transform ${isMenuOpen.headOffice ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="hidden md:block text-lg font-semibold mb-4">Head Office</h3>
            <div
              className={`space-y-2 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen.headOffice ? "max-h-48" : "max-h-0 md:max-h-48"}`}
            >
              <p className="py-1">123 ZindaBazar, Sylhet, Bangladesh</p>
              <p className="py-1">Phone: +088 123 456 789</p>
              <p className="py-1">Email: example@gmail.com</p>
              <p className="py-1">Office Time: 10am - 6pm</p>
            </div>
          </div>

          {/* Newsletter - Collapsible on mobile */}
          <div className="p-4 rounded-lg hover:bg-white/5 transition-colors">
            <button
              className="flex justify-between items-center w-full md:hidden mb-2"
              onClick={() => toggleMenu("newsletter")}
            >
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <svg
                className={`w-5 h-5 transition-transform ${isMenuOpen.newsletter ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="hidden md:block text-lg font-semibold mb-4">Newsletter</h3>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen.newsletter ? "max-h-48" : "max-h-0 md:max-h-48"}`}
            >
              <p className="text-gray-400 mb-4">Subscribe our newsletter to get updated information</p>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="écrire"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder:text-gray-500 text-sm"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 p-1.5 rounded hover:bg-white/20 transition-colors"
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Always visible */}
        <div className="mt-8 md:mt-12 pt-4 md:pt-8 border-t border-white/10 text-center text-gray-400 text-xs md:text-sm">
          <p>
            © Copyright 2022, developed by{" "}
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              Younes Mensoub
            </a>{" "}
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

