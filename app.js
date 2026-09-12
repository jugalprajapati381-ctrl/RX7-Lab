(() => {
  const menuToggle = document.querySelector('[data-testid="navbar-menu-toggle"]');
  const header = menuToggle?.closest('header');
  const headerInner = menuToggle?.parentElement;
  const navLinks = [
    ['Services', '#services'],
    ['Work', '#work'],
    ['Process', '#process'],
    ['Pricing', '#pricing'],
    ['FAQ', '#faq'],
    ['Contact', '#contact']
  ];

  if (menuToggle && header && headerInner) {
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'hidden border-t border-white/[0.06] bg-[#060913]/95 px-5 py-4 lg:hidden';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    navLinks.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      link.className = 'block py-3 text-sm text-slate-300';
      mobileNav.appendChild(link);
    });
    header.appendChild(mobileNav);
    const closeMenu = () => {
      mobileNav.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    };
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('hidden') === false;
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    mobileNav.addEventListener('click', closeMenu);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  });

  document.querySelectorAll('[data-testid^="faq-question-"]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('[data-testid^="faq-item-"]');
      const answer = item?.querySelector('[data-testid^="faq-answer-"]');
      if (!answer) return;
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
      const icon = button.querySelector('svg');
      icon?.classList.toggle('rotate-180', !isOpen);
    });
  });

  const form = document.querySelector('[data-testid="requirement-form"]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = [...form.querySelectorAll('input, select, textarea')]
        .filter((field) => field.value.trim())
        .map((field) => `${field.id}: ${field.value.trim()}`)
        .join('\n');
      const message = encodeURIComponent(`RX7 Labs project enquiry\n\n${values}`);
      window.open(`https://wa.me/917755045080?text=${message}`, '_blank', 'noopener,noreferrer');
    });
  }

  document.querySelectorAll('[data-testid*="get-started-button"], [data-testid^="pricing-"][data-testid$="-button"]').forEach((button) => {
    button.addEventListener('click', () => document.querySelector('#requirement-form')?.scrollIntoView({ behavior: 'smooth' }));
  });
})();
