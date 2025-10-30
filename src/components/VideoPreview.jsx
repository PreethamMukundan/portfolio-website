import React from 'react'
import { getAssetPath } from '../utils/assetPath'

const VideoPreview = ({ src, alt, className }) => {
  return (
    <video 
      src={getAssetPath(src)} 
      alt={alt}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default VideoPreview