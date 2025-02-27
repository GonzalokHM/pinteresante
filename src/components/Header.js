let homeLink

export const Header = (onSearch, onReset, app) => {
  const header = document.createElement('header')
  header.className = 'header'

  // === Sección izquierda: Logo y navegación ===
  const headerLeft = document.createElement('div')
  headerLeft.className = 'header-left'

  const logo = document.createElement('img')
  logo.className = 'pinterest-logo'
  logo.src = '/pinterest-icon.png'
  logo.alt = 'Pinterest'
  logo.style.cursor = 'pointer'
  logo.addEventListener('click', onReset)
  headerLeft.appendChild(logo)

  const nav = document.createElement('nav')
  nav.className = 'nav-links'

  const links = [
    { text: 'Inicio', href: '#' },
    { text: 'Explorar', href: '#' },
    { text: 'Crear', href: '#' }
  ]

  links.forEach((linkData) => {
    const a = document.createElement('a')
    a.className = 'nav-link'
    a.textContent = linkData.text
    a.href = linkData.href
    if (linkData.text === 'Inicio') {
      a.classList.add('active')
      homeLink = a
    }
    nav.appendChild(a)
  })
  headerLeft.appendChild(nav)
  header.appendChild(headerLeft)

  // === Sección central: Buscador ===
  const headerCenter = document.createElement('div')
  headerCenter.className = 'header-center'

  const form = document.createElement('form')
  form.className = 'search-form'
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const query = input.value.trim()
    if (query) {
      onSearch(query)
    }
    input.value = ''
  })

  const button = document.createElement('button')
  button.type = 'submit'
  button.textContent = ''

  const searchIcon = document.createElement('img')
  searchIcon.src = '/search-icon.png'
  searchIcon.alt = 'search'
  searchIcon.className = 'search-icon'
  button.appendChild(searchIcon)
  form.appendChild(button)

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Buscar'
  form.appendChild(input)
  headerCenter.appendChild(form)
  header.appendChild(headerCenter)

  // === Sección derecha: Iconos de notificaciones, chat y perfil ===
  const headerRight = document.createElement('div')
  headerRight.className = 'header-right'

  const bellButton = document.createElement('button')
  bellButton.className = 'icon-button'
  const bellImg = document.createElement('img')
  bellImg.src = '/bell.png'
  bellImg.alt = 'Notificaciones'
  bellButton.appendChild(bellImg)
  headerRight.appendChild(bellButton)

  const chatButton = document.createElement('button')
  chatButton.className = 'icon-button'
  const chatImg = document.createElement('img')
  chatImg.src = '/chat.png'
  chatImg.alt = 'Chat'
  chatButton.appendChild(chatImg)
  headerRight.appendChild(chatButton)

  const profileButton = document.createElement('button')
  profileButton.className = 'icon-button profile-button'
  profileButton.textContent = 'D'
  headerRight.appendChild(profileButton)

  header.appendChild(headerRight)

  app.appendChild(header)
}

export const setHeaderActive = (isActive) => {
  if (homeLink) {
    if (isActive) {
      homeLink.classList.add('active')
    } else {
      homeLink.classList.remove('active')
    }
  }
}
