/* ========================================
   Vassant Finance — Shared Layout
   Injects nav + footer into every page.
   ======================================== */

(function () {
  var page = location.pathname.split('/').pop() || 'index';

  /* ========================================
     Google Analytics (GA4) + Consent Mode v2
     Shares the `va_consent` cookie with the docs site across
     `.vassantfinance.com`, so the banner is answered once for both.
     ======================================== */
  var GA_ID = 'G-BNNRDYCHTJ';
  var CONSENT_COOKIE = 'va_consent';
  var CONSENT_MAX_AGE = 60 * 60 * 24 * 180; // 180 days
  var PARENT_DOMAIN = 'vassantfinance.com';

  function readConsent() {
    var match = document.cookie.match(/(?:^|;\s*)va_consent=(granted|denied)(?:;|$)/);
    return match ? match[1] : null;
  }

  function writeConsent(value) {
    // Scope the cookie to the parent domain on real vassantfinance.com hosts so
    // the marketing and docs sites share one decision. On localhost the Domain
    // attribute would be rejected, so omit it in dev.
    var host = location.hostname;
    var onProd = host === PARENT_DOMAIN || host.endsWith('.' + PARENT_DOMAIN);
    var domain = onProd ? '; Domain=.' + PARENT_DOMAIN : '';
    var secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = CONSENT_COOKIE + '=' + value + '; Path=/; Max-Age=' + CONSENT_MAX_AGE + '; SameSite=Lax' + domain + secure;
  }

  function updateGtagConsent(value) {
    gtag('consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
  }

  // Bootstrap gtag with a consent default BEFORE loading gtag.js. Analytics
  // stays denied until the visitor grants it (or a prior `granted` cookie from
  // either subdomain is already present).
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  var vaGranted = readConsent() === 'granted';
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: vaGranted ? 'granted' : 'denied',
  });
  gtag('config', GA_ID);

  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(gtagScript);

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
        link('index.html', 'Home') +
        link('about.html', 'About') +
        ext('https://docs.vassantfinance.com', 'Docs') +
        ext('https://docs.vassantfinance.com/blog', 'Blog') +
        link('contact.html', 'Contact') +
      '</ul>' +
      '<div class="nav-actions">' +
        '<a href="index.html#waitlist-form" class="nav-download-app">Download the App</a>' +
        '<a href="index.html#waitlist-form" class="nav-cta btn-outline">Sign up</a>' +
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
          '<li><a href="index.html">Home</a></li>' +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="https://docs.vassantfinance.com">Docs</a></li>' +
          '<li><a href="https://docs.vassantfinance.com/blog">Blog</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
        '</ul>' +
        '<div class="footer-legal">' +
          '<span>&copy; 2026 Vassant Finance, LLC</span>' +
          '<a href="privacy">Privacy Policy</a>' +
          '<a href="terms">Terms &amp; Conditions</a>' +
          // Google Play requires a publicly reachable account-deletion page for
          // any app with sign-up. Linking it here keeps it discoverable rather
          // than existing only as a URL pasted into Play Console.
          '<a href="delete-account">Delete Account</a>' +
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
          '<a href="https://www.linkedin.com/company/vassant/" class="footer-social-icon" aria-label="LinkedIn" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.appendChild(footer);

  /* --- Consent banner --- */
  // Show only if no prior decision is stored (on this site or the docs site).
  if (readConsent() === null) {
    var banner = document.createElement('div');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<p class="consent-banner-text">We use Google Analytics to understand how the site is used.<br>' +
      'No analytics cookies are set until you accept.</p>' +
      '<div class="consent-banner-actions">' +
        '<button type="button" class="btn-secondary consent-decline">Decline</button>' +
        '<button type="button" class="btn-primary consent-accept">Accept</button>' +
      '</div>';
    document.body.appendChild(banner);

    function decide(value) {
      writeConsent(value);
      updateGtagConsent(value);
      banner.remove();
    }
    banner.querySelector('.consent-accept').addEventListener('click', function () { decide('granted'); });
    banner.querySelector('.consent-decline').addEventListener('click', function () { decide('denied'); });
  }

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
