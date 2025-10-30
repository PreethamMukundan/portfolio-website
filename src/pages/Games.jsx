import React from 'react'
import data from '../data/portfolioData.json'
import { getAssetPath } from '../utils/assetPath'

export default function Games() {
  return (
    <div className="container">
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Finished Games</h2>
      <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8 rounded-full"></div>
      <div className="project-grid">
        {data.games.map(g=>(
          <div key={g.id} className="project-card card">
            <img src={getAssetPath(g.image)} alt={g.title} />
            <h3 className="mt-2 font-semibold">{g.title}</h3>
            <p className="text-muted text-sm">{g.description}</p>
            {g.download? <a href={g.download} target="_blank" rel="noreferrer" className="text-accent mt-2 block">Download</a> : <div className="text-muted mt-2">No download available</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
