const rost = document.querySelector('#rost')

rost.addEventListener('submit', (event) => {
  event.preventDefault()

  const { rost } = event.target

  alert(`Ваш рост ${rost.value}`)
})