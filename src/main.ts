import './main.css';

const ctaLink = document.querySelector('.content-cta-js');
if (!ctaLink || !(ctaLink instanceof HTMLElement)) {
  throw new Error('ctaLink not found');
}
const heroImage = document.querySelector('.image-js');

ctaLink.addEventListener('mousemove', (e: MouseEvent): void => {
  const { left, top } = ctaLink.getBoundingClientRect();
  ctaLink.style.setProperty('--cta-glow-left', `${e.clientX - left}px`);
  ctaLink.style.setProperty('--cta-glow-top', `${e.clientY - top}px`);
});

window.addEventListener('scroll', () => {
  if (heroImage && heroImage instanceof HTMLElement) {
    heroImage.style.transform = `translateY(${window.scrollY * 0.1}px)`;
  }
});
