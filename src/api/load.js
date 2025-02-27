import { printImages } from '../utils/print'
import fetchImages from './fetch'

const loadImages = async (word, page, clear = false) => {
  try {
    const data = await fetchImages(word, page)

    if (data.results.length === 0 && page === 1) {
      alert(
        "🙀No se encontraron resultados. Acepta para ver imágenes de 🐈‍⬛😼🐈'. Intenta con 'funny'  ."
      )
      return loadImages('cats', 1, true)
    }

    if (clear) {
      document.querySelector('.grid-container').innerHTML = ''
    }

    printImages(data.results)
    return data
  } catch (error) {
    console.error('Error al cargar imágenes:', error)
    return { results: [], total_pages: 0 }
  }
}

export default loadImages
