import { createImageCard } from './ImageCard.js'

let gridContainer

export const createImageGrid = () => {
  gridContainer = document.createElement('div')
  gridContainer.className = 'image-grid'
  return gridContainer
}

export const updateImageGrid = (images) => {
  gridContainer.innerHTML = ''
  images.forEach((imageData) => {
    const card = createImageCard(imageData)
    gridContainer.appendChild(card)
  })
}
