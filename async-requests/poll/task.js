const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    const pollId = data.id;
    const title = data.data.title;
    const answers = data.data.answers;

    pollTitle.textContent = title;

    answers.forEach(answer => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');

      });
      pollAnswers.appendChild(button);
    });
  })
  .catch(error => {
    console.error('Ошибка загрузки опроса:', error);
  });
