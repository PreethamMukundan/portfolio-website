import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Games from './pages/Games'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'

export default function App(){

  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{background: 'var(--bg)'}}>
        <Navbar />
        <main className="pt-20 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/projects/:projectId/:mechanicId" element={<ProjectDetail />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
