export const createImageCard = (imageData) => {
  const card = document.createElement('div')
  card.className = 'image-card'

  const img = document.createElement('img')
  img.src = imageData.urls.small
  img.alt = imageData.alt_description || 'Imagen'
  card.appendChild(img)

  const userDiv = document.createElement('div')
  userDiv.className = 'user-info'

  const userImg = document.createElement('img')
  userImg.src = imageData.user.profile_image.small
  userImg.alt = imageData.user.name
  userDiv.appendChild(userImg)

  const userName = document.createElement('p')
  userName.textContent = imageData.user.name
  userDiv.appendChild(userName)

  card.appendChild(userDiv)

  return card
}
