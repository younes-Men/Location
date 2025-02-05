"use client"

import { useState, useEffect, useCallback } from "react"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import slider1 from "../../public/slider-1.jpg"
import slider2 from "../../public/slider-2.jpg"
import slider3 from "../../public/slider-3.jpg"
import React from "react"

export default function Body() {
  const slides = [
    {
      url: slider1,
      title: "Porsche Panamera",
      price: "$150/day",
      description: "Experience luxury and performance",
    },
    {
      url: slider2,
      title: "Mercedes-Benz GLS",
      price: "$200/day",
      description: "Ultimate luxury SUV experience",
    },
    {
      url: slider3,
      title: "BMW 4 Series",
      price: "$70/day",
      description: "Sporty elegance redefined",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection)
      setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length)
    },
    [slides.length],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(timer)
  }, [paginate])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Modern Slider */}
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.1 }}
              transition={{ duration: 6 }}
              style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </motion.div>

            {/* Content */}
            <div className="relative h-full">
              <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mx-auto max-w-7xl"
                >
                  {/* Title and Description */}
                  <div className="mb-8">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-xl font-medium text-white/80"
                    >
                      {slides[currentSlide].title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mt-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
                    >
                      {slides[currentSlide].price}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="mt-4 text-lg text-white/70"
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="group relative overflow-hidden rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:scale-105"
                  >
                    <span className="relative z-10">Reserve Now</span>
                    <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:translate-y-0" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="group relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-black/20 backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <ChevronLeftIcon className="absolute inset-0 m-auto h-6 w-6 text-white transition-transform group-hover:-translate-x-1.5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="group relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-black/20 backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <ChevronRightIcon className="absolute inset-0 m-auto h-6 w-6 text-white transition-transform group-hover:translate-x-1.5" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-4">
          {slides.map((_, index) => (
            <div key={index} className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: index === currentSlide ? 1 : 0,
                }}
                transition={{
                  duration: index === currentSlide ? 6 : 0.3,
                  ease: "linear",
                }}
                className="h-full origin-left bg-white"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Search Form */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1/2">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">From Address</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter pickup location"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">To Address</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter drop-off location"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

