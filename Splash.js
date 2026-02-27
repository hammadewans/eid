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

    // ===== Background Floating Emojis =====
    const bgAnimation = document.createElement('div');
    Object.assign(bgAnimation.style,{
      position:'absolute',
      top:'0',left:'0',
      width:'100%',height:'100%',
      overflow:'hidden',
      zIndex:'1'
    });
    this.splash.appendChild(bgAnimation);

    const symbols = ['🌙','⭐','✨','💖','❤️'];

    for (let i = 0; i < 25; i++) {
      const item = document.createElement('div');
      item.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
      Object.assign(item.style,{
        position:'absolute',
        fontSize:(20 + Math.random()*40)+'px',
        left:Math.random()*100+'%',
        top:Math.random()*100+'%',
        animation:`floatAnim ${6+Math.random()*6}s infinite ease-in-out,
                   blinkAnim ${2+Math.random()*3}s infinite alternate`
      });
      bgAnimation.appendChild(item);
    }

    // ===== Heading =====
    const heading = document.createElement('div');
    Object.assign(heading.style,{
      position:'relative',
      zIndex:'10000',
      textAlign:'center',
      fontWeight:'bold'
    });

    const line1 = document.createElement('div');
    line1.textContent = "Eid ul Fitr";
    line1.style.fontSize = '3.5rem';
    line1.style.color = '#00ff40';
    line1.style.textShadow = '0 0 20px #00ff40,0 0 60px #00ff40';
    line1.style.animation = 'textMove 3s infinite ease-in-out';

    const line2 = document.createElement('div');
    line2.textContent = "Mubarak";
    line2.style.fontSize = '5rem';
    line2.style.color = '#00FFCC';
    line2.style.marginTop = '10px';
    line2.style.textShadow = '0 0 25px #00FFCC,0 0 70px #00FFCC';
    line2.style.animation = 'textMove 3s infinite ease-in-out';

    heading.appendChild(line1);
    heading.appendChild(line2);
    this.splash.appendChild(heading);

    // ===== TAP Gesture =====
    const gestureBox = document.createElement('div');
    Object.assign(gestureBox.style,{
      position:'relative',
      marginTop:'40px',
      zIndex:'10000',
      height:'120px',
      display:'flex',
      justifyContent:'center',
      alignItems:'flex-start'
    });

    const hand = document.createElement('div');
    hand.innerHTML = '👆';
    hand.style.fontSize = '5rem';
    hand.style.animation = 'tapHand 1.5s infinite ease-in-out';

    const ripple = document.createElement('div');
    Object.assign(ripple.style,{
      position:'absolute',
      top:'15px',
      left:'50%',
      transform:'translateX(-50%)',
      width:'25px',
      height:'25px',
      border:'3px solid white',
      borderRadius:'50%',
      opacity:'0',
      animation:'rippleEffect 1.5s infinite ease-out'
    });

    gestureBox.appendChild(hand);
    gestureBox.appendChild(ripple);
    this.splash.appendChild(gestureBox);

    document.body.appendChild(this.splash);

    // ===== CSS Animations =====
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatAnim {
        0% { transform: translateY(0); }
        50% { transform: translateY(-30px); }
        100% { transform: translateY(0); }
      }
      @keyframes blinkAnim {
        0% { opacity:0.5; }
        100% { opacity:1; }
      }
      @keyframes textMove {
        0%,100% { transform:translateY(0); }
        50% { transform:translateY(-10px); }
      }
      @keyframes tapHand {
        0%,100% { transform:translateY(0); }
        50% { transform:translateY(30px); }
      }
      @keyframes rippleEffect {
        0% { transform:translateX(-50%) scale(0.3); opacity:0.8; }
        100% { transform:translateX(-50%) scale(4); opacity:0; }
      }
      @keyframes blast {
        0% { transform:translate(0,0) scale(1); opacity:1; }
        100% { transform:translate(var(--x),var(--y)) scale(0.5); opacity:0; }
      }
    `;
    document.head.appendChild(style);
  }

  onClick(callback) {
    this.splash.addEventListener('click', (e) => {

      const emojis = ['🌙','⭐','✨','💖','❤️','🌟'];

      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
        Object.assign(particle.style,{
          position:'absolute',
          left:e.clientX+'px',
          top:e.clientY+'px',
          fontSize:(20+Math.random()*25)+'px',
          zIndex:'20000',
          pointerEvents:'none'
        });

        const angle = Math.random()*2*Math.PI;
        const distance = 150+Math.random()*250;
        particle.style.setProperty('--x',Math.cos(angle)*distance+'px');
        particle.style.setProperty('--y',Math.sin(angle)*distance+'px');
        particle.style.animation='blast 1.5s ease-out forwards';

        this.splash.appendChild(particle);
        setTimeout(()=>particle.remove(),1500);
      }

      setTimeout(()=>{
        this.splash.style.transition='opacity 0.8s';
        this.splash.style.opacity='0';
        setTimeout(()=>{
          this.splash.remove();
          callback();
        },800);
      },700);
    });
  }
}
