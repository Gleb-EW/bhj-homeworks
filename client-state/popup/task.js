const modal = document.getElementById('subscribe-modal');
const closeBtn = modal.querySelector('.modal__close');
const COOKIE_NAME = 'subscribeModalClosed';

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
}

if (!getCookie(COOKIE_NAME)) {
  modal.classList.add('modal_active');
}

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  setCookie(COOKIE_NAME, 'true', 365);
});
