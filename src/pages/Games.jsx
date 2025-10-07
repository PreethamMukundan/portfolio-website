import React from 'react'
import data from '../data/portfolioData.json'

export default function Games() {
  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-4">Finished Games</h2>
      <div className="project-grid">
        {data.games.map(g=>(
          <div key={g.id} className="project-card card">
            <img src={g.image} alt={g.title} />
            <h3 className="mt-2 font-semibold">{g.title}</h3>
            <p className="text-muted text-sm">{g.description}</p>
            {g.download? <a href={g.download} target="_blank" rel="noreferrer" className="text-accent mt-2 block">Download</a> : <div className="text-muted mt-2">No download available</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
