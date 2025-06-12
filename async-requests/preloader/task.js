const loader = document.getElementById('loader');
const items = document.getElementById('items');

const cached = localStorage.getItem('currencyData');
if (cached) {
  renderItems(JSON.parse(cached));
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    const currencies = data.response.Valute;
    localStorage.setItem('currencyData', JSON.stringify(currencies));
    renderItems(currencies);
  })
  .catch(error => {
    console.error('Ошибка загрузки данных:', error);
  });

function renderItems(data) {
  items.innerHTML = '';
  for (let key in data) {
    const valute = data[key];
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
      <div class="item__code">${valute.CharCode}</div>
      <div class="item__value">${valute.Value}</div>
      <div class="item__currency">руб.</div>
    `;
    items.appendChild(item);
  }
  loader.classList.remove('loader_active'); 
}
