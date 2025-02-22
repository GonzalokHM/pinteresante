import loadImages from './api/load.js'
import { createHeader } from './components/Header.js'
import { createImageGrid } from './components/ImageGrid.js'
import './style.css'

const app = document.getElementById('app')

loadImages('nature')

const handleSearch = (query) => {
  loadImages(query)
}

const resetPage = () => {
  loadImages('nature')
}
const header = createHeader(handleSearch, resetPage)
app.appendChild(header)

const imageGrid = createImageGrid()
app.appendChild(imageGrid)
