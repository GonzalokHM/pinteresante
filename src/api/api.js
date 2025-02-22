const ACCESS_KEY = 'ACCESS_KEYI'

export const fetchImages = async (query) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&client_id=${ACCESS_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error al obtener las imágenes')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error en fetchImages:', error)
    return { results: [] }
  }
}
