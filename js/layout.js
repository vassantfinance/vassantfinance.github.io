/* ========================================
   Vassant Finance — Shared Layout
   Injects nav + footer into every page.
   ======================================== */

(function () {
  var page = location.pathname.split('/').pop() || 'index';

  function link(href, label) {
    var cls = page === href ? ' class="active"' : '';
    return '<li><a href="' + href + '"' + cls + '>' + label + '</a></li>';
  }

  function ext(href, label) {
    return '<li><a href="' + href + '">' + label + '</a></li>';
  }

  /* --- Nav --- */
  var nav = document.createElement('nav');
  nav.innerHTML =
    '<div class="nav-inner">' +
      '<a href="/" class="nav-brand">' +
        '<img src="images/logo-full.svg" alt="Vassant" class="nav-logo-full">' +
      '</a>' +
      '<ul class="nav-links">' +
        link('index', 'Home') +
        link('about.html', 'About') +
        ext('https://docs.vassantfinance.com', 'Docs') +
        ext('https://docs.vassantfinance.com/blog', 'Blog') +
        link('contact', 'Contact') +
        '<li class="nav-links-cta"><a href="index#waitlist-form">Join the Beta</a></li>' +
      '</ul>' +
      '<div class="nav-actions">' +
        '<button class="theme-toggle" aria-label="Toggle theme">' +
          '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
          '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>' +
        '</button>' +
        '<a href="index#waitlist-form" class="nav-cta btn-outline">Join the Beta</a>' +
        '<button class="nav-toggle" aria-label="Toggle menu">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</div>';

  document.body.insertBefore(nav, document.body.firstChild);

  /* --- Footer --- */
  var footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="footer-inner">' +
      '<div class="footer-col footer-col--brand">' +
        '<a href="/" class="footer-logo"><img src="images/logo-full.svg" alt="Vassant" class="nav-logo-full"></a>' +
        '<p class="footer-nav-label">Navigation</p>' +
        '<ul class="footer-nav-links">' +
          '<li><a href="index">Home</a></li>' +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="https://docs.vassantfinance.com">Docs</a></li>' +
          '<li><a href="https://docs.vassantfinance.com/blog">Blog</a></li>' +
          '<li><a href="contact">Contact</a></li>' +
        '</ul>' +
        '<div class="footer-legal">' +
          '<span>&copy; 2026 Vassant Finance, LLC</span>' +
          '<a href="privacy">Privacy Policy</a>' +
          '<a href="terms">Terms &amp; Conditions</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-col footer-col--contact">' +
        '<p class="footer-section-label">Contact us</p>' +
        '<a href="mailto:contact@vassantfinance.com" class="footer-contact-link">contact@vassantfinance.com</a>' +
        '<p class="footer-section-label" style="margin-top:2.5rem">Follow us</p>' +
        '<div class="footer-socials">' +
          '<a href="https://x.com/vassantfinance" class="footer-social-icon" aria-label="X / Twitter" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' +
          '</a>' +
          '<a href="https://instagram.com/vassantfinance" class="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>' +
          '</a>' +
          '<a href="https://linkedin.com/company/vassantfinance" class="footer-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(footer);

  /* --- Legal anchor links --- */
  var linkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  document.querySelectorAll('.legal-content h2[id], .legal-content h3[id]').forEach(function (h) {
    var a = document.createElement('a');
    a.className = 'anchor-link';
    a.href = '#' + h.id;
    a.setAttribute('aria-label', 'Link to this section');
    a.innerHTML = linkIcon;
    h.appendChild(a);
  });

  /* --- Theme toggle --- */
  nav.querySelector('.theme-toggle').addEventListener('click', function () {
    var d = document.documentElement;
    var t = d.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if (t === 'dark') d.setAttribute('data-theme', 'dark');
    else d.removeAttribute('data-theme');
    localStorage.setItem('theme', t);
  });

  /* --- Side-nav overlay --- */
  var overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeSideNav() {
    nav.querySelector('.nav-toggle').classList.remove('open');
    nav.querySelector('.nav-links').classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* --- Hamburger toggle --- */
  nav.querySelector('.nav-toggle').addEventListener('click', function () {
    var isOpen = this.classList.toggle('open');
    nav.querySelector('.nav-links').classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeSideNav);

  /* Close side nav when a link is tapped */
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', closeSideNav);
  });
})();
