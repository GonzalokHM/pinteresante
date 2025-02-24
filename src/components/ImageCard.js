export const createImageCard = (imageData, index = 0) => {
  const card = document.createElement('div')
  card.className = 'image-card'

  const photoContainer = document.createElement('div')
  photoContainer.className = 'photo-container'
  card.appendChild(photoContainer)

  const img = document.createElement('img')
  img.className = 'Photo'
  const variants = ['small', 'thumb', 'regular']
  const variant = index < variants.length ? variants[index] : 'small'
  img.src = imageData.urls[variant] || imageData.urls.small
  img.alt = imageData.alt_description || 'Imagen'
  photoContainer.appendChild(img)

  const overlay = document.createElement('div')
  overlay.className = 'overlay'

  const overlayLeft = document.createElement('div')
  overlayLeft.className = 'overlay-left'
  const cameraIcon = document.createElement('img')
  cameraIcon.src = '/camera.png'
  cameraIcon.alt = 'TotalFotos'
  overlayLeft.appendChild(cameraIcon)
  const totalPhotos = document.createElement('span')
  totalPhotos.textContent = imageData.user.total_photos
  overlayLeft.appendChild(totalPhotos)

  const overlayRight = document.createElement('div')
  overlayRight.className = 'overlay-right'
  const heartIcon = document.createElement('img')
  heartIcon.src = '/heart.png'
  heartIcon.alt = 'Likes'
  overlayRight.appendChild(heartIcon)
  const totalLikes = document.createElement('span')
  totalLikes.textContent = imageData.user.total_likes
  overlayRight.appendChild(totalLikes)

  const overlayCenter = document.createElement('div')
  overlayCenter.className = 'overlay-center'
  const visitLink = document.createElement('a')
  visitLink.href = imageData.links.html
  visitLink.textContent = 'Visitar'
  visitLink.target = '_blank'
  overlayCenter.appendChild(visitLink)

  overlay.appendChild(overlayLeft)
  overlay.appendChild(overlayCenter)
  overlay.appendChild(overlayRight)
  photoContainer.appendChild(overlay)

  const userDiv = document.createElement('div')
  userDiv.className = 'user-info'

  const userImg = document.createElement('img')
  userImg.className = 'user-Image'
  userImg.src = imageData.user.profile_image.small
  userImg.alt = imageData.user.name
  console.log(imageData)
  userImg.style.border = `5px solid ${imageData.color}`

  userDiv.appendChild(userImg)

  imageData.user.total_photos
  imageData.user.total_likes

  const userName = document.createElement('p')
  userName.textContent = imageData.user.name
  userDiv.appendChild(userName)

  const updatedDate = document.createElement('p')
  updatedDate.className = 'updated-date'
  const dateOnly = imageData.updated_at.split('T')[0]
  updatedDate.innerHTML = `<img src="/updatedDate.png" alt="updatedDate" class="updatedDate-icon">${dateOnly}`
  userDiv.appendChild(updatedDate)

  card.appendChild(userDiv)

  return card
}
