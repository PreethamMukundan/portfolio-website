export function embedYouTube(url) {
  try {
    if (!url) return null;
    let id = null;
    if (url.includes('watch?v=')) id = url.split('watch?v=')[1].split('&')[0];
    else if (url.includes('youtu.be/')) id = url.split('youtu.be/')[1].split('?')[0];
    if (id) return `https://www.youtube.com/embed/${id}`;
    return null;
  } catch (e) { return null; }
}
