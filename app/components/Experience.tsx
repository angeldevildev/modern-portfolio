"use client"

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const experiences = [
  {
    title: "Freelance FrontEnd Developer",
    period: "Jan 2024 - Present",
    description: "Lead development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    skills: ["React", "Node.js", "AWS", "Docker", "GraphQL"],
  },
  {
    title: "FrontEnd Engineer",
    company: "Spotify",
    period: "Sep 2022 - Present",
    description: "Developed and maintained multiple client websites and web applications. Collaborated with design team to implement responsive UI/UX designs.",
    skills: ["JavaScript", "React", "MySQL", "Web Design", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "FrontEnd Developer",
    company: "Microsoft",
    period: "Apr 2015 - June 2023",
    description: "Assisted in the development of company's main product, a social media management tool. Gained experience in agile methodologies and version control.",
    skills: ["JavaScript", "React", "MySQL" ,"HTML/CSS", "Tailwind CSS", "Figma", "Web Design"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional career, showcasing the roles and projects that have shaped my expertise.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
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