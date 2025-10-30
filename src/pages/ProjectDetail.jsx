import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/portfolioData.json'
import CodeBlock from '../components/CodeBlock'
import VideoPlayer from '../components/VideoPlayer'
import VideoPreview from '../components/VideoPreview'

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
            {/* Title */}
            <h3 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-400">
              {mechanic.title}
            </h3>
            <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 rounded-full"></div>
            
            {/* Video and Description Side by Side */}
            <div className="flex flex-col lg:flex-row lg:gap-8 mb-6">
              {mechanic.media && mechanic.media.length > 0 && (
                <div className="flex-shrink-0 w-full lg:w-[28rem] mb-6 lg:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <VideoPlayer 
                      fileUrl={mechanic.media[0].endsWith('.mp4')?mechanic.media[0]:null} 
                      url={mechanic.media[0].endsWith('.mp4')?null:mechanic.media[0]} 
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <p className="text-lg whitespace-pre-line">{mechanic.description}</p>
              </div>
            </div>
            
            {/* Additional Media (if more than one) */}
            {mechanic.media && mechanic.media.length > 1 && (
              <div className="space-y-8">
                {mechanic.media.slice(1).map((m,i)=>(
                  <div key={i+1} className="rounded-lg overflow-hidden shadow-lg">
                    <VideoPlayer 
                      fileUrl={m.endsWith('.mp4')?m:null} 
                      url={m.endsWith('.mp4')?null:m} 
                    />
                  </div>
                ))}
              </div>
            )}
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
            {/* Centered Title with Purple Gradient */}
            <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-400">{project.title}</h2>
            <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 rounded-full"></div>
            
            {/* Video and Description Side by Side */}
            <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
              {project.video && (
                <div className="flex-shrink-0 w-full lg:w-[36rem] mb-6 lg:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <VideoPlayer 
                      fileUrl={project.video.endsWith('.mp4') ? project.video : null}
                      url={project.video.endsWith('.mp4') ? null : project.video}
                    />
                  </div>
                </div>
              )}
              <div className="flex-1 lg:min-h-[20rem] flex items-center">
                <p className="text-lg leading-relaxed">{project.shortDescription}</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-400">Project Mechanics</h3>
            <div className="w-96 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.mechanics.map(m=>(
                <Link 
                  key={m.id} 
                  to={`/projects/${project.id}/${m.id}`} 
                  className="card block overflow-hidden hover:bg-gray-800 transition-colors group"
                >
                  {m.media && m.media[0] && (
                    <div className="aspect-video overflow-hidden">
                      <VideoPreview 
                        src={m.media[0]} 
                        alt={m.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-3 group-hover:text-accent transition-colors">{m.title}</h4>
                    <p className="text-gray-400">{m.description.slice(0,140)}{m.description.length > 140 ? '...' : ''}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
