"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 pt-16 md:pt-20 lg:pt-24">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Experiences</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hi, angeldevildev here! I'm a Full-Stack developer passionate about creating innovative and user-friendly web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold">
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center space-x-6"
        >
          <a href="https://github.com/angeldevildev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <Github className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/angelo-broggian-78b734269/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <Linkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:contact@angelobroggian4@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <Mail className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>
        <div className="absolute inset-0 z-0">
            <svg className="absolute left-0 top-0 h-full w-48 text-white dark:text-gray-800 transform -translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </section>
  )
}