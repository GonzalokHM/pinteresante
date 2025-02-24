import Masonry from 'masonry-layout'
import { createImageCard } from './ImageCard.js'
import imagesloaded from 'imagesloaded'

let gridContainer
let msnry = null

const createGridSizer = () => {
  const sizer = document.createElement('div')
  sizer.className = 'grid-sizer'
  return sizer
}

export const createImageGrid = () => {
  gridContainer = document.createElement('div')
  gridContainer.className = 'image-grid'

  gridContainer.appendChild(createGridSizer())

  return gridContainer
}

export const clearImageGrid = () => {
  gridContainer.innerHTML = ''
  gridContainer.appendChild(createGridSizer())
  if (msnry) {
    msnry.reloadItems()
    msnry.layout()
  }
}

export const appendImageGrid = (images) => {
  const newCards = []

  images.forEach((imageData, idx) => {
    const card = createImageCard(imageData, idx)
    gridContainer.appendChild(card)
    newCards.push(card)
  })
  if (!msnry) {
    msnry = new Masonry(gridContainer, {
      itemSelector: '.image-card',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 5,
      isFitWidth: false
    })
  } else {
    msnry.appended(newCards)
    msnry.layout()
  }
  imagesloaded(gridContainer, () => {
    msnry.layout()
  })
}
