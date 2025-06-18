
// Typing animation
const typingText = `Happy Birthday, My Love 💖
On this special day, I just want to remind you how much you mean to me.
You light up my world with your smile, your laughter, and your love.
Every moment with you feels magical, and I’m so lucky to call you mine.
May your day be filled with surprises, joy, and all the love you deserve.
I can't wait to create many more beautiful memories with you.

I love you, now and always. 💫🎂❤️`;

let index = 0;
const element = document.getElementById("typing-text");

function typeChar() {
  if (index < typingText.length) {
    element.innerHTML += typingText[index] === "\n" ? "<br>" : typingText[index];
    index++;
    setTimeout(typeChar, 50);
  }
}
typeChar();

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// Confetti
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

function createParticle() {
  particles.push({
    x: Math.random() * confettiCanvas.width,
    y: -10,
    r: Math.random() * 6 + 4,
    d: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngleIncrement: Math.random() * 0.1 + 0.05,
    tiltAngle: 0
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  particles.forEach(p => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(p.d);
    p.tiltAngle += p.tiltAngleIncrement;
    p.tilt = Math.sin(p.tiltAngle) * 15;

    ctx.beginPath();
    ctx.lineWidth = p.r;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
    ctx.stroke();
  });
  requestAnimationFrame(drawParticles);
}

setInterval(createParticle, 100);
drawParticles();
