/* ========================================
   Vassant Finance — Shared Layout
   Injects nav + footer into every page.
   ======================================== */

(function () {
  var page = location.pathname.split('/').pop() || 'index.html';

  function link(href, label) {
    var cls = page === href ? ' class="active"' : '';
    return '<li><a href="' + href + '"' + cls + '>' + label + '</a></li>';
  }

  /* --- Nav --- */
  var nav = document.createElement('nav');
  nav.innerHTML =
    '<div class="nav-inner">' +
      '<a href="index.html" class="nav-brand">' +
        '<img src="images/icon.png" alt="Vassant">' +
        '<span>vassant</span>' +
      '</a>' +
      '<ul class="nav-links">' +
        link('index.html', 'Home') +
        link('about.html', 'About') +
        link('contact.html', 'Contact') +
      '</ul>' +
      '<div class="nav-actions">' +
        '<button class="theme-toggle" aria-label="Toggle theme">' +
          '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
          '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>' +
        '</button>' +
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
      '&copy; 2026 Vassant Finance, LLC' +
      '<span class="footer-sep">&middot;</span>' +
      '<a href="privacy.html">Privacy Policy</a>' +
      '<span class="footer-sep">&middot;</span>' +
      '<a href="terms.html">Terms &amp; Conditions</a>' +
    '</div>';

  document.body.appendChild(footer);

  /* --- Theme toggle --- */
  nav.querySelector('.theme-toggle').addEventListener('click', function () {
    var d = document.documentElement;
    var t = d.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (t === 'light') d.setAttribute('data-theme', 'light');
    else d.removeAttribute('data-theme');
    localStorage.setItem('theme', t);
  });

  /* --- Hamburger toggle --- */
  nav.querySelector('.nav-toggle').addEventListener('click', function () {
    this.classList.toggle('open');
    nav.querySelector('.nav-links').classList.toggle('open');
  });
})();
