"use client"

import { motion } from 'framer-motion'
import { Code, Cpu, Globe, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function About() {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'Crafting responsive and intuitive user interfaces' },
    { name: 'Backend Development', icon: Cpu, description: 'Building robust and scalable server-side applications' },
    { name: 'Full-Stack Integration', icon: Globe, description: 'Seamlessly connecting frontend and backend systems' },
    { name: 'Performance Optimization', icon: Zap, description: 'Enhancing application speed and efficiency' },
  ]

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            angeldevildev here, a passionate full-stack developer with a knack for creating innovative and user-friendly web applications.
          </p>
        </motion.div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white dark:bg-primary-foreground dark:text-primary">
                    <skill.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{skill.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{skill.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              With a strong foundation in computer science and years of hands-on experience, I&#39;ve honed my skills in both frontend and backend technologies. My passion lies in creating seamless, efficient, and scalable web applications that solve real-world problems.
            </p>
          <Button 
            className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]"
          >
            View My Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}