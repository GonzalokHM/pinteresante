import { appendImageGrid, clearImageGrid } from '../components/ImageGrid'
import { fetchImages } from './api'

const loadImages = async (query, page, clear = false) => {
  const data = await fetchImages(query, page)
  if (page === 1 && data.results.length === 0) {
    alert(
      "🙀No se encontraron resultados. Mostrando imágenes de 🐈‍⬛😼🐈'. Intenta con 'funny'  ."
    )
    currentQuery = 'gatos'
    return loadImages(currentQuery, 1, true)
  }
  if (clear) {
    clearImageGrid()
  }
  appendImageGrid(data.results)
  return data
}

export default loadImages
