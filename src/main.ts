import './style.css'

// Create background gradient
const bgGradient = document.createElement('div');
bgGradient.className = 'bg-gradient';
document.body.prepend(bgGradient);

// Create floating particles
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles';
document.body.prepend(particlesContainer);

function createParticles() {
  const colors = ['#6c63ff', '#00d4ff', '#ff6584', '#ffffff'];
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 8 + 6}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// Render main content
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="glass-card">
    <div class="hero">
      <h1 class="hero-title">
        I <span class="heart">❤️</span> DevOps
      </h1>
      <p class="subtitle">Automate · Integrate · Deploy</p>
    </div>
  </div>
  <p class="badge">Powered by <a href="https://vitejs.dev" target="_blank">Vite</a></p>
`;
