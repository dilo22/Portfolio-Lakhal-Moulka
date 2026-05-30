const reveals = document.querySelectorAll('.reveal');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function revealOnScroll() {
  const trigger = window.innerHeight - 90;
  reveals.forEach((element) => {
    if (element.getBoundingClientRect().top < trigger) {
      element.classList.add('active');
    }
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
