"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SlideshowGalleryTemplate({ isPreview = false }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Sample gallery data
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=800&width=1200&text=Arabian+Landscape",
      alt: "Arabian Landscape",
      title: "Arabian Landscape",
      description: "Vast desert dunes stretching to the horizon under a golden sunset",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=1200&text=Traditional+Architecture",
      alt: "Traditional Architecture",
      title: "Traditional Architecture",
      description: "Intricate geometric patterns adorning historical buildings",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=800&width=1200&text=Modern+Arabia",
      alt: "Modern Arabia",
      title: "Modern Arabia",
      description: "Contemporary architectural marvels blending tradition with innovation",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=1200&text=Cultural+Heritage",
      alt: "Cultural Heritage",
      title: "Cultural Heritage",
      description: "Preserving traditions through art, crafts, and celebrations",
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, galleryImages.length])

  const goToNextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const goToPrevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className={`bg-amber-950 text-amber-50 ${isPreview ? "p-4 md:p-8" : "p-0"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="font-serif text-3xl md:text-4xl text-amber-300 mb-4">Timeless Arabia</h1>
          <p className="text-amber-200 max-w-2xl mx-auto">
            A visual journey through time, capturing the essence of Arabian heritage and its evolution.
          </p>
        </div>

        {/* Slideshow Gallery */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">{image.title}</h2>
                <p className="text-amber-200 max-w-2xl">{image.description}</p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-900/50 hover:bg-amber-800 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-900/50 hover:bg-amber-800 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentSlide(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-amber-300" : "bg-amber-600 hover:bg-amber-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentSlide(index)
              }}
              className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded overflow-hidden ${
                index === currentSlide ? "ring-2 ring-amber-300" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Thumbnail for ${image.alt}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Gallery Footer */}
        {!isPreview && (
          <div className="mt-12 text-center pb-8">
            <p className="text-amber-400">© {new Date().getFullYear()} Timeless Arabia Gallery. All rights reserved.</p>
          </div>
        )}
      </div>
    </div>
  )
}
