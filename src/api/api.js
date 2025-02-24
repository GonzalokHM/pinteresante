export const fetchImages = async (query, page, perPage = 14) => {
  // perPage = 12
  const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${encodeURIComponent(
    // &per_page=${perPage}
    query
  )}&client_id=${import.meta.env.VITE_ACCESS_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error al obtener las imágenes')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error en fetchImages:', error)
    return { results: [], total_pages: 0 }
  }
}
