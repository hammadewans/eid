export default class Splash {
  constructor() {
    // ===== Splash full page =====
    this.splash = document.createElement('div');
    this.splash.classList.add(
      'position-fixed', 'top-0', 'start-0', 'w-100', 'h-100',
      'overflow-hidden', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center',
      'text-center', 'cursor-pointer'
    );
    this.splash.style.background = "url('/assets/bg.avif') center/cover no-repeat";
    this.splash.style.zIndex = '9999';

    // ===== Dark overlay for text visibility =====
    const overlay = document.createElement('div');
    overlay.classList.add('position-absolute', 'top-0', 'start-0', 'w-100', 'h-100');
    overlay.style.background = 'rgba(0, 0, 0, 0.6)';
    overlay.style.zIndex = '1';
    this.splash.appendChild(overlay);

    // ===== Floating Islamic elements =====
    for (let i = 0; i < 15; i++) {
      const star = document.createElement('div');
      star.innerHTML = '✨';
      star.style.position = 'absolute';
      star.style.fontSize = `${Math.random() * 20 + 15}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      star.style.animation = `floatStar ${Math.random() * 5 + 3}s infinite alternate`;
      star.style.zIndex = '2';
      this.splash.appendChild(star);
    }

    const crescent = document.createElement('div');
    crescent.innerHTML = '🌙';
    crescent.style.position = 'absolute';
    crescent.style.fontSize = '6rem';
    crescent.style.top = '10%';
    crescent.style.right = '10%';
    crescent.style.color = '#FFD700';
    crescent.style.textShadow = '0 0 15px #FFD700';
    crescent.style.animation = 'floatCrescent 4s infinite alternate ease-in-out';
    crescent.style.zIndex = '2';
    this.splash.appendChild(crescent);

    // ===== Professional text =====
    const heading = document.createElement('h1');
    heading.classList.add('display-1', 'fw-bold');
    heading.style.position = 'relative';
    heading.style.zIndex = '10000';
    heading.style.color = '#FFD700';
    heading.style.textShadow = '2px 2px 10px rgba(0,0,0,0.85)';
    heading.textContent = "Eid-ul-Azha Mubarak"; // updated heading

    const subheading = document.createElement('p');
    subheading.classList.add('fs-3');
    subheading.style.position = 'relative';
    subheading.style.zIndex = '10000';
    subheading.style.color = '#F5F5F5';
    subheading.style.textShadow = '1px 1px 8px rgba(0,0,0,0.75)';
    subheading.textContent = "स्क्रीन पर छूकर मुबारकबाद हांसिल करें";

    this.splash.appendChild(heading);
    this.splash.appendChild(subheading);

    document.body.appendChild(this.splash);

    // ===== Animation styles =====
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatStar {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
        50% { transform: translateY(-20px) rotate(15deg); opacity: 1; }
        100% { transform: translateY(0) rotate(-5deg); opacity: 0.3; }
      }
      @keyframes floatCrescent {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(10deg); }
        100% { transform: translateY(0) rotate(-5deg); }
      }
    `;
    document.head.appendChild(style);
  }

  onClick(callback) {
    this.splash.addEventListener('click', () => {
      this.splash.style.transition = 'opacity 0.5s';
      this.splash.style.opacity = '0';
      setTimeout(() => {
        this.splash.remove();
        callback();
      }, 500);
    });
  }
}