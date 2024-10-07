"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import portfolioImage from '../assets/portfolio.png';
import jellyfishMCImage from '../assets/jellyfish.png';
import jellyfishShopImage from '../assets/shop.png';
import visiUIImage from '../assets/visiuiweb.png';
import visiUIDocsImage from '../assets/docs.png'

const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills and projects.",
      image: portfolioImage,
      tags: ["React", "CSS", "Vercel"],
      liveLink: "https://www.codedoddle.com/",
      githubLink: "https://github.com/example/portfolio",
    },
    {
      title: "JellyFishMC Website",
      description: "I've created this website with NextJS and is for a MineCraft Server. It Is a private repository.",
      image: jellyfishMCImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "NextJS", "Vercel", "OpenGraph"],
      liveLink: "https://jellyfish-website.vercel.app/",
      githubLink: "#",
    },
    {
      title: "JellyFishMC Shop",
      description: "The JellyFishMC shop is the part where you can buy some items of the server. It is a private repository.",
      image: jellyfishShopImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "NextJS", "Vercel", "OpenGraph"],
      liveLink: "https://jellyfish-shop.vercel.app/",
      githubLink: "#",
    },
    {
      title: "VisiUI",
      description: "VisiUI is a library that provides pre-built, editable React components that can be used in your app. Is OpenSource and you can start contributing right NOW!",
      image: visiUIImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "NextJS", "Vercel", "OpenGraph"],
      liveLink: "https://www.visiui.org/",
      githubLink: "https://github.com/VisiUI/VisiUI",
    },
    {
      title: "VisiUI Docs",
      description: "The VisiUI Docs is where all the components are based.",
      image: visiUIDocsImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "NextJS", "Vercel", "OpenGraph"],
      liveLink: "https://docs.visiui.org/docs",
      githubLink: "https://github.com/VisiUI/docs",
    },
  ]

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
    return (
      <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    >
                      <div className="space-x-4">
                        <Button
                          asChild
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            Live Demo <ExternalLink className="inline-block ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full border-2 border-white"
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            GitHub <Github className="inline-block ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
          </motion.div>
        </div>
      </section>
    )
  }