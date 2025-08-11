// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('.nav__link') && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Optional: sticky header shadow on scroll (nice touch)
const topbar = document.querySelector('.topbar');
if (topbar) {
  const addShadow = () => {
    if (window.scrollY > 6) topbar.style.boxShadow = '0 4px 18px rgba(0,0,0,.06)';
    else topbar.style.boxShadow = 'none';
  };
  addShadow();
  window.addEventListener('scroll', addShadow);
}
