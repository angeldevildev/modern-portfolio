"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, User, Code, Briefcase, Mail, ExternalLink, Github, Linkedin } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/angeldevildev' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/angelo-broggian-78b734269/' },
  ]

  if (!mounted) {
    return null
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-2 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md' : ''
      }`} 
      style={{ fontFamily: "GeistMonoVF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Angelo Broggian" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <span className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Angelo Broggian</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button 
              className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
            >
              Hire Me <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="inline-block w-5 h-5 mr-2" />
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              ))}
            </div>
            <div className="px-4 py-3 space-y-3">
              <Button
                className="w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Me <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="rounded-full"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}