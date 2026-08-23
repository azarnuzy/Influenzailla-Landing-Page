document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Controls
  const menuOpenBtns = document.querySelectorAll('.js-menu-open');
  const menuCloseBtn = document.querySelector('.js-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-navigation-link');

  if (menuOpenBtns.length && mobileMenu) {
    menuOpenBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        mobileMenu.classList.add('is-open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('is-menu-open');
      });
    });
  }

  if (menuCloseBtn && mobileMenu) {
    menuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuOpenBtns.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
      document.body.classList.remove('is-menu-open');
    });
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu) {
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuOpenBtns.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
        document.body.classList.remove('is-menu-open');
      }
    });
  });

  // Expertise Section Tabbing Logic
  const tabButtons = document.querySelectorAll('.expertise-tab-btn');
  const tabPanels = document.querySelectorAll('.expertise-tab-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button states
      tabButtons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Update panel states
      tabPanels.forEach((panel) => {
        const isTarget = panel.getAttribute('data-panel') === targetTab;
        panel.classList.toggle('is-active', isTarget);
        panel.hidden = !isTarget;
      });
    });
  });

  // Projects Section Slick Slider Initialization
  if (typeof $ !== 'undefined' && $.fn.slick) {
    $('.projects-slider').slick({
      dots: true,
      arrows: true,
      prevArrow: $('.projects-nav-prev'),
      nextArrow: $('.projects-nav-next'),
      appendDots: $('.projects-nav-dots'),
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)'
    });
  }
});
