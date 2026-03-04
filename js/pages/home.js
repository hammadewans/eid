import { createCountdown } from '../countdown.js';

export default function Home(container, name) {
  const eidContainer = document.createElement('div');
  eidContainer.id = 'eid-container';

  const moon = document.createElement('div');
  moon.id = 'moon';
  eidContainer.appendChild(moon);

  const stars = document.createElement('div');
  stars.className = 'stars';
  eidContainer.appendChild(stars);

  const content = document.createElement('div');
  content.className = 'content';

  const line1 = document.createElement('p');
  line1.textContent = 'Aapko aur aapki poori family ko';
  line1.className = 'line';
  content.appendChild(line1);

  const line2 = document.createElement('p');
  line2.textContent = name;
  line2.className = 'name-line';
  content.appendChild(line2);

  const line3 = document.createElement('p');
  line3.textContent = 'ki taraf se';
  line3.className = 'line';
  content.appendChild(line3);

  // ---------------- Countdown container ----------------
  const countdownDiv = document.createElement('div');
  countdownDiv.id = 'countdown-container';
  content.appendChild(countdownDiv);

  // Use separate countdown function
  createCountdown("2026-03-21T00:00:00+05:30", countdownDiv);

  // ---------------- "pehle" word after countdown ----------------
  const pehleLine = document.createElement('p');
  pehleLine.textContent = 'pehle';
  pehleLine.className = 'line'; // same styling as other lines
  content.appendChild(pehleLine);

  const line4 = document.createElement('p');
  line4.textContent = 'Eid ul Fitr';
  line4.className = 'eid-line';
  content.appendChild(line4);

  const line5 = document.createElement('p');
  line5.textContent = 'ki bahut bahut dili mubarakbad!';
  line5.className = 'line';
  content.appendChild(line5);

  eidContainer.appendChild(content);
  container.appendChild(eidContainer);
}
