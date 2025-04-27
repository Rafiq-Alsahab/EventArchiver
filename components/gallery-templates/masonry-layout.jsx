"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function MasonryLayoutTemplate({ isPreview = false }) {
  const masonryRef = useRef(null)

  // Sample gallery data with varied heights
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=800&width=600&text=Arabian+Nights",
      alt: "Arabian Nights",
      title: "Arabian Nights",
      height: "h-80",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=500&width=600&text=Desert+Sunset",
      alt: "Desert Sunset",
      title: "Desert Sunset",
      height: "h-64",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=700&width=600&text=Ancient+Patterns",
      alt: "Ancient Patterns",
      title: "Ancient Patterns",
      height: "h-96",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=600&text=Modern+Arabia",
      alt: "Modern Arabia",
      title: "Modern Arabia",
      height: "h-72",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=900&width=600&text=Cultural+Heritage",
      alt: "Cultural Heritage",
      title: "Cultural Heritage",
      height: "h-80",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=500&width=600&text=Oasis+Life",
      alt: "Oasis Life",
      title: "Oasis Life",
      height: "h-64",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=700&width=600&text=Desert+Wildlife",
      alt: "Desert Wildlife",
      title: "Desert Wildlife",
      height: "h-72",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=800&width=600&text=Traditional+Crafts",
      alt: "Traditional Crafts",
      title: "Traditional Crafts",
      height: "h-80",
    },
  ]

  return (
    <div className={`bg-gradient-to-br from-amber-100 to-amber-50 ${isPreview ? "p-4 md:p-8" : "p-8 md:p-12"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Gallery Header */}
        <div className="mb-12">
          <div className="inline-block bg-amber-800 text-amber-50 px-4 py-1 mb-4 font-serif">PHOTOGRAPHY</div>
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Arabian Mosaic</h1>
          <div className="w-24 h-1 bg-amber-500 mb-6"></div>
          <p className="text-amber-700 max-w-2xl">
            A visual journey through the diverse landscapes and rich cultural heritage of Arabia.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div ref={masonryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className={`group relative ${image.height} overflow-hidden rounded-md`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full">
                  <h3 className="font-serif text-white text-xl">{image.title}</h3>
                  {!isPreview && (
                    <button className="mt-2 text-amber-200 hover:text-white flex items-center text-sm transition-colors">
                      View full image <ArrowUpRight className="ml-1 h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer */}
        {!isPreview && (
          <div className="mt-12 flex justify-between items-center border-t border-amber-200 pt-6">
            <p className="text-amber-700">Arabian Mosaic Gallery</p>
            <p className="text-amber-700">© {new Date().getFullYear()}</p>
          </div>
        )}
      </div>
    </div>
  )
}
