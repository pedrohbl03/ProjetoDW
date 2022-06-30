const hamburgerButton = document.querySelector('.mobile-btn')

hamburgerButton.addEventListener('click', (e) => {
  e.preventDefault();
  const menu = document.querySelector('.navbar')
  menu.classList.toggle('active')
})