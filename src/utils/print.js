import { ImageCard } from '../components/ImageCard.js'

export const printImages = (images) => {
  const container = document.querySelector('.grid-container')

  images.forEach((imageData) => {
    ImageCard(container, imageData)
  })
}
