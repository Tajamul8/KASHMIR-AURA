import { useEffect, useRef } from "react" import { motion } from "framer-motion"

export default function AnimatedLandingPage() { const floatingRef = useRef(null)

useEffect(() => { const loadGSAP = async () => { const gsapModule = await import("gsap") const gsap = gsapModule.gsap

gsap.to(floatingRef.current, {
    y: -25,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  })
}

loadGSAP()

}, [])

return ( <div className="min-h-screen bg-black text-white overflow-hidden relative selection:bg-white selection:text-black"> {/* Animated Background */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div> <div className="absolute w-[400px] h-[400px] bg-blue-700/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div> </div>

{/* Navbar */}
  <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 className="text-2xl font-bold tracking-widest">
        KA
      </h1>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#home" className="hover:text-white transition-all">Home</a>
        <a href="#features" className="hover:text-white transition-all">Features</a>
        <a href="#about" className="hover:text-white transition-all">About</a>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <section
    id="home"
    className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6"
  >
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
        Kashmir Aura
      </h1>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mt-6 max-w-2xl text-gray-300 text-lg md:text-2xl"
    >
      Ultra premium animated experience powered by React, GSAP and Framer Motion.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="mt-10 flex gap-4 flex-wrap justify-center"
    >
      <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
        Explore Now
      </button>

      <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
        Learn More
      </button>
    </motion.div>

    {/* Floating Glass Card */}
    <div
      ref={floatingRef}
      className="absolute bottom-20 right-10 hidden lg:block"
    >
      <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl w-72">
        <div className="text-sm text-gray-300 mb-2">
          Performance
        </div>

        <div className="text-4xl font-bold">
          99%
        </div>

        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[90%] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </section>

  {/* Features */}
  <section
    id="features"
    className="relative z-10 py-28 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-black text-center mb-20"
      >
        Premium Features
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Lightning Fast",
          "Smooth Animations",
          "Responsive UI",
          "SEO Optimized",
          "Modern Design",
          "Realtime Ready",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-3 transition-all duration-500 shadow-xl"
          >
            <div className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-all duration-300">
              {item}
            </div>

            <p className="text-gray-400 leading-relaxed">
              Professional next generation UI with high-end animations and optimized rendering.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
    © 2026 Kashmir Aura — Built with React + GSAP
  </footer>
</div>

) }

import { useEffect, useRef } from "react"

function HeroSection() { const titleRef = useRef(null) const subtitleRef = useRef(null) const buttonRef = useRef(null)

useEffect(() => { if (window.gsap) { const gsap = window.gsap

gsap.from(titleRef.current, {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  })

  gsap.from(subtitleRef.current, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })

  gsap.from(buttonRef.current, {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    ease: "back.out(1.7)",
  })
}

}, [])

return ( <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative"> <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80"></div>

<h1
    ref={titleRef}
    className="text-6xl md:text-8xl font-extrabold z-10 tracking-tight"
  >
    Kashmir Aura
  </h1>

  <p
    ref={subtitleRef}
    className="text-lg md:text-2xl text-gray-300 mt-6 max-w-2xl z-10"
  >
    Premium animated React + GSAP website experience.
  </p>

  <button
    ref={buttonRef}
    className="mt-10 px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300 z-10 shadow-2xl"
  >
    Explore Now
  </button>
</section>

) }

function FeaturesSection() { const cardsRef = useRef([])

useEffect(() => { if (window.gsap) { const gsap = window.gsap

gsap.from(cardsRef.current, {
    scrollTrigger: {
      trigger: cardsRef.current[0],
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
  })
}

}, [])

const features = [ "Ultra Smooth Animation", "Modern React UI", "Fast Performance", "Responsive Design", ]

return ( <section className="py-32 px-6 bg-zinc-950"> <h2 className="text-5xl font-bold text-center mb-16"> Features </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {features.map((feature, index) => (
      <div
        key={index}
        ref={(el) => (cardsRef.current[index] = el)}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl"
      >
        <div className="text-2xl font-semibold mb-4">
          {feature}
        </div>

        <p className="text-gray-400">
          Highly interactive and visually premium website section.
        </p>
      </div>
    ))}
  </div>
</section>

) }