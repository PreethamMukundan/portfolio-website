import React from 'react'
import data from '../data/portfolioData.json'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assetPath'

export default function Projects() {
  const { projects } = data
  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
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
