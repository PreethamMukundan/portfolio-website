import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className="fixed left-0 right-0 top-0 z-30 backdrop-blur-sm" 
      style={{
        background: scrolled ? 'rgba(6,7,11,0.95)' : 'rgba(6,7,11,0.45)', 
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.03)'}`,
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
      <div className={`nav px-32 ${scrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div style={{width:36,height:36,borderRadius:8,background:'linear-gradient(90deg,var(--accent),var(--accent-2))'}} />
            <div className="flex flex-col leading-none">
              <div className="text-xl font-black font-poppins tracking-wider bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">PREETHAM</div>
              <div className="text-lg font-bold tracking-wider text-violet-300">MUKUNDAN</div>
            </div>
          </Link>
        </div>
        <nav className="flex items-center">
          <Link to="/projects" className="text-sm ml-4">Projects</Link>
          <Link to="/games" className="text-sm ml-4">Games</Link>
          <Link to="/experience" className="text-sm ml-4">Experience</Link>
          <Link to="/education" className="text-sm ml-4">Education</Link>
          <Link to="/about" className="text-sm ml-4 mr-16">About</Link>
        </nav>
      </div>
    </header>
  )
}