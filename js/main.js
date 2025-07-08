// Animate sections fade-in on scroll
const fadeInSections = document.querySelectorAll('.section-fade-in');
function onScrollFadeIn() {
  const triggerBottom = window.innerHeight * 0.9;
  fadeInSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('load', onScrollFadeIn);

// Memories slider
const memories = [
  { url: '../images/memories -1.jpg', alt: 'Students participating in robotics workshop 2023' },
  { url: '../images/memories -2.jpg', alt: 'Audience watching keynote speech 2022' },
  { url: '../images/memories -3.jpg', alt: 'Hackathon teams collaborating 2021' },
  { url: '../images/memories -4.jpg', alt: 'Award ceremony with winner trophies 2023' },
  { url: '../images/memories -5.jpg', alt: 'Students participating in robotics workshop 2023' },
  { url: '../images/memories -6.jpg', alt: 'Audience watching keynote speech 2022' },
  { url: '../images/memories -7.jpg', alt: 'Hackathon teams collaborating 2021' },
  { url: '../images/memories -8.jpg', alt: 'Award ceremony with winner trophies 2023' },
  { url: '../images/memories -9.jpg', alt: 'Hackathon teams collaborating 2021' },
  { url: '../images/memories -10.jpg', alt: 'Award ceremony with winner trophies 2023' }
];
let currentMemoryIndex = 0;
const memoryImage = document.getElementById('memory-image');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function showMemory(index) {
  if (index < 0) index = memories.length - 1;
  if (index >= memories.length) index = 0;
  currentMemoryIndex = index;

  memoryImage.style.opacity = 0;
  setTimeout(() => {
    memoryImage.src = memories[currentMemoryIndex].url;
    memoryImage.alt = memories[currentMemoryIndex].alt;
    memoryImage.style.opacity = 0.8;
  }, 300);
}

prevBtn.addEventListener('click', () => showMemory(currentMemoryIndex - 1));
nextBtn.addEventListener('click', () => showMemory(currentMemoryIndex + 1));

// Auto-slide every 7s
setInterval(() => {
  showMemory(currentMemoryIndex + 1);
}, 5000);

showMemory(0);


const audio2 = document.querySelector('audio');
     let volume = 0;

     function fadeIn() {
         if (volume < 1) {
             volume += 0.5;
             audio.volume = volume;
             setTimeout(fadeIn, 100); // Adjust speed with the timeout
         }
     }

     function fadeOut() {
         if (volume > 0) {
             volume -= 0.5;
             audio.volume = volume;
             setTimeout(fadeOut, 100);
         }
     }

     const audio = document.getElementById("audioplayer");

  const tryPlay = () => {
    audio.play().catch((e) => {
      console.log("Autoplay blocked. Waiting for interaction.");
    });
    window.removeEventListener("mousemove", tryPlay);
    window.removeEventListener("touchstart", tryPlay);
    window.removeEventListener("keydown", tryPlay);
  };

  window.addEventListener("mousemove", tryPlay);
  window.addEventListener("touchstart", tryPlay);
  window.addEventListener("keydown", tryPlay);
     