/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/contact.js — Contact form validation + success state
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  var sendBtn  = document.getElementById('send-btn');
  if (!sendBtn) return;

  sendBtn.addEventListener('click', function () {
    var nameEl  = document.getElementById('c-name');
    var emailEl = document.getElementById('c-email');
    var msgEl   = document.getElementById('c-msg');

    var name  = nameEl ? nameEl.value.trim() : '';
    var email = emailEl ? emailEl.value.trim() : '';
    var msg   = msgEl ? msgEl.value.trim() : '';

    /* Clear previous errors */
    clearErrors();

    var valid = true;

    if (!name) {
      showError(nameEl, 'Please enter your name.');
      valid = false;
    }

    if (!email) {
      showError(emailEl, 'Please enter your email address.');
      valid = false;
    } else if (!isValidEmail(email)) {
      showError(emailEl, 'Please enter a valid email address.');
      valid = false;
    }

    if (!msg) {
      showError(msgEl, 'Please enter a message.');
      valid = false;
    }

    if (!valid) return;

    /* Construct mailto link and open it */
    var subject = encodeURIComponent('Message from ' + name + ' via Portfolio');
    var body    = encodeURIComponent(msg + '\n\nFrom: ' + name + ' <' + email + '>');
    window.location.href = 'mailto:otienoalfonse2@gmail.com?subject=' + subject + '&body=' + body;

    /* Show success state */
    var formEl    = document.getElementById('contact-form');
    var successEl = document.getElementById('form-success');
    if (formEl) formEl.style.display = 'none';
    if (successEl) successEl.style.display = 'flex';
  });
});

/* ── HELPERS ─────────────────────────────────────────────────── */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(el, message) {
  if (!el) return;
  el.classList.add('input-error');
  var err = document.createElement('span');
  err.className = 'field-error';
  err.textContent = message;
  el.parentNode.appendChild(err);
}

function clearErrors() {
  document.querySelectorAll('.input-error').forEach(function (el) {
    el.classList.remove('input-error');
  });
  document.querySelectorAll('.field-error').forEach(function (el) {
    el.parentNode.removeChild(el);
  });
}
