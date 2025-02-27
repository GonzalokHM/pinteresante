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

const handleScroll = debounce(() => {
  if (isFetching) return
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement
  if (
    scrollTop + clientHeight >= scrollHeight - 50 &&
    currentPage < totalPages
  ) {
    console.log('fetch Launched')
    isFetching = true
    loadImages(currentWord, currentPage + 1, false).then((data) => {
      currentPage += 1
      totalPages = data.total_pages
      isFetching = false
    })
  }
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
