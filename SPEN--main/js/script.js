document.addEventListener('DOMContentLoaded', function () {
  initMobileNavigation();
  initTabNavigation();
  initCardAnimation();
  updateFooterYear();
  hidePreloader();
});

function initMobileNavigation() {
  const headers = document.querySelectorAll('header');
  if (!headers.length) return;

  const closeHeaderMenu = (header) => {
    const navList = header.querySelector('nav ul');
    const toggle = header.querySelector('.nav-toggle');
    if (navList) navList.classList.remove('showNav');
    header.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  const closeAllMenus = () => {
    headers.forEach((header) => closeHeaderMenu(header));
  };

  headers.forEach((header, index) => {
    const toggle = header.querySelector('.nav-toggle');
    const nav = header.querySelector('nav');
    const navList = nav ? nav.querySelector('ul') : null;

    if (!toggle || !nav || !navList) return;

    if (!nav.id) {
      nav.id = `navbar-${index + 1}`;
    }

    toggle.setAttribute('aria-controls', nav.id);
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const shouldOpen = !header.classList.contains('nav-open');
      closeAllMenus();

      if (shouldOpen) {
        header.classList.add('nav-open');
        navList.classList.add('showNav');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    navList.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        closeHeaderMenu(header);
      });
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('header')) {
      closeAllMenus();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllMenus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeAllMenus();
    }
  });
}

function initTabNavigation() {
  const tabLinks = document.querySelectorAll('.tab-link');
  if (!tabLinks.length) return;

  tabLinks.forEach((link) => {
    link.addEventListener('click', function () {
      tabLinks.forEach((l) => l.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach((t) => t.classList.remove('active'));
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      const target = document.getElementById(tabId);
      if (target) target.classList.add('active');
    });
  });
}

function initCardAnimation() {
  const cards = document.querySelectorAll('.interests-card');
  if (!cards.length) return;
  cards.forEach((card, idx) => {
    setTimeout(() => card.classList.add('animate'), 80 + idx * 80);
  });
}

function updateFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

function hidePreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('loaded');
    setTimeout(() => preloader.remove(), 500);
  }, 250);
}
