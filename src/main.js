import loadImages from './api/load.js'
import { createHeader, setHeaderActive } from './components/Header.js'
import { createImageGrid } from './components/ImageGrid.js'
import './style.css'

const app = document.getElementById('app')

let currentPage = 1
let totalPages = 1
let currentQuery = 'nature'

const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    if (currentPage < totalPages) {
      loadImages(currentQuery, currentPage + 1, false).then((data) => {
        currentPage += 1
        totalPages = data.total_pages
      })
    }
  }
}

window.addEventListener('scroll', handleScroll)

const handleSearch = (query) => {
  currentPage = 1
  currentQuery = query
  loadImages(query, 1, true).then((data) => {
    currentPage = 1
    totalPages = data.total_pages
  })
  setHeaderActive(false)
}

const resetPage = () => {
  currentPage = 1
  currentQuery = 'nature'
  loadImages('nature', 1, true).then((data) => {
    currentPage = 1
    totalPages = data.total_pages
  })
  setHeaderActive(true)
}

const header = createHeader(handleSearch, resetPage)
app.appendChild(header)

const imageGrid = createImageGrid()
app.appendChild(imageGrid)

loadImages('nature', 1, true).then((data) => {
  currentPage = 1
  totalPages = data.total_pages
})
