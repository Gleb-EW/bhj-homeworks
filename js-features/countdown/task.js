
const timerElem = document.getElementById('timer');
let time = parseInt(timerElem.textContent);

const intervalId = setInterval(() => {
  if (time > 0) {
    time--;
    timerElem.textContent = time; 
  } else {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);
