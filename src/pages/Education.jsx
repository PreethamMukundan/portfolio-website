import React from 'react'
import data from '../data/portfolioData.json'
import { motion } from 'framer-motion'

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Education</h1>
        <p className="text-muted text-lg">My academic background and qualifications</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.education.map((e,i)=>(
          <motion.div 
            key={i} 
            className="card group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="text-sm text-accent-2 font-medium tracking-wide">{e.dateRange}</motion.div>
            <motion.div className="text-xl font-semibold mt-2 group-hover:text-accent-2 transition-colors">
              {e.degree}
            </motion.div>
            <motion.div className="text-lg mt-1 text-muted">{e.institution}</motion.div>
            <motion.div className="mt-3 text-muted leading-relaxed">{e.description}</motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}