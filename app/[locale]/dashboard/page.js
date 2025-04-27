"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, User, ChevronRight, Check, Star, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import ClassicGridTemplate from "@/components/gallery-templates/classic-grid"
import MasonryLayoutTemplate from "@/components/gallery-templates/masonry-layout"
import SlideshowGalleryTemplate from "@/components/gallery-templates/slideshow-gallery"

export default function DashboardPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("classic")
  const [galleryName, setGalleryName] = useState("")
  const [galleryDescription, setGalleryDescription] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  // Animation for template selection
  const templateVariants = {
    selected: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    notSelected: {
      scale: 0.95,
      opacity: 0.5,
      y: 10,
      transition: { duration: 0.3 },
    },
  }

  const handleCreateGallery = (e) => {
    e.preventDefault()
    setIsCreating(true)
    // Simulate API call
    setTimeout(() => {
      setIsCreating(false)
      // Redirect or show success message
      alert("Gallery created successfully!")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-amber-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="font-serif text-lg text-white">M</span>
            </div>
            <span className="font-serif text-xl tracking-wide">Mashriq</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-amber-700">
              <Link href="/dashboard" className="text-amber-900 font-medium">
                Dashboard
              </Link>
              <Link href="#" className="hover:text-amber-900 transition-colors">
                My Galleries
              </Link>
              <Link href="#" className="hover:text-amber-900 transition-colors">
                Settings
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-amber-700" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Ahmed Al-Farsi</p>
                <p className="text-xs text-amber-600">Free Plan</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center text-sm text-amber-700 mb-4">
          <Link href="/" className="hover:text-amber-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Dashboard</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl mb-8">Create New Gallery</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <ScrollReveal>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-amber-200">
              <h2 className="font-serif text-2xl mb-6">Gallery Details</h2>

              <form onSubmit={handleCreateGallery} className="space-y-6">
                {/* Small Input */}
                <div>
                  <label htmlFor="gallery-name" className="block text-sm font-medium text-amber-800 mb-1">
                    Gallery Name
                  </label>
                  <Input
                    id="gallery-name"
                    value={galleryName}
                    onChange={(e) => setGalleryName(e.target.value)}
                    placeholder="Enter a name for your gallery"
                    className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                  <p className="text-xs text-amber-600 mt-1">This will be displayed as the title of your gallery</p>
                </div>

                {/* Description Textarea */}
                <div>
                  <label htmlFor="gallery-description" className="block text-sm font-medium text-amber-800 mb-1">
                    Gallery Description
                  </label>
                  <Textarea
                    id="gallery-description"
                    value={galleryDescription}
                    onChange={(e) => setGalleryDescription(e.target.value)}
                    placeholder="Describe your gallery and what visitors can expect to see"
                    className="min-h-[120px] border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <h3 className="font-medium text-amber-800">Gallery Settings</h3>

                  <div className="flex items-center">
                    <input
                      id="public-gallery"
                      name="visibility"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-amber-300"
                    />
                    <label htmlFor="public-gallery" className="ml-2 block text-sm text-amber-700">
                      Public Gallery (anyone can view)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="private-gallery"
                      name="visibility"
                      type="radio"
                      className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-amber-300"
                    />
                    <label htmlFor="private-gallery" className="ml-2 block text-sm text-amber-700">
                      Private Gallery (password protected)
                    </label>
                  </div>

                  <div className="pt-4 border-t border-amber-200">
                    <Button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center gap-2"
                      disabled={isCreating}
                    >
                      {isCreating ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Create Gallery <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </ScrollReveal>

          {/* Right Column - Template Selection */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-amber-200 mb-6">
                <h2 className="font-serif text-2xl mb-6">Choose a Template</h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setSelectedTemplate("classic")}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedTemplate === "classic" ? "border-amber-500 ring-2 ring-amber-300" : "border-amber-200"
                    }`}
                  >
                    <div className="aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Classic"
                        alt="Classic Grid Template"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {selectedTemplate === "classic" && (
                      <div className="absolute top-2 right-2 bg-amber-500 rounded-full p-1">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Classic Grid</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedTemplate("masonry")}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedTemplate === "masonry" ? "border-amber-500 ring-2 ring-amber-300" : "border-amber-200"
                    }`}
                  >
                    <div className="aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Masonry"
                        alt="Masonry Layout Template"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {selectedTemplate === "masonry" && (
                      <div className="absolute top-2 right-2 bg-amber-500 rounded-full p-1">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Masonry</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedTemplate("slideshow")}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedTemplate === "slideshow" ? "border-amber-500 ring-2 ring-amber-300" : "border-amber-200"
                    }`}
                  >
                    <div className="aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Slideshow"
                        alt="Slideshow Gallery Template"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {selectedTemplate === "slideshow" && (
                      <div className="absolute top-2 right-2 bg-amber-500 rounded-full p-1">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-2">
                      <p className="text-white text-xs font-medium">Slideshow</p>
                    </div>
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm text-amber-700 mb-4">
                  <p>
                    Selected:{" "}
                    <span className="font-medium text-amber-900">
                      {selectedTemplate === "classic"
                        ? "Classic Grid"
                        : selectedTemplate === "masonry"
                          ? "Arabian Mosaic"
                          : "Timeless Arabia"}
                    </span>
                  </p>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span>Premium template</span>
                  </div>
                </div>

                {/* Template Preview */}
                <div className="relative overflow-hidden rounded-lg border border-amber-200 h-[300px]">
                  <div className="absolute inset-0 overflow-y-auto">
                    <motion.div
                      initial="notSelected"
                      animate={selectedTemplate === "classic" ? "selected" : "notSelected"}
                      variants={templateVariants}
                      className="absolute inset-0"
                      style={{ display: selectedTemplate === "classic" ? "block" : "none" }}
                    >
                      <div className="transform scale-[0.4] origin-top-left">
                        <ClassicGridTemplate isPreview={true} />
                      </div>
                    </motion.div>

                    <motion.div
                      initial="notSelected"
                      animate={selectedTemplate === "masonry" ? "selected" : "notSelected"}
                      variants={templateVariants}
                      className="absolute inset-0"
                      style={{ display: selectedTemplate === "masonry" ? "block" : "none" }}
                    >
                      <div className="transform scale-[0.4] origin-top-left">
                        <MasonryLayoutTemplate isPreview={true} />
                      </div>
                    </motion.div>

                    <motion.div
                      initial="notSelected"
                      animate={selectedTemplate === "slideshow" ? "selected" : "notSelected"}
                      variants={templateVariants}
                      className="absolute inset-0"
                      style={{ display: selectedTemplate === "slideshow" ? "block" : "none" }}
                    >
                      <div className="transform scale-[0.4] origin-top-left">
                        <SlideshowGalleryTemplate isPreview={true} />
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <Button className="bg-amber-500 hover:bg-amber-400 text-white text-sm">View Full Preview</Button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-amber-700">24 users love this template</span>
                  </div>
                  <Button variant="link" className="text-amber-600 hover:text-amber-800 p-0">
                    View all templates
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl mb-2">Upgrade to Pro</h3>
                    <p className="text-amber-50 text-sm mb-4">
                      Get access to all premium templates and remove watermarks from your galleries.
                    </p>
                    <Button className="bg-white text-amber-600 hover:bg-amber-100">Upgrade Now</Button>
                  </div>
                  <div className="bg-amber-300/30 rounded-full p-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="relative w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="font-serif text-xs text-white">M</span>
              </div>
              <span className="font-serif text-lg tracking-wide">Mashriq</span>
            </div>

            <div className="flex gap-6 text-amber-700 text-sm">
              <Link href="#" className="hover:text-amber-900 transition-colors">
                Help
              </Link>
              <Link href="#" className="hover:text-amber-900 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-amber-900 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
