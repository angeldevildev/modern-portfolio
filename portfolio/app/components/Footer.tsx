"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">angeldevildev</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full-stack developer passionate about creating innovative web solutions.
            </p>
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">About</a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Projects</a>
              <a href="#experience" className="block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Experience</a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">Contact</a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://github.com/angeldevildev" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/angelo-broggian-78b734269/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@angelobroggian4@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} angeldevildev. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}