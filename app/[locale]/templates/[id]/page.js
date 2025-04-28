"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Share2, Star, Check, ArrowLeft, Palette, Layout, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ClassicGridTemplate from "@/components/gallery-templates/classic-grid"
import MasonryLayoutTemplate from "@/components/gallery-templates/masonry-layout"
import SlideshowGalleryTemplate from "@/components/gallery-templates/slideshow-gallery"

// Template data (in a real app, this would come from an API)
const templatesData = {
  "classic-grid": {
    id: "classic-grid",
    name: "Desert Elegance",
    description:
      "A minimalist template with warm tones inspired by desert landscapes. Perfect for showcasing photography collections with clean, organized layouts.",
    longDescription:
      "Desert Elegance offers a sophisticated, grid-based layout that puts your photography front and center. With its warm amber tones and subtle Arabian influences, this template creates an elegant showcase for your work. The responsive design ensures your gallery looks stunning on any device, from desktop to mobile.",
    image: "/placeholder.svg?height=400&width=600&text=Desert+Elegance",
    popular: true,
    category: "minimal",
    style: "light",
    featured: true,
    likes: 124,
    component: ClassicGridTemplate,
    features: [
      "Responsive grid layout",
      "Elegant hover effects",
      "Image metadata display",
      "Optimized image loading",
      "Customizable color scheme",
      "Mobile-friendly navigation",
    ],
    colors: ["amber", "sand", "cream", "white"],
    createdAt: "2023-06-15",
  },
  "masonry-layout": {
    id: "masonry-layout",
    name: "Arabian Mosaic",
    description: "Rich patterns and textures with dynamic masonry layout.",
    longDescription:
      "Arabian Mosaic features a dynamic masonry layout that creates visual interest through varied image sizes and positions. Inspired by traditional Arabian geometric patterns, this template adds depth and texture to your photography showcase. The elegant hover effects and smooth transitions enhance the viewing experience.",
    image: "/placeholder.svg?height=400&width=600&text=Arabian+Mosaic",
    popular: false,
    category: "classic",
    style: "light",
    featured: false,
    likes: 98,
    component: MasonryLayoutTemplate,
    features: [
      "Dynamic masonry layout",
      "Variable image sizing",
      "Elegant hover effects",
      "Smooth scroll animations",
      "Responsive design",
      "Optimized for all devices",
    ],
    colors: ["amber", "gold", "terracotta", "cream"],
    createdAt: "2023-07-22",
  },
  "slideshow-gallery": {
    id: "slideshow-gallery",
    name: "Timeless Arabia",
    description: "Immersive slideshow experience with dramatic presentation.",
    longDescription:
      "Timeless Arabia offers an immersive slideshow experience that showcases your photography with dramatic flair. The dark theme creates a sophisticated backdrop that makes your images pop, while smooth transitions between slides create a cinematic viewing experience. Perfect for photographers who want to create a narrative with their work.",
    image: "/placeholder.svg?height=400&width=600&text=Timeless+Arabia",
    popular: false,
    category: "modern",
    style: "dark",
    featured: false,
    likes: 87,
    component: SlideshowGalleryTemplate,
    features: [
      "Full-screen slideshow",
      "Smooth transitions",
      "Thumbnail navigation",
      "Autoplay functionality",
      "Caption support",
      "Keyboard navigation",
    ],
    colors: ["dark amber", "black", "gold", "charcoal"],
    createdAt: "2023-08-05",
  },
}

// Related templates (would be dynamically generated in a real app)
const relatedTemplates = [
  {
    id: "panoramic-view",
    name: "Desert Panorama",
    description: "Wide-format template perfect for landscape photography.",
    image: "/placeholder.svg?height=400&width=600&text=Desert+Panorama",
    category: "landscape",
  },
  {
    id: "portrait-collection",
    name: "Arabian Portraits",
    description: "Elegant template designed specifically for portrait photography.",
    image: "/placeholder.svg?height=400&width=600&text=Arabian+Portraits",
    category: "portrait",
  },
  {
    id: "modern-minimal",
    name: "Minimalist Sand",
    description: "Clean, modern design with subtle Arabian influences.",
    image: "/placeholder.svg?height=400&width=600&text=Minimalist+Sand",
    category: "minimal",
  },
]

export default function TemplateDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [template, setTemplate] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")
  const [selectedDevice, setSelectedDevice] = useState("desktop")

  useEffect(() => {
    // Simulate API fetch
    const fetchTemplate = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        const templateData = templatesData[params.id]

        if (templateData) {
          setTemplate(templateData)
        } else {
          // Template not found
          router.push("/templates")
        }
      } catch (error) {
        console.error("Error fetching template:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTemplate()
  }, [params.id, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="h-12 w-12 border-4 border-amber-300 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!template) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-amber-900 mb-4">Template not found</h1>
          <Button asChild>
            <Link href="/templates">Back to Templates</Link>
          </Button>
        </div>
      </div>
    )
  }

  const TemplateComponent = template.component

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      {/* Header */}
      <header className="bg-white border-b border-amber-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="font-serif text-lg text-white">M</span>
            </div>
            <span className="font-serif text-xl tracking-wide">Mashriq</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-amber-700">
            <Link href="/" className="hover:text-amber-900 transition-colors">
              Home
            </Link>
            <Link href="/galleries" className="hover:text-amber-900 transition-colors">
              Galleries
            </Link>
            <Link href="/templates" className="text-amber-900 font-medium">
              Templates
            </Link>
            <Link href="/dashboard" className="hover:text-amber-900 transition-colors">
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/auth/sign-in" className="text-amber-700 hover:text-amber-900 transition-colors">
              Sign In
            </Link>
            <Button className="bg-amber-500 hover:bg-amber-400 text-white">Try Free</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-amber-700 mb-4">
          <Link href="/" className="hover:text-amber-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/templates" className="hover:text-amber-900">
            Templates
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>{template.name}</span>
        </div>

        {/* Back button */}
        <div className="mb-6">
          <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
            <Link href="/templates">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Templates
            </Link>
          </Button>
        </div>

        {/* Template Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="font-serif text-3xl md:text-4xl">{template.name}</h1>
                {template.popular && <Badge className="bg-amber-500 hover:bg-amber-500 text-white">Popular</Badge>}
              </div>
              <p className="text-amber-700">{template.description}</p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-100"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-amber-500 text-amber-500" : ""}`} />
                {liked ? "Liked" : "Like"}
              </Button>
              <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-400 text-white">Use This Template</Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Template Preview Tabs */}
        <ScrollReveal delay={0.1}>
          <Tabs defaultValue="preview" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="bg-amber-100 border border-amber-200">
              <TabsTrigger value="preview" className="data-[state=active]:bg-white">
                Preview
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-white">
                Features
              </TabsTrigger>
              <TabsTrigger value="customize" className="data-[state=active]:bg-white">
                Customize
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-6">
              <div className="bg-white rounded-xl border border-amber-200 p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Template Preview</h3>
                  <div className="flex gap-2 bg-amber-100 rounded-lg p-1">
                    <button
                      className={`px-3 py-1 text-sm rounded-md ${
                        selectedDevice === "mobile" ? "bg-white shadow-sm" : ""
                      }`}
                      onClick={() => setSelectedDevice("mobile")}
                    >
                      Mobile
                    </button>
                    <button
                      className={`px-3 py-1 text-sm rounded-md ${
                        selectedDevice === "tablet" ? "bg-white shadow-sm" : ""
                      }`}
                      onClick={() => setSelectedDevice("tablet")}
                    >
                      Tablet
                    </button>
                    <button
                      className={`px-3 py-1 text-sm rounded-md ${
                        selectedDevice === "desktop" ? "bg-white shadow-sm" : ""
                      }`}
                      onClick={() => setSelectedDevice("desktop")}
                    >
                      Desktop
                    </button>
                  </div>
                </div>

                <div
                  className={`border border-amber-200 rounded-lg overflow-hidden mx-auto ${
                    selectedDevice === "mobile"
                      ? "max-w-[375px]"
                      : selectedDevice === "tablet"
                        ? "max-w-[768px]"
                        : "w-full"
                  }`}
                >
                  <TemplateComponent isPreview={true} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <div className="bg-white rounded-xl border border-amber-200 p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl mb-4">Template Features</h3>
                    <ul className="space-y-3">
                      {template.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <h4 className="font-medium mb-2">Template Details</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-amber-700">Category</p>
                          <p className="font-medium">
                            {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                          </p>
                        </div>
                        <div>
                          <p className="text-amber-700">Style</p>
                          <p className="font-medium">
                            {template.style.charAt(0).toUpperCase() + template.style.slice(1)}
                          </p>
                        </div>
                        <div>
                          <p className="text-amber-700">Created</p>
                          <p className="font-medium">{new Date(template.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-amber-700">Popularity</p>
                          <p className="font-medium">{template.likes} likes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl mb-4">Description</h3>
                    <p className="text-amber-800 mb-6">{template.longDescription}</p>

                    <h4 className="font-medium mb-2">Color Palette</h4>
                    <div className="flex gap-2 mb-6">
                      {template.colors.map((color, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`w-8 h-8 rounded-full mx-auto mb-1 ${
                              color === "amber"
                                ? "bg-amber-500"
                                : color === "sand"
                                  ? "bg-amber-300"
                                  : color === "cream"
                                    ? "bg-amber-100"
                                    : color === "white"
                                      ? "bg-white border border-amber-200"
                                      : color === "gold"
                                        ? "bg-yellow-600"
                                        : color === "terracotta"
                                          ? "bg-orange-700"
                                          : color === "dark amber"
                                            ? "bg-amber-800"
                                            : color === "black"
                                              ? "bg-black"
                                              : color === "charcoal"
                                                ? "bg-gray-800"
                                                : "bg-gray-300"
                            }`}
                          ></div>
                          <span className="text-xs">{color}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-amber-500 hover:bg-amber-400 text-white">Use This Template</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customize" className="mt-6">
              <div className="bg-white rounded-xl border border-amber-200 p-6">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-xl mb-2">Customize Your Template</h3>
                  <p className="text-amber-700">Make this template your own with these customization options</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-amber-50 rounded-lg p-5 text-center">
                    <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Palette className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="font-medium mb-2">Color Scheme</h4>
                    <p className="text-sm text-amber-700 mb-4">Change colors to match your brand identity</p>
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100 w-full">
                      Edit Colors
                    </Button>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-5 text-center">
                    <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Layout className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="font-medium mb-2">Layout Options</h4>
                    <p className="text-sm text-amber-700 mb-4">Adjust spacing, grid, and image arrangements</p>
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100 w-full">
                      Edit Layout
                    </Button>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-5 text-center">
                    <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="font-medium mb-2">Advanced Settings</h4>
                    <p className="text-sm text-amber-700 mb-4">Fine-tune animations, typography and more</p>
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100 w-full">
                      Edit Settings
                    </Button>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-100 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-2" />
                    <p className="text-amber-800">Upgrade to Pro for full customization options</p>
                  </div>
                  <Button className="bg-amber-500 hover:bg-amber-400 text-white">Upgrade to Pro</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>

        {/* Related Templates */}
        <section className="mb-12">
          <ScrollReveal>
            <h2 className="font-serif text-2xl mb-6">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTemplates.map((relatedTemplate) => (
                <div
                  key={relatedTemplate.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-amber-200"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedTemplate.image || "/placeholder.svg"}
                      alt={relatedTemplate.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-lg text-amber-900">{relatedTemplate.name}</h3>
                      <Badge variant="outline" className="border-amber-300 text-amber-700">
                        {relatedTemplate.category.charAt(0).toUpperCase() + relatedTemplate.category.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-amber-700 text-sm mb-4">{relatedTemplate.description}</p>
                    <div className="flex justify-end">
                      <Link href={`/templates/${relatedTemplate.id}`}>
                        <Button className="bg-amber-500 hover:bg-amber-400 text-white">View Template</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <ScrollReveal>
          <section className="mb-8">
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-3xl mb-4">Ready to create your gallery?</h2>
                <p className="text-amber-50 mb-6">
                  Start building your stunning photo gallery with the {template.name} template today.
                </p>
                <Button className="bg-white text-amber-600 hover:bg-amber-100">Get Started Now</Button>
              </div>
            </div>
          </section>
        </ScrollReveal>
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
