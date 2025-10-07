// Utility to handle asset paths with proper base URL
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, Vite serves from root
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base path from vite config
  return `/portfolio-website/${cleanPath}`;
}