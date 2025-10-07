import React from 'react'
import data from '../data/portfolioData.json'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function About() {
  const { about } = data

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  }

  return (
    <motion.div 
      className="container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="card p-6 flex flex-col md:flex-row gap-6 items-center backdrop-blur-sm bg-opacity-50 bg-gray-900 rounded-xl shadow-xl hover:shadow-violet-500/20 transition-shadow duration-300"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img 
          src={about.image} 
          alt={about.name} 
          className="profile-pic rounded-full border-4 border-violet-500/30 shadow-lg"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div className="space-y-4">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-black flex flex-col leading-none font-poppins tracking-wider">
              <span className="bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">PREETHAM</span>
              <span className="text-violet-300">MUKUNDAN</span>
            </h2>
            <motion.p 
              className="text-lg text-violet-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {about.role}
            </motion.p>
          </motion.div>

          <motion.p 
            className="text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            {about.bio}
          </motion.p>

          <motion.div 
            className="space-y-3 text-sm text-gray-400"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-lg text-violet-400" />
              <a href={`mailto:${about.email}`} className="hover:text-violet-400 transition-colors">{about.email}</a>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <FaPhone className="text-lg text-violet-400" />
              <span>{about.phone}</span>
            </motion.div>
            <motion.div 
              className="flex gap-4 mt-2"
              variants={itemVariants}
            >
              <motion.a 
                href={about.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                href={about.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
            <motion.div 
              className="mt-4"
              variants={itemVariants}
            >
              <motion.a 
                href={about.resume} 
                className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow-lg hover:bg-violet-700 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
