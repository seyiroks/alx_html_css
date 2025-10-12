  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });