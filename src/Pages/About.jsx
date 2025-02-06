

import { ArrowRight } from "lucide-react"
import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import image from "../../public/bmw-offer.png"

export default function About() {
  return (
    <div className="w-full">
        <Header/>
      {/* Header Section */}
      <div className="w-full h-48 bg-[#000051]">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4 ">
            <div>
              <p className="text-orange-500">About Us</p>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">Welcome to Car Younes Service</h2>
            </div>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam tenetur porro quasi earum, fugiat
              cum et explicabo fuga odit voluptates optio, maxime ducimus quae.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500" />
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500" />
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500" />
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-orange-500" />
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt="Luxury Car"
              className="w-full h-auto rounded-lg shadow-md "
            />
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

