const logo = document.querySelector('.logo');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.menu');

logo.textContent = 'Aovo RuStore';
mobileMenuButton.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
});