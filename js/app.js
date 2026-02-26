const music = document.getElementById("bgMusic");

// Page load par music play karne ki koshish
window.addEventListener("load", () => {

    // Autoplay try karega
    music.play().catch(() => {});

    // 1 second baad unmute karne ki koshish
    setTimeout(() => {
        music.muted = false;

        // Dobara play try kare agar blocked ho
        music.play().catch(() => {});
    }, 1000);

});
