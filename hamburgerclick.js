const hamburger = document.getElementsByClassName('hamburger')[0]
const list = document.getElementsByClassName('list')[0]

hamburger.addEventListener('click', () => {
  list.classList.toggle('active');
  
})