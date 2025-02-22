import { updateImageGrid } from '../components/ImageGrid'
import { fetchImages } from './api'

const loadImages = async (query) => {
  let data = await fetchImages(query)
  if (data.results.length === 0) {
    alert(
      "No se encontraron resultados. Mostrando imágenes de 'gatos'. Intenta con '....'  ."
    )
    data = await fetchImages('gatos')
  }
  updateImageGrid(data.results)
}

export default loadImages
