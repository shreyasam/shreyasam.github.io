(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.site-nav__links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    links.classList.toggle('is-open', !isOpen);
  });

  links.addEventListener('click', function (event) {
    if (event.target.tagName !== 'A') return;
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  });
})();

