document.querySelectorAll('.tab__navigation').forEach(tabNav => {
  const tabs = tabNav.querySelectorAll('.tab');
  const tabContents = tabNav.nextElementSibling.querySelectorAll('.tab__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab_active'));
      tabContents.forEach(c => c.classList.remove('tab__content_active'));
      tab.classList.add('tab_active');
      tabContents[index].classList.add('tab__content_active');
    });
  });
});
