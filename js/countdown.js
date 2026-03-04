// countdown.js
export function createCountdown(targetDateStr, container) {
  // Clear previous content
  container.innerHTML = '';

  // Create boxes
  const units = ['Days', 'Hrs', 'Mins', 'Sec'];
  const boxes = {};

  const countdownContainer = document.createElement('div');
  countdownContainer.style.display = 'flex';
  countdownContainer.style.justifyContent = 'center';
  countdownContainer.style.gap = '12px';

  units.forEach(unit => {
    const box = document.createElement('div');
    box.className = 'countdown-box';
    box.innerHTML = `<span class="number">0</span><span class="label">${unit}</span>`;
    countdownContainer.appendChild(box);
    boxes[unit] = box.querySelector('.number');
  });

  container.appendChild(countdownContainer);

  const targetTime = new Date(targetDateStr).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(timer);
      Object.values(boxes).forEach(box => box.textContent = '0');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    boxes['Days'].textContent = days;
    boxes['Hrs'].textContent = hours;
    boxes['Mins'].textContent = minutes;
    boxes['Sec'].textContent = seconds;
  }, 1000);
}