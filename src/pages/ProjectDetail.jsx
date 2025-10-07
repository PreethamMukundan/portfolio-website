import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/portfolioData.json'
import CodeBlock from '../components/CodeBlock'
import VideoPlayer from '../components/VideoPlayer'

export default function ProjectDetail() {
  const { projectId, mechanicId } = useParams()
  const project = data.projects.find(p=>p.id===projectId)
  if(!project) return <div className="container">Project not found</div>
  const mechanic = project.mechanics.find(m=>m.id===mechanicId)
  if(mechanicId && !mechanic) return <div className="container">Mechanic not found</div>

  return (
    <div className="container">
      {mechanic ? (
        <div>
          <div className="flex items-center mb-6">
            <Link 
              to={`/projects/${project.id}`}
              className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Project
            </Link>
          </div>
          <div className="card p-6">
            <h3 className="text-2xl font-semibold mb-4">{mechanic.title}</h3>
            <p className="text-lg mb-6">{mechanic.description}</p>
            <div className="space-y-8">
              {mechanic.media?.map((m,i)=>(
                <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                  <VideoPlayer 
                    fileUrl={m.endsWith('.mp4')?m:null} 
                    url={m.endsWith('.mp4')?null:m} 
                  />
                </div>
              ))}
            </div>
            {mechanic.codeSnippets?.map((c,i)=>(
              <div key={i} className="mt-8">
                <CodeBlock code={c.code} language={c.language} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center mb-6">
            <Link 
              to="/projects"
              className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
          <div className="card p-6 mb-4">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg mb-6">{project.shortDescription}</p>
            
            {/* Show the first media item (video/image) from mechanics if available */}
            {project.mechanics[0]?.media && project.mechanics[0].media.length > 0 && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <VideoPlayer 
                  fileUrl={project.mechanics[0].media[0].endsWith('.mp4') ? project.mechanics[0].media[0] : null}
                  url={project.mechanics[0].media[0].endsWith('.mp4') ? null : project.mechanics[0].media[0]}
                />
              </div>
            )}
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4">Project Mechanics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.mechanics.map(m=>(
                <Link 
                  key={m.id} 
                  to={`/projects/${project.id}/${m.id}`} 
                  className="card block p-6 hover:bg-gray-800 transition-colors group"
                >
                  <h4 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors">{m.title}</h4>
                  <p className="text-gray-400">{m.description.slice(0,140)}{m.description.length > 140 ? '...' : ''}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
