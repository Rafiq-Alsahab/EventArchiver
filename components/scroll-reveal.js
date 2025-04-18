"use client"



import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"



export function ScrollReveal({ children, delay = 0, duration = 0.5 }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration,
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1.0],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
