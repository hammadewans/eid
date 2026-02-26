import Splash from './Splash.js';
import Content from './Content.js';

const content = new Content();
const splash = new Splash();

// Create audio
const music = new Audio('assets/eid-mubarak.mp3'); // <-- put your music file path here
music.loop = true; // if you want it to loop

// Show content + play music after splash click
splash.onClick(() => {
  const hash = window.location.hash;
  let name = 'Guest';
  if (hash.startsWith('#/')) {
    name = decodeURIComponent(hash.slice(2)); 
  }
  content.show(name);

  // Play music
  music.play().catch((err) => {
    console.warn('Music play failed:', err);
    // Browsers require user interaction to play audio, which should be satisfied by splash click
  });
});

// Update content on hash change
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  let name = 'Guest';
  if (hash.startsWith('#/')) {
    name = decodeURIComponent(hash.slice(2)); 
  }
  content.show(name);
});