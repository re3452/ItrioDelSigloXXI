const btn = document.getElementById('hamburger');
const ul  = document.querySelector('nav ul');
btn.addEventListener('click', () => ul.classList.toggle('open'));