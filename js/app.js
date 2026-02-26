const music = document.getElementById("bgMusic");

// Pehle muted autoplay try karega
window.addEventListener("load", () => {
    music.play().catch(() => {});
});

// First user interaction pe unmute + play
function enableSound() {
    music.muted = false;
    music.play().catch(() => {});
    
    // Ek baar ke baad listener remove
    document.removeEventListener("touchstart", enableSound);
    document.removeEventListener("click", enableSound);
}

// Mobile touch
document.addEventListener("touchstart", enableSound);

// Desktop click
document.addEventListener("click", enableSound);
