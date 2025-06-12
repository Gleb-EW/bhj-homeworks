class Rotator {
  constructor(container) {
    this.container = container;
    this.cases = Array.from(container.querySelectorAll('.rotator__case'));
    this.currentIndex = 0;
    this.timeoutId = null;

    this.showCase(this.currentIndex);
    this.scheduleNext();
  }

  showCase(index) {
    this.cases.forEach((el, i) => {
      el.classList.toggle('rotator__case_active', i === index);
    });

    const color = this.cases[index].dataset.color || '';
    this.container.style.color = color;
  }

  scheduleNext() {
    const speed = parseInt(this.cases[this.currentIndex].dataset.speed) || 1000;

    this.timeoutId = setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cases.length;
      this.showCase(this.currentIndex);
      this.scheduleNext();
    }, speed);
  }

  stop() {
    clearTimeout(this.timeoutId);
  }
}

document.querySelectorAll('.rotator').forEach((el) => {
  new Rotator(el);
});
