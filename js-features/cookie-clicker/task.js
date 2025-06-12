const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicked = 0;

cookie.onclick = () => {
  clicked += 1;
  counter.textContent = clicked;

  if (cookie.width === 200) {
    cookie.width = 180;
  } else {
    cookie.width = 200;
  }
};
