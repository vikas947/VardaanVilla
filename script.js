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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => null);
  });
}
