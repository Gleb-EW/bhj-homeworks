document.addEventListener('DOMContentLoaded', () => {
  const tooltipElements = document.querySelectorAll('.has-tooltip');

  let activeTooltip = null;

  tooltipElements.forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();

      if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
      }

      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip tooltip_active';
      tooltip.textContent = el.getAttribute('title') || '';

      const position = el.dataset.position || 'bottom';

      document.body.appendChild(tooltip);

      const rect = el.getBoundingClientRect();

      let top, left;

      switch (position) {
        case 'top':
          top = rect.top - tooltip.offsetHeight;
          left = rect.left + (rect.width - tooltip.offsetWidth) / 2;
          break;
        case 'left':
          top = rect.top + (rect.height - tooltip.offsetHeight) / 2;
          left = rect.left - tooltip.offsetWidth;
          break;
        case 'right':
          top = rect.top + (rect.height - tooltip.offsetHeight) / 2;
          left = rect.right;
          break;
        case 'bottom':
        default:
          top = rect.bottom;
          left = rect.left + (rect.width - tooltip.offsetWidth) / 2;
          break;
      }

      tooltip.style.position = 'fixed';
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;

      activeTooltip = tooltip;
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.classList.contains('has-tooltip') && activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }
  });
});
