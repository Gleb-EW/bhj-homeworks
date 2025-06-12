const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      const percent = event.loaded / event.total;
      progress.value = percent;
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Файл успешно загружен!');
      progress.value = 1.0;
    } else {
      alert('Ошибка загрузки');
    }
  };

  xhr.onerror = function () {
    alert('Произошла ошибка при отправке запроса.');
  };

  xhr.send(formData);
});
