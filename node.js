window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // adjust scroll threshold
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});