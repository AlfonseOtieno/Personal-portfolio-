/* ============================================================
   js/contact.js — Contact form logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const sendBtn = document.getElementById('send-btn');

  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      const name  = document.getElementById('c-name').value.trim();
      const email = document.getElementById('c-email').value.trim();
      const msg   = document.getElementById('c-msg').value.trim();

      if (!name || !email || !msg) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      if (form)    form.style.display    = 'none';
      if (success) success.style.display = 'block';
    });
  }

});
