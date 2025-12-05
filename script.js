// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Optional: close menu after clicking a link (nice on mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
