import axios from 'axios'

export default async function fetchImages(word, page) {
  const response = await axios('https://api.unsplash.com/search/photos', {
    params: {
      query: word ? word : 'perro',
      page: page ? page : 1,
      per_page: 18
    },
    headers: {
      Authorization: 'Client-ID rwIE8dhNV1Bmw_kHWlj-59RoE7puiR4ygxPQtse6cWg'
    }
  })

  return response.data
}
