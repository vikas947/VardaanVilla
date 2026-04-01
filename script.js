const waMessage = 'Hi, I want to check availability for Vardhan Beach Farmhouse for [date] for [number of people].';
const waUrl = `https://wa.me/?text=${encodeURIComponent(waMessage)}`;

document.querySelectorAll('.js-wa').forEach((el) => {
  el.setAttribute('href', waUrl);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener noreferrer');
});

const slides = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('slide--active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('slide--active');
}, 5000);

const parallaxLayer = document.querySelector('.hero__slider');
window.addEventListener('scroll', () => {
  if (!parallaxLayer) return;
  const offset = Math.min(window.scrollY * 0.18, 120);
  parallaxLayer.style.transform = `translateY(${offset}px)`;
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const revealElements = document.querySelectorAll('.info-card, .use-case, .price-card, .amenity-grid article, .about-image img, .masonry img, .cta-panel, .location-grid iframe');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealElements.forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => null);
  });
}
