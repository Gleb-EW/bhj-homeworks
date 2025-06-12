
let wins = 0;
let losses = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function updateStats() {
  document.getElementById('dead').textContent = wins;
  document.getElementById('lost').textContent = losses;
}

function resetGame() {
  wins = 0;
  losses = 0;
  updateStats();
}

function showMole() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  getHole(randomIndex).classList.add('hole_has-mole');
}

function onHoleClick(event) {
  const hole = event.currentTarget;

  if (hole.classList.contains('hole_has-mole')) {
    wins++;
    if (wins === 10) {
      alert('Победа! Вы убили 10 кротов!');
      resetGame();
    }
  } else {
    losses++;
    if (losses === 5) {
      alert('Игра окончена! Вы проиграли!');
      resetGame();
    }
  }

  updateStats();
  showMole();
}

for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', onHoleClick);
}

showMole();
updateStats();
