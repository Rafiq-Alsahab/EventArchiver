"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Lock, Facebook } from "lucide-react"
import { signIn } from "next-auth/react";

import { ScrollReveal } from "@/components/scroll-reveal"
import { useRouter  } from "next/navigation";
export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(false)

   const res = await signIn("credentials", {
       email:email.value,
       password: password.value,
       redirect: false,
     });
     console.log(res)
      setIsLoading(false)

     if (res.ok && !res.error) {
       router.push("/");
     } 
   
  }

  return (
    <div className="min-h-screen bg-amber-100/90 text-amber-900 overflow-hidden flex flex-col">
      {/* Background texture */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-50 bg-opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=1000')] bg-repeat opacity-20"></div>
      </div>

      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="font-serif text-xl text-white">M</span>
          </div>
          <span className="font-serif text-2xl tracking-wide">Mashriq</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl mb-2">Welcome back</h1>
              <p className="text-amber-700">Sign in to continue to your Mashriq account</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-amber-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="pl-10 border-amber-300 focus:border-amber-500 focus:ring-amber-500 w-full py-3 border rounded"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-amber-800">
                      Password
                    </label>
                    <Link href="#" className="text-xs text-amber-600 hover:text-amber-800">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="pl-10 border-amber-300 focus:border-amber-500 focus:ring-amber-500 w-full py-3 border rounded"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-amber-300 rounded py-5 border"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center gap-2 py-3 rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Sign In <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-amber-700">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  variant="outline"
                  className="border-amber-300 hover:bg-amber-50 text-amber-800 flex items-center justify-center gap-2 py-3 rounded-lg"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button
                  variant="outline"
                  className="border-amber-300 hover:bg-amber-50 text-amber-800 flex items-center justify-center gap-2 py-3 rounded-lg"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                  Facebook
                </button>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-amber-700">
                  Don't have an account?{" "}
                  <Link href="/auth/sign-up" className="text-amber-600 hover:text-amber-800 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-amber-700 text-sm">
        <p>© {new Date().getFullYear()} Mashriq. All rights reserved.</p>
      </footer>
    </div>
  )
}
