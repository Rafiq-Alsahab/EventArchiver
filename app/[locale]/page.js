"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"

import GalleryShowcase from "@/components/gallery-showcase"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  const t = useTranslations("Home") 

  return (
    <div className="bg-amber-950/90 text-amber-50 overflow-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 -z-10 object-fill h-full">
      {/* <img className="mt-[18%]" src="/images/main_1bg.jpg" /> */}

        <img className="min-h-screen" src="/images/1.jpg" alt="Arabian texture background" />
      </div>

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image src="/images/logo.png" alt="Mashriq Gallery Logo" fill className="object-contain rounded-2xl" />
          </div>
          <span className="font-serif text-2xl tracking-wide">Mashriq</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-amber-200">
          <Link href="#" className="hover:text-white transition-colors">{t("header.home")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t("header.galleries")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t("header.features")}</Link>
          <Link href="#" className="hover:text-white transition-colors">{t("header.pricing")}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-amber-200 hover:text-white transition-colors">{t("header.signIn")}</Link>
          <button className="bg-amber-600 hover:bg-amber-500 text-white">{t("header.tryFree")}</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 relative bg-[url(/images/main_bg.png)] bg-cover">
        <ScrollReveal>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-center leading-tight">
            {t("hero.titleLine1")} <br />
            <span className="text-amber-400">{t("hero.titleLine2")}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-amber-200 mt-8 max-w-2xl mx-auto text-lg md:text-xl">
            {t("hero.description")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex justify-center mt-12">
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-6 text-lg rounded-full flex">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </ScrollReveal>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-amber-400" />
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24 md:py-32 relative">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            {t("showcase.title")} <span className="text-amber-400">{t("showcase.highlight")}</span>
          </h2>
        </ScrollReveal>
        <GalleryShowcase />
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            {t("features.title")} <span className="text-amber-400">{t("features.highlight")}</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <ScrollReveal delay={0.1}>
            <div className="bg-amber-900/50 p-8 rounded-lg border border-amber-800/50 backdrop-blur-sm">
              <h3 className="font-serif text-2xl mb-4 text-amber-300">{t("features.aestheticsTitle")}</h3>
              <p className="text-amber-100">{t("features.aestheticsDescription")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-amber-900/50 p-8 rounded-lg border border-amber-800/50 backdrop-blur-sm">
              <h3 className="font-serif text-2xl mb-4 text-amber-300">{t("features.animationsTitle")}</h3>
              <p className="text-amber-100">{t("features.animationsDescription")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-amber-900/50 p-8 rounded-lg border border-amber-800/50 backdrop-blur-sm">
              <h3 className="font-serif text-2xl mb-4 text-amber-300">{t("features.responsiveTitle")}</h3>
              <p className="text-amber-100">{t("features.responsiveDescription")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-amber-200">{t("testimonial.quote")}</p>
            <p className="mt-6 text-amber-400 font-medium">{t("testimonial.author")}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-12 md:p-16 rounded-2xl text-center max-w-5xl mx-auto border border-amber-700/50">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">{t("ctaSection.title")}</h2>
            <p className="text-amber-200 text-lg mb-8 max-w-2xl mx-auto">{t("ctaSection.description")}</p>
            <button className="bg-amber-500 hover:bg-amber-400 text-amber-950 px-8 py-6 text-lg rounded-full">
              {t("ctaSection.button")}
            </button>
            <p className="text-amber-300 mt-4 text-sm">{t("ctaSection.note")}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-800/50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="relative w-8 h-8">
                <Image src="/images/logo.png" alt="Mashriq Gallery Logo" fill className="object-contain" />
              </div>
              <span className="font-serif text-xl tracking-wide">Mashriq</span>
            </div>

            <div className="flex gap-8 text-amber-300 text-sm">
              <Link href="#" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t("footer.support")}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t("footer.contact")}</Link>
            </div>
          </div>
          <div className="text-center md:text-right mt-8 text-amber-400/70 text-sm">
           Mashriq. All rights reserved.   © {new Date().getFullYear()} 
            
          </div>
        </div>
      </footer>
    </div>
  )
}