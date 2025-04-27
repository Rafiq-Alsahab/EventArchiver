import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ClassicGridTemplate({ isPreview = false }) {
  // Sample gallery data
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800&text=Desert+Landscape",
      alt: "Desert Landscape",
      title: "Desert Landscape",
      description: "Golden sands under the setting sun",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=600&text=Arabian+Architecture",
      alt: "Arabian Architecture",
      title: "Arabian Architecture",
      description: "Intricate details of traditional buildings",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800&text=Oasis+View",
      alt: "Oasis View",
      title: "Oasis View",
      description: "Palm trees surrounding crystal clear waters",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=600&text=Market+Scene",
      alt: "Market Scene",
      title: "Market Scene",
      description: "Vibrant colors of the local marketplace",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800&text=Desert+Night",
      alt: "Desert Night",
      title: "Desert Night",
      description: "Stars illuminating the vast desert landscape",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=600&text=Cultural+Portrait",
      alt: "Cultural Portrait",
      title: "Cultural Portrait",
      description: "Traditional attire and cultural heritage",
    },
  ]

  return (
    <div className={`bg-amber-50 ${isPreview ? "p-4 md:p-8" : "p-8 md:p-12"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Desert Elegance</h1>
          <p className="text-amber-700 max-w-2xl mx-auto">
            A collection of photographs capturing the beauty and essence of Arabian landscapes and culture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-amber-900">{image.title}</h3>
                <p className="text-amber-700 text-sm mt-1">{image.description}</p>
                {!isPreview && (
                  <div className="mt-3 flex justify-end">
                    <button className="text-amber-600 hover:text-amber-800 text-sm flex items-center">
                      View details <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer */}
        {!isPreview && (
          <div className="mt-12 text-center">
            <p className="text-amber-700">© 2023 Desert Elegance Gallery. All rights reserved.</p>
          </div>
        )}
      </div>
    </div>
  )
}
