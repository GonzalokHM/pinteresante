export const Header = (onSearch, onReset, app) => {
  app.innerHTML = `
    <header class="header">
      <div class="header-left">
        <img class="pinterest-logo" src="/pinterest-icon.png" alt="Pinterest" style="cursor: pointer;">
        <nav class="nav-links">
          <a class="nav-link active" href="#" id="homeLink">Inicio</a>
          <a class="nav-link" href="#">Explorar</a>
          <a class="nav-link" href="#">Crear</a>
        </nav>
      </div>
      <div class="header-center">
        <form class="search-form">
          <button type="submit">
            <img src="/search-icon.png" alt="search" class="search-icon">
          </button>
          <input type="text" placeholder="Buscar">
        </form>
      </div>
      <div class="header-right">
        <button class="icon-button">
          <img src="/bell.png" alt="Notificaciones">
        </button>
        <button class="icon-button">
          <img src="/chat.png" alt="Chat">
        </button>
        <button class="icon-button profile-button">D</button>
      </div>
    </header>
  `

  const logo = app.querySelector('.pinterest-logo')
  logo.addEventListener('click', onReset)

  const homeLink = app.querySelector('#homeLink')
  homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    onReset()
    setHeaderActive(true)
  })

  const form = app.querySelector('.search-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = form.querySelector('input')
    const query = input.value.trim()
    if (query) {
      onSearch(query)
    }
    input.value = ''
  })
}

export const setHeaderActive = (isActive) => {
  const homeLink = document.getElementById('homeLink')
  if (homeLink) {
    if (isActive) {
      homeLink.classList.add('active')
    } else {
      homeLink.classList.remove('active')
    }
  }
}
