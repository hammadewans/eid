export default class Splash {
  constructor() {
    this.splash = document.createElement('div');
    this.splash.classList.add(
      'position-fixed','top-0','start-0','w-100','h-100',
      'overflow-hidden','d-flex','flex-column',
      'justify-content-center','align-items-center',
      'text-center','cursor-pointer'
    );
    this.splash.style.background = "url('/assets/bg.webp') center/cover no-repeat";
    this.splash.style.zIndex = '9999';

    // ===== Animated Background =====
    const bgAnimation = document.createElement('div');
    bgAnimation.style.position = 'absolute';
    bgAnimation.style.top = '0';
    bgAnimation.style.left = '0';
    bgAnimation.style.width = '100%';
    bgAnimation.style.height = '100%';
    bgAnimation.style.overflow = 'hidden';
    bgAnimation.style.zIndex = '1';
    this.splash.appendChild(bgAnimation);

    const symbols = ['🌙','⭐','✨','💖','❤️'];

    for (let i = 0; i < 25; i++) {
      const item = document.createElement('div');
      item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      item.style.position = 'absolute';
      item.style.fontSize = (20 + Math.random() * 40) + 'px';
      item.style.left = Math.random() * 100 + '%';
      item.style.top = Math.random() * 100 + '%';
      item.style.animation = `
        floatAnim ${6 + Math.random() * 6}s infinite ease-in-out,
        blinkAnim ${2 + Math.random() * 3}s infinite alternate
      `;
      bgAnimation.appendChild(item);
    }

    // ===== Heading Container =====
    const heading = document.createElement('div');
    heading.style.position = 'relative';
    heading.style.zIndex = '10000';
    heading.style.textAlign = 'center';
    heading.style.fontWeight = 'bold';

    // ===== SAME ANIMATION FOR BOTH =====
    const commonAnimation = 'textMove 3s infinite ease-in-out';

    // ===== Eid ul Fitr =====
    const line1 = document.createElement('div');
    line1.textContent = "Eid ul Fitr";
    line1.style.fontSize = '3.5rem';
    line1.style.color = '#00ff40';
    line1.style.textShadow = `
      0 0 15px #00ff40,
      0 0 30px #00ff40,
      0 0 60px #00ff40,
      0 0 100px #00ff40
    `;
    line1.style.animation = commonAnimation;

    // ===== Mubarak =====
    const line2 = document.createElement('div');
    line2.textContent = "Mubarak";
    line2.style.fontSize = '5rem';
    line2.style.color = '#00FFCC';
    line2.style.marginTop = '10px';
    line2.style.textShadow = `
      0 0 20px #00FFCC,
      0 0 40px #00FFCC,
      0 0 80px #00FFCC
    `;
    line2.style.animation = commonAnimation;

    heading.appendChild(line1);
    heading.appendChild(line2);
    this.splash.appendChild(heading);

    // ===== Gesture =====
    const gestureBox = document.createElement('div');
    gestureBox.style.position = 'relative';
    gestureBox.style.marginTop = '40px';
    gestureBox.style.zIndex = '10000';
    gestureBox.style.height = '150px';
    gestureBox.style.display = 'flex';
    gestureBox.style.justifyContent = 'center';
    gestureBox.style.alignItems = 'flex-start';

    const hand = document.createElement('div');
    hand.innerHTML = '👆';
    hand.style.fontSize = '6rem';
    hand.style.animation = 'tapHand 1.5s infinite ease-in-out';

    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.top = '15px';
    ripple.style.left = '50%';
    ripple.style.transform = 'translateX(-50%)';
    ripple.style.width = '25px';
    ripple.style.height = '25px';
    ripple.style.border = '3px solid #ffffff';
    ripple.style.borderRadius = '50%';
    ripple.style.opacity = '0';
    ripple.style.animation = 'rippleEffect 1.5s infinite ease-out';

    gestureBox.appendChild(hand);
    gestureBox.appendChild(ripple);
    this.splash.appendChild(gestureBox);

    document.body.appendChild(this.splash);

    // ===== Animations =====
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes tapHand {
        0% { transform: translateY(0); }
        40% { transform: translateY(40px); }
        60% { transform: translateY(40px); }
        100% { transform: translateY(0); }
      }

      @keyframes rippleEffect {
        0% { transform: translateX(-50%) scale(0.3); opacity: 0.8; }
        70% { transform: translateX(-50%) scale(4); opacity: 0.2; }
        100% { transform: translateX(-50%) scale(5); opacity: 0; }
      }

      @keyframes floatAnim {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(15deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }

      @keyframes blinkAnim {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
      }

      /* SAME animation for both texts */
      @keyframes textMove {
        0% { transform: translateY(0px); }
        25% { transform: translateY(-12px); }
        50% { transform: translateY(0px); }
        75% { transform: translateY(12px); }
        100% { transform: translateY(0px); }
      }
    `;
    document.head.appendChild(style);
  }

  onClick(callback) {
    this.splash.addEventListener('click', () => {
      this.splash.style.transition = 'opacity 0.6s';
      this.splash.style.opacity = '0';
      setTimeout(() => {
        this.splash.remove();
        callback();
      }, 600);
    });
  }
}
