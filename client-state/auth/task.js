document.addEventListener('DOMContentLoaded', () => {
  const signin = document.getElementById('signin');
  const signinForm = document.getElementById('signin__form');
  const welcome = document.getElementById('welcome');
  const userIdSpan = document.getElementById('user_id');

  function showWelcome(userId) {
    userIdSpan.textContent = userId;
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
  }

  const storedUserId = localStorage.getItem('user_id');
  if (storedUserId) {
    showWelcome(storedUserId);
  } else {
    signin.classList.add('signin_active');
  }

  signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);
    const data = new URLSearchParams(formData);

    fetch(signinForm.action, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        localStorage.setItem('user_id', result.user_id);
        showWelcome(result.user_id);
      } else {
        alert('Неверный логин/пароль');
      }
    })
    .catch(() => {
      alert('Ошибка сети. Попробуйте ещё раз.');
    });
  });
});
