import loadImages from './api/load.js'
import { Header, setHeaderActive } from './components/Header.js'
import './style.css'

const app = document.getElementById('app')

let currentPage = 1
let totalPages = 1
let currentWord = 'nature'
let isFetching = false

const debounce = (func, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

let lastFetchTime = 0

const handleScroll = debounce(() => {
  if (isFetching) return
  requestAnimationFrame(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    const now = Date.now()

    if (
      scrollTop + clientHeight >= scrollHeight - 150 &&
      currentPage < totalPages &&
      now - lastFetchTime > 1000
    ) {
      console.log('Fetching more images...')
      isFetching = true
      lastFetchTime = now

      loadImages(currentWord, currentPage + 1, false).then((data) => {
        currentPage += 1
        totalPages = data.total_pages
        isFetching = false
      })
    }
  })
}, 300)

window.addEventListener('scroll', handleScroll)

const handleSearch = async (word) => {
  currentPage = 1
  currentWord = word
  const data = await loadImages(word, 1, true)
  totalPages = data.total_pages
  setHeaderActive(false)
}

const resetPage = async () => {
  currentPage = 1
  currentWord = 'nature'
  const data = await loadImages('nature', 1, true)
  totalPages = data.total_pages
  setHeaderActive(true)
}

Header(handleSearch, resetPage, app)
const gridContainer = document.createElement('div')
gridContainer.className = 'grid-container'
app.appendChild(gridContainer)

loadImages('nature', 1, true).then((data) => {
  totalPages = data.total_pages
})
