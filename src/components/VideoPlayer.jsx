import React from 'react'
import { embedYouTube } from '../utils/embedYouTube'
import { getAssetPath } from '../utils/assetPath'

export default function VideoPlayer({ fileUrl, url }) {
  const embed = embedYouTube(url)
  return (
    <div>
      {fileUrl ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          src={getAssetPath(fileUrl)} 
          className="w-full max-h-[420px] rounded"
          style={{ pointerEvents: 'none' }}
        />
      ) : embed ? (
        <div className="w-full aspect-video rounded overflow-hidden"><iframe title="video" className="w-full h-full" src={embed} allowFullScreen/></div>
      ) : url ? (
        <a href={url} target="_blank" rel="noreferrer" className="text-accent">Open video</a>
      ) : (
        <div className="text-muted">No media</div>
      )}
    </div>
  )
}
