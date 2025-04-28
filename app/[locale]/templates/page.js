"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search, Check, Filter, ArrowUpDown, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSort, setActiveSort] = useState("popular")

  // Template categories
  const categories = [
    { id: "all", name: "All Templates" },
    { id: "minimal", name: "Minimal" },
    { id: "classic", name: "Classic Arabian" },
    { id: "modern", name: "Modern" },
    { id: "portrait", name: "Portrait" },
    { id: "landscape", name: "Landscape" },
  ]

  // Template data
  const templates = [
    {
      id: "classic-grid",
      name: "Desert Elegance",
      description: "A minimalist template with warm tones inspired by desert landscapes.",
      image: "/placeholder.svg?height=400&width=600&text=Desert+Elegance",
      popular: true,
      category: "minimal",
      style: "light",
      featured: true,
      likes: 124,
    },
    {
      id: "masonry-layout",
      name: "Arabian Mosaic",
      description: "Rich patterns and textures with dynamic masonry layout.",
      image: "/placeholder.svg?height=400&width=600&text=Arabian+Mosaic",
      popular: false,
      category: "classic",
      style: "light",
      featured: false,
      likes: 98,
    },
    {
      id: "slideshow-gallery",
      name: "Timeless Arabia",
      description: "Immersive slideshow experience with dramatic presentation.",
      image: "/placeholder.svg?height=400&width=600&text=Timeless+Arabia",
      popular: false,
      category: "modern",
      style: "dark",
      featured: false,
      likes: 87,
    },
    {
      id: "panoramic-view",
      name: "Desert Panorama",
      description: "Wide-format template perfect for landscape photography.",
      image: "/placeholder.svg?height=400&width=600&text=Desert+Panorama",
      popular: true,
      category: "landscape",
      style: "light",
      featured: true,
      likes: 156,
    },
    {
      id: "portrait-collection",
      name: "Arabian Portraits",
      description: "Elegant template designed specifically for portrait photography.",
      image: "/placeholder.svg?height=400&width=600&text=Arabian+Portraits",
      popular: false,
      category: "portrait",
      style: "light",
      featured: false,
      likes: 72,
    },
    {
      id: "modern-minimal",
      name: "Minimalist Sand",
      description: "Clean, modern design with subtle Arabian influences.",
      image: "/placeholder.svg?height=400&width=600&text=Minimalist+Sand",
      popular: true,
      category: "minimal",
      style: "light",
      featured: false,
      likes: 103,
    },
    {
      id: "night-gallery",
      name: "Arabian Nights",
      description: "Dark-themed gallery perfect for dramatic photography.",
      image: "/placeholder.svg?height=400&width=600&text=Arabian+Nights",
      popular: false,
      category: "modern",
      style: "dark",
      featured: true,
      likes: 91,
    },
    {
      id: "traditional-grid",
      name: "Heritage Collection",
      description: "Traditional layout with rich Arabian patterns and textures.",
      image: "/placeholder.svg?height=400&width=600&text=Heritage+Collection",
      popular: false,
      category: "classic",
      style: "light",
      featured: false,
      likes: 84,
    },
  ]

  // Filter templates based on search and category
  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || template.category === activeCategory
    return matchesSearch && matchesCategory
  })

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (activeSort === "popular") return b.likes - a.likes
    if (activeSort === "newest") return 1 // In a real app, would compare dates
    if (activeSort === "a-z") return a.name.localeCompare(b.name)
    return 0
  })

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
        <div className="flex items-center text-sm text-amber-700 mb-4">
          <Link href="/" className="hover:text-amber-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span>Templates</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl">Gallery Templates</h1>
            <p className="text-amber-700 mt-2">
              Browse our collection of {templates.length} beautiful Arabian-inspired gallery templates
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <div className="relative">
              <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                <ArrowUpDown className="h-4 w-4 mr-2" /> Sort
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <ScrollReveal>
          <div className="bg-white rounded-xl p-6 shadow-md border border-amber-200 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-amber-700 mb-1">
                  Search Templates
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search by name or description..."
                    className="pl-9 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      size="sm"
                      className={
                        activeCategory === category.id
                          ? "bg-amber-500 hover:bg-amber-400 text-white"
                          : "border-amber-300 text-amber-700 hover:bg-amber-100"
                      }
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {activeCategory === category.id && <Check className="mr-1 h-3 w-3" />}
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium text-amber-700 mb-1">Sort By</label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={activeSort === "popular" ? "default" : "outline"}
                    size="sm"
                    className={
                      activeSort === "popular"
                        ? "bg-amber-500 hover:bg-amber-400 text-white"
                        : "border-amber-300 text-amber-700 hover:bg-amber-100"
                    }
                    onClick={() => setActiveSort("popular")}
                  >
                    Most Popular
                  </Button>
                  <Button
                    variant={activeSort === "newest" ? "default" : "outline"}
                    size="sm"
                    className={
                      activeSort === "newest"
                        ? "bg-amber-500 hover:bg-amber-400 text-white"
                        : "border-amber-300 text-amber-700 hover:bg-amber-100"
                    }
                    onClick={() => setActiveSort("newest")}
                  >
                    Newest
                  </Button>
                  <Button
                    variant={activeSort === "a-z" ? "default" : "outline"}
                    size="sm"
                    className={
                      activeSort === "a-z"
                        ? "bg-amber-500 hover:bg-amber-400 text-white"
                        : "border-amber-300 text-amber-700 hover:bg-amber-100"
                    }
                    onClick={() => setActiveSort("a-z")}
                  >
                    A-Z
                  </Button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-amber-700">
              Showing {sortedTemplates.length} of {templates.length} templates
              {searchQuery && <span> matching "{searchQuery}"</span>}
              {activeCategory !== "all" && <span> in {categories.find((c) => c.id === activeCategory)?.name}</span>}
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Templates */}
        {sortedTemplates.some((t) => t.featured) && (
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-6">Featured Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTemplates
                .filter((t) => t.featured)
                .map((template, index) => (
                  <ScrollReveal key={template.id} delay={0.1 * (index % 3)}>
                    <TemplateCard template={template} />
                  </ScrollReveal>
                ))}
            </div>
          </section>
        )}

        {/* All Templates */}
        <section>
          <h2 className="font-serif text-2xl mb-6">All Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedTemplates.map((template, index) => (
              <ScrollReveal key={template.id} delay={0.1 * (index % 4)}>
                <TemplateCard template={template} />
              </ScrollReveal>
            ))}
          </div>

          {sortedTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-amber-700 text-lg">No templates found matching your criteria.</p>
              <Button
                variant="link"
                className="text-amber-600 mt-2"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </section>

        {/* CTA */}
        <ScrollReveal>
          <section className="mt-16 mb-8">
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-3xl mb-4">Can't find the perfect template?</h2>
                <p className="text-amber-50 mb-6">
                  Our team can create a custom template tailored to your specific needs and aesthetic preferences.
                </p>
                <Button className="bg-white text-amber-600 hover:bg-amber-100">Request Custom Template</Button>
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

// Template Card Component
function TemplateCard({ template }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-amber-200">
      <div className="relative h-48">
        <Image src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
        {template.popular && (
          <Badge className="absolute top-3 right-3 bg-amber-500 hover:bg-amber-500 text-white">Popular</Badge>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-lg text-amber-900">{template.name}</h3>
          <Badge variant="outline" className="border-amber-300 text-amber-700">
            {template.category === "minimal"
              ? "Minimal"
              : template.category === "classic"
                ? "Classic"
                : template.category === "modern"
                  ? "Modern"
                  : template.category === "portrait"
                    ? "Portrait"
                    : "Landscape"}
          </Badge>
        </div>
        <p className="text-amber-700 text-sm mb-4 line-clamp-2">{template.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-amber-600 text-sm">
            <Heart className="h-4 w-4 mr-1 fill-amber-500 text-amber-500" />
            <span>{template.likes}</span>
          </div>
          <div className="flex gap-2">
            <Link href={`/templates/${template.id}`}>
              <Button variant="outline" className="text-amber-700 border-amber-300 hover:bg-amber-50">
                Preview
              </Button>
            </Link>
            <Button className="bg-amber-500 hover:bg-amber-400 text-white">Use</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
