import React from 'react'
import data from '../data/portfolioData.json'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { getAssetPath } from '../utils/assetPath'
import VideoPreview from '../components/VideoPreview'

export default function Home() {
  const { about, projects } = data
  
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

  const scrollVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <motion.section 
        className="hero no-padding"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-inner">
          <motion.div style={{flex:1}} variants={containerVariants}>
            <motion.div 
              className="text-muted text-lg tracking-wide"
              variants={itemVariants}
            >
              SOFTWARE ENGINEER
            </motion.div>
            <motion.h1 
              className="hero-title flex flex-col leading-none font-poppins tracking-wider"
              variants={itemVariants}
            >
              <span className="text-white tracking-widest">PREETHAM</span>
              <span className="bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">MUKUNDAN</span>
            </motion.h1>
            <motion.div 
              className="hero-sub"
              variants={itemVariants}
            >
              {about.role.split('·').map((role, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2">•</span>}
                  {role.trim()}
                </span>
              ))}
            </motion.div>
            <motion.div 
              className="hero-sub"
              variants={itemVariants}
            >
              {about.bio.split('.').slice(0,1).join('.') + '.'}
            </motion.div>
            <motion.div 
              className="hero-cta flex gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a 
                href={getAssetPath(about.resume)} 
                className="btn btn-primary inline-flex items-center justify-center" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              <Link 
                to="/projects" 
                className="btn btn-ghost inline-flex items-center justify-center"
                style={{ height: '100%' }}
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            style={{width:400}} 
            className="card p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img 
              src={getAssetPath(about.image)} 
              alt={about.name} 
              className="w-full rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div 
              className="mt-4 text-sm text-center font-medium text-muted"
              variants={itemVariants}
            >
              {about.role}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="container space-y-24">
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.05 }}
          variants={scrollVariants}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Game Mechanics
          </motion.h2>
          <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.flatMap(p => p.mechanics.map(m => ({...m, projectId: p.id, projectTitle: p.title, videoSrc: m.media && m.media[0] ? m.media[0] : null}))).map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Link 
                  to={`/projects/${item.projectId}/${item.id}`} 
                  className="block group overflow-hidden rounded-xl bg-opacity-5 bg-white hover:bg-opacity-10 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden relative">
                    {item.videoSrc ? (
                      <VideoPreview 
                        src={item.videoSrc} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-400">No video available</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <motion.div 
                      className="text-sm text-accent-2 mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.projectTitle}
                    </motion.div>
                    <motion.h3 
                      className="font-semibold text-lg group-hover:text-accent-2 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted text-sm mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {item.description.slice(0,80)}{item.description.length>80?'...':''}
                    </motion.p>
                    <motion.div 
                      className="text-sm mt-3 text-accent"
                      whileHover={{ x: 5 }}
                    >
                      View details →
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link to="/experience">
            <motion.div
              className="card group p-8 text-center hover:bg-opacity-10 hover:bg-white cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="text-2xl font-semibold mb-3 group-hover:text-accent-2 transition-colors">
                Experience
              </motion.div>
              <motion.div className="text-muted">
                View my professional journey and work experience
              </motion.div>
            </motion.div>
          </Link>

          <Link to="/education">
            <motion.div
              className="card group p-8 text-center hover:bg-opacity-10 hover:bg-white cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="text-2xl font-semibold mb-3 group-hover:text-accent-2 transition-colors">
                Education
              </motion.div>
              <motion.div className="text-muted">
                Explore my academic background and qualifications
              </motion.div>
            </motion.div>
          </Link>
        </motion.section>

        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.skills.map((s,i)=>(
              <motion.div 
                key={i} 
                className="card group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div className="text-xl font-semibold group-hover:text-accent-2 transition-colors">
                  {s.category}
                </motion.div>
                <motion.div 
                  className="text-muted mt-3 leading-relaxed flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {s.items.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-opacity-10 bg-white hover:bg-opacity-20 transition-all"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <img src={item.icon} alt="" className="w-5 h-5 object-contain" />
                      <span>{item.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollVariants}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <motion.div 
            className="card p-8 flex flex-col items-center"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="text-2xl font-black mb-2 flex flex-col leading-none font-poppins tracking-wider"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">PREETHAM</span>
                <span className="text-violet-300">MUKUNDAN</span>
              </motion.div>
              <motion.div 
                className="text-lg text-muted mb-1"
                variants={itemVariants}
              >
                {about.role}
              </motion.div>
              <motion.div 
                className="text-muted flex flex-col sm:flex-row items-center gap-4 mt-4"
                variants={itemVariants}
              >
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-lg" />
                  {about.email}
                </span>
                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent-2"></span>
                <span>{about.phone}</span>
              </motion.div>
              <motion.div 
                className="flex gap-6 mt-4 justify-center"
                variants={itemVariants}
              >
                <motion.a 
                  href={about.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-violet-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href={about.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-violet-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-6"
              variants={itemVariants}
            >
              <motion.a 
                href={`mailto:${about.email}`} 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Email me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  )
}
