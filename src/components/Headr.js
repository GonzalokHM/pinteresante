export const createHeader = (onSearch, onReset) => {
  const header = document.createElement('header')
  header.className = 'header'

  const logo = document.createElement('h1')
  logo.textContent = 'Pinterest Replica'
  logo.className = 'logo'
  logo.style.cursor = 'pointer'
  logo.addEventListener('click', onReset)
  header.appendChild(logo)

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

  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Buscar imágenes...'
  form.appendChild(input)

  const button = document.createElement('button')
  button.type = 'submit'
  button.textContent = 'Buscar'
  form.appendChild(button)

  header.appendChild(form)
  return header
}
