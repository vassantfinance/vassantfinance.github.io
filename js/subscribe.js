/* ========================================
   Vassant Finance — Newsletter subscribe form
   Posts the CTA banner's email to vassant-api, which records it as pending
   and sends the double opt-in confirmation through Resend. Nothing else is
   sent to the address until the link in that email is clicked.
   ======================================== */

(function () {
  var form = document.getElementById('cta-form');
  if (!form) return;

  // Local development talks to the API through Caddy, as the app does.
  var local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  var ENDPOINT = (local ? 'http://api.vassantfinance.test' : 'https://api.vassantfinance.com') +
    '/api/v1/newsletter_subscriptions';

  var input = form.querySelector('input[name="email"]');
  var button = form.querySelector('button[type="submit"]');
  var status = document.getElementById('cta-status');
  var dialog = document.getElementById('subscribe-dialog');

  function showStatus(message) {
    status.textContent = message;
    status.hidden = !message;
  }

  function showSent(email) {
    dialog.querySelector('[data-email]').textContent = email;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      // No <dialog> support: say it inline rather than not at all.
      showStatus('Check your inbox. We sent a confirmation link to ' + email + '.');
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    showStatus('');

    var email = input.value.trim();
    button.disabled = true;
    button.textContent = 'Sending…';

    // Form-encoded on purpose: a "simple" CORS request needs no preflight, and
    // the API's rate limiter reads the email from form params.
    fetch(ENDPOINT, { method: 'POST', body: new URLSearchParams(new FormData(form)) })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          showSent(email);
        } else if (response.status === 422) {
          showStatus('That email address doesn’t look right. Check it and try again.');
        } else if (response.status === 429) {
          showStatus('Too many attempts. Please wait a while and try again.');
        } else {
          throw new Error('HTTP ' + response.status);
        }
      })
      .catch(function () {
        showStatus('Something went wrong on our end. Please try again in a moment.');
      })
      .then(function () {
        button.disabled = false;
        button.textContent = 'Subscribe';
      });
  });

  dialog.querySelector('[data-close]').addEventListener('click', function () {
    dialog.close();
  });

  // A click on the backdrop lands on the <dialog> itself, not its contents.
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
