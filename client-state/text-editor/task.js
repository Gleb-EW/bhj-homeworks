const editor = document.getElementById('editor');
const STORAGE_KEY = 'simple-text-editor-content';

window.addEventListener('DOMContentLoaded', () => {
  const savedText = localStorage.getItem(STORAGE_KEY);
  if (savedText !== null) {
    editor.value = savedText;
  }
});

editor.addEventListener('input', () => {
  localStorage.setItem(STORAGE_KEY, editor.value);
});
