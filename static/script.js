const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const message = document.getElementById("message");
const card = document.querySelector(".message-card");
const flowerBtn = document.getElementById("flowerBtn");
const garden = document.getElementById("garden");
const particles = document.getElementById("particles");

startBtn.addEventListener("click", () => {
    music.play().catch(() => {});
    message.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => card.classList.add("show"), 450);
    spawnFlowers(10);
});

flowerBtn.addEventListener("click", () => {
    spawnFlowers(18);
    flowerBtn.textContent = "THE GARDEN IS GROWING 🌷";
});

function spawnFlowers(count) {
    const choices = ["🌷","🌸","🌼","🌺","🌻","🍃"];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const f = document.createElement("span");
            f.className = "garden-flower";
            f.textContent = choices[Math.floor(Math.random()*choices.length)];
            f.style.animationDelay = `${Math.random()*.2}s`;
            garden.appendChild(f);
        }, i * 80);
    }
}

// Pixel-style floating particles.
setInterval(() => {
    const p = document.createElement("div");
    p.style.position = "fixed";
    p.style.left = Math.random()*100 + "vw";
    p.style.bottom = "-20px";
    p.style.width = "6px";
    p.style.height = "6px";
    p.style.background = Math.random() > .5 ? "#fff0b0" : "#ff9bb0";
    p.style.zIndex = "3";
    p.style.pointerEvents = "none";
    p.style.boxShadow = "3px 0 rgba(0,0,0,.08)";
    p.style.animation = `particle ${5+Math.random()*4}s linear forwards`;
    particles.appendChild(p);
    setTimeout(() => p.remove(), 10000);
}, 900);

// Add night stars lower on the page for a changing-world feeling.
const stars = document.querySelector(".stars");
for (let i=0; i<65; i++) {
    const s = document.createElement("span");
    s.className = "star";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = Math.random()*55 + "vh";
    stars.appendChild(s);
}

const style = document.createElement("style");
style.textContent = `
@keyframes particle {
  from { transform:translateY(0); opacity:0; }
  15% { opacity:.9; }
  to { transform:translateY(-110vh); opacity:0; }
}`;
document.head.appendChild(style);
