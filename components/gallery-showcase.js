"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const galleries = [
  {
    id: 1,
    name: "تبع فيرسيل",
    image: "/images/gallery-1.png",
    description: "هي الصورة من فيرسيل الغالري الي ألهم هاد المشروع",
  },
  {
    id: 2,
    name: "Urban Oasis",
    image: "/images/gallery-2.png",
    description: "Modern architecture with traditional influences",
  },

]

export default function GalleryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Auto-rotate galleries
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleries.length)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <ScrollReveal>
          <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden">
            {galleries.map((gallery, index) => (
              <motion.div
                key={gallery.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 1.05,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image src={gallery.image || "/placeholder.svg"} alt={gallery.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-serif text-2xl text-white">{gallery.name}</h3>
                  <p className="text-amber-200 mt-2">{gallery.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="space-y-8">
            <h3 className="font-serif text-3xl text-amber-300">Immersive Gallery Experiences</h3>
            <p className="text-amber-100 text-lg">
              Our templates are designed to showcase your photography with elegant transitions, Arabian-inspired design
              elements, and responsive layouts that adapt to any device.
            </p>

            <div className="flex space-x-2 mt-6">
              {galleries.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-amber-400" : "bg-amber-700"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="pt-6 border-t border-amber-800/50 mt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Customizable gallery layouts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Arabian-inspired design elements</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Smooth transitions and animations</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
