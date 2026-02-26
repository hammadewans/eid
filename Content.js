import Countdown from './countdown.js';

export default class Content {
  constructor() {
    // ===== Reset styles =====
    const resetStyles = document.createElement('style');
    resetStyles.innerHTML = `
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        background: black;
      }
      #app {
        height: 100%;
        width: 100%;
      }
    `;
    document.head.appendChild(resetStyles);

    // ===== Main container =====
    this.container = document.createElement('div');
    this.container.id = 'content';
    this.container.style.display = 'none';
    this.container.style.flexDirection = 'column';
    this.container.style.alignItems = 'center';
    this.container.style.justifyContent = 'center';
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    this.container.style.textAlign = 'center';
    this.container.style.position = 'relative';
    this.container.style.overflow = 'hidden';
    this.container.style.background = `url('/assets/bg.webp') center/cover no-repeat`;
    this.container.style.boxSizing = 'border-box';
    document.getElementById('app').appendChild(this.container);

    this.countdown = new Countdown('March 21, 2026 00:00:00');

    // ===== Floating emojis =====
    const emojiList = ['🌙', '✨', '💖', '⭐', '💫', '🌟', '❤️'];
    for (let i = 0; i < 80; i++) {
      const emoji = document.createElement('div');
      emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
      emoji.style.position = 'absolute';
      emoji.style.fontSize = `${Math.random() * 30 + 15}px`;
      emoji.style.top = `${Math.random() * 100}%`;
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.opacity = Math.random() * 0.7 + 0.3;
      emoji.style.pointerEvents = 'none';
      emoji.style.animation = `floatEmoji ${Math.random() * 5 + 3}s infinite alternate, blinkEmoji ${Math.random() * 2 + 1}s infinite alternate`;
      emoji.style.zIndex = '1';
      this.container.appendChild(emoji);
    }

    // ===== Floating stars =====
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.innerHTML = '✨';
      star.style.position = 'absolute';
      star.style.fontSize = `${Math.random() * 20 + 10}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      star.style.color = '#fff';
      star.style.animation = `floatStar ${Math.random() * 5 + 3}s infinite alternate`;
      star.style.zIndex = '1';
      this.container.appendChild(star);
    }

    // ===== Crescent moon =====
    const crescent = document.createElement('div');
    crescent.innerHTML = '🌙';
    crescent.style.position = 'absolute';
    crescent.style.fontSize = '6rem';
    crescent.style.top = '10%';
    crescent.style.right = '10%';
    crescent.style.color = '#fff';
    crescent.style.textShadow = '0 0 15px #fff';
    crescent.style.animation = 'floatCrescent 4s infinite alternate ease-in-out';
    crescent.style.zIndex = '1';
    this.container.appendChild(crescent);

    // ===== Keyframes =====
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
      @keyframes floatEmoji {
        0% { transform: translateY(0) rotate(0deg);}
        50% { transform: translateY(-20px) rotate(10deg);}
        100% { transform: translateY(0) rotate(-10deg);}
      }
      @keyframes blinkEmoji {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
      }
      @keyframes floatBox {
        0% { transform: translateY(0px); box-shadow: 0 0 10px rgba(255,255,255,0.4);}
        50% { transform: translateY(-8px); box-shadow: 0 0 20px rgba(255,255,255,0.8);}
        100% { transform: translateY(0px); box-shadow: 0 0 10px rgba(255,255,255,0.4);}
      }
      .animated-box { animation: floatBox 3s infinite ease-in-out; }
    `;
    document.head.appendChild(style);
  }

  show(name = 'अतिथि') {
    this.container.style.display = 'flex';

    const createLine = (text, size = '22px', bold = false, color = '#fff') => {
      const el = document.createElement('div');
      el.style.fontSize = size;
      el.style.fontWeight = bold ? 'bold' : 'normal';
      el.style.color = color;
      el.style.margin = '8px';
      el.style.padding = '10px 15px';
      el.style.border = `2px solid rgba(255,255,255,0.5)`;
      el.style.borderRadius = '12px';
      el.style.background = 'rgba(255,255,255,0.1)';
      el.style.backdropFilter = 'blur(8px)';
      el.style.position = 'relative';
      el.style.zIndex = '10';
      el.classList.add('animated-box');
      this.container.appendChild(el);
      el.textContent = text;
      return el;
    };

    createLine('आपको और आपके परिवार को', '26px', true, '#ff0000');
    const nameEl = createLine(name, '32px', true, '#00ff15');
    createLine('की तरफ़ से', '24px', true, '#00f7ff');

    nameEl.style.display = 'inline-block';
    nameEl.style.transformStyle = 'preserve-3d';
    nameEl.style.transition = 'transform 0.1s';
    let angle = 0;
    const floatAnimation = () => {
      angle += 0.02;
      nameEl.style.transform = `rotateY(${Math.sin(angle)*15}deg) translateY(${Math.sin(angle*2)*5}px)`;
      requestAnimationFrame(floatAnimation);
    };
    floatAnimation();

    // ===== Countdown =====
    const countdownContainer = document.createElement('div');
    countdownContainer.style.display = 'flex';
    countdownContainer.style.gap = '10px';
    countdownContainer.style.margin = '10px 0';
    countdownContainer.style.position = 'relative';
    countdownContainer.style.zIndex = '10';
    this.container.appendChild(countdownContainer);

    this.daysEl = this._createCountdownBox('दिन', countdownContainer);
    this.hoursEl = this._createCountdownBox('घंटे', countdownContainer);
    this.minutesEl = this._createCountdownBox('मिनट', countdownContainer);
    this.secondsEl = this._createCountdownBox('सेकंड', countdownContainer);

    createLine('पहले', '24px', true, '#ff0095');
    createLine('ईद उल-अज़हा', '28px', true, '#ffee00');
    createLine('की बहुत-बहुत दिली मुबारकबाद', '24px', true, '#00ffaa');

    // ===== Horizontal sliding single Dua boxes =====
    const duaContainer = document.createElement('div');
    duaContainer.style.position = 'relative';
    duaContainer.style.height = '60px';
    duaContainer.style.overflow = 'hidden';
    duaContainer.style.marginTop = '20px';
    duaContainer.style.width = '100%';
    this.container.appendChild(duaContainer);

    const duas = [
      'ईद की खुशियाँ आप पर हमेशा बनी रहें',
      'आपका घर खुशियों से भरा रहे',
      'खुदा आपके जीवन में सुख और समृद्धि लाए',
      'आप और आपके परिवार सुरक्षित और स्वस्थ रहें',
      'ईद का त्योहार आपके लिए ढेर सारी खुशियाँ लाए'
    ];

    let currentIndex = 0;
    let box = this._createDuaBox(duas[currentIndex], duaContainer);
    const speed = 1; // pixels per frame

    const scrollSingleBox = () => {
      let left = parseFloat(box.style.left);
      left -= speed;
      box.style.left = `${left}px`;
      if (left + box.offsetWidth < 0) {
        duaContainer.removeChild(box);
        currentIndex = (currentIndex + 1) % duas.length;
        box = this._createDuaBox(duas[currentIndex], duaContainer);
      }
      requestAnimationFrame(scrollSingleBox);
    };
    scrollSingleBox();

    // ===== Countdown update =====
    this.countdown.start(({ days, hours, minutes, seconds }) => {
      this.daysEl.textContent = days;
      this.hoursEl.textContent = hours;
      this.minutesEl.textContent = minutes;
      this.secondsEl.textContent = seconds;
    });

    // ===== Share input (WhatsApp) =====
    const shareContainer = document.createElement('div');
    shareContainer.style.marginTop = '30px';
    shareContainer.style.display = 'flex';
    shareContainer.style.justifyContent = 'center';
    shareContainer.style.alignItems = 'center';
    shareContainer.style.gap = '10px';
    shareContainer.style.flexWrap = 'wrap';
    shareContainer.style.zIndex = '10';
    this.container.appendChild(shareContainer);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'अपना नाम डालें और भेजें';
    nameInput.style.padding = '10px 15px';
    nameInput.style.borderRadius = '12px';
    nameInput.style.border = '2px solid rgba(255,255,255,0.5)';
    nameInput.style.fontSize = '16px';
    nameInput.style.outline = 'none';
    nameInput.style.backdropFilter = 'blur(5px)';
    nameInput.style.background = 'rgba(255,255,255,0.1)';
    nameInput.style.color = '#fff';
    shareContainer.appendChild(nameInput);

    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share on WhatsApp';
    shareButton.style.padding = '10px 20px';
    shareButton.style.borderRadius = '12px';
    shareButton.style.border = '2px solid #fff';
    shareButton.style.background = 'rgba(0,0,0,0.6)';
    shareButton.style.color = '#fff';
    shareButton.style.cursor = 'pointer';
    shareButton.style.fontWeight = 'bold';
    shareButton.style.transition = '0.3s';
    shareButton.onmouseenter = () => { shareButton.style.background = '#fff'; shareButton.style.color = '#000'; };
    shareButton.onmouseleave = () => { shareButton.style.background = 'rgba(0,0,0,0.6)'; shareButton.style.color = '#fff'; };
    shareContainer.appendChild(shareButton);

    shareButton.addEventListener('click', () => {
      const userName = encodeURIComponent(nameInput.value.trim());
      if (userName) {
        const shareLink = `https://eid-mtpv.onrender.com/#/${userName}`;
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(`ईद मुबारक! देखें: ${shareLink}`)}`;
        window.open(whatsappURL, '_blank');
      } else {
        alert('कृपया अपना नाम दर्ज करें।');
      }
    });

    // ===== Google AdSense Container =====
    const adContainer = document.createElement('div');
    adContainer.style.width = '100%';
    adContainer.style.display = 'flex';
    adContainer.style.justifyContent = 'center';
    adContainer.style.marginTop = '30px';
    adContainer.style.position = 'relative';
    adContainer.style.zIndex = '20';
    this.container.appendChild(adContainer);

    const adIns = document.createElement('ins');
    adIns.className = 'adsbygoogle';
    adIns.style.display = 'block';
    adIns.style.width = '100%';
    adIns.style.maxWidth = '728px';
    adIns.style.height = '90px';
    adIns.setAttribute('data-ad-client', 'ca-pub-3940256099942544'); // test client ID
    adIns.setAttribute('data-ad-slot', '6300978111'); // test ad slot
    adIns.setAttribute('data-ad-format', 'auto');
    adIns.setAttribute('data-full-width-responsive', 'true');
    adContainer.appendChild(adIns);

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  _createCountdownBox(label, parent) {
    const box = document.createElement('div');
    box.style.border = '2px solid rgba(0,0,0,0.5)';
    box.style.padding = '15px 20px';
    box.style.borderRadius = '12px';
    box.style.minWidth = '80px';
    box.style.textAlign = 'center';
    box.style.background = 'rgba(0,0,0,0.5)';
    box.style.backdropFilter = 'blur(8px)';
    box.classList.add('animated-box');

    const valueEl = document.createElement('span');
    valueEl.style.fontSize = '24px';
    valueEl.style.fontWeight = 'bold';
    valueEl.style.color = '#fff';
    valueEl.textContent = '0';
    box.appendChild(valueEl);

    const labelEl = document.createElement('div');
    labelEl.style.fontSize = '14px';
    labelEl.style.color = '#fff';
    labelEl.style.fontWeight = 'bold';
    labelEl.textContent = label;
    box.appendChild(labelEl);

    parent.appendChild(box);
    return valueEl;
  }

  _createDuaBox(text, parent) {
    const box = document.createElement('div');
    box.style.position = 'absolute';
    box.style.whiteSpace = 'nowrap';
    box.style.left = '100%';
    box.style.top = '0';
    box.style.padding = '10px 60px';
    box.style.background = 'rgba(0,0,0,0.3)';
    box.style.backdropFilter = 'blur(10px)';
    box.style.borderRadius = '12px';
    box.style.fontSize = '22px';
    box.style.fontWeight = 'bold';
    box.style.color = '#fff';
    box.textContent = text;
    parent.appendChild(box);
    return box;
  }
}
