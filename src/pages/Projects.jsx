import React from 'react'
import data from '../data/portfolioData.json'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assetPath'

export default function Projects() {
  const { projects } = data
  return (
    <div className="container">
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Projects</h2>
      <div className="w-full max-w-xs h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
      <div className="project-grid">
        {projects.map(p => (
          <Link key={p.id} to={`/projects/${p.id}`} className="project-card card block hover:bg-gray-800 transition-colors">
            <img src={getAssetPath(p.thumbnail)} alt={p.title} className="w-full" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
