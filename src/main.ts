const ctaLink = document.querySelector('.content-cta-js');
if (!ctaLink || !(ctaLink instanceof HTMLElement)) {
  throw new Error('ctaLink not found');
}
const heroImage = document.querySelector('.hero-image-js');
const header = document.querySelector('.header-js');
const heroImageScrollFactor = 0.1;
const imageScrollFactor = -0.25;

// the hero image background y position - in pixels
let backgroundYPosition =
  (heroImage && heroImage.computedStyleMap().get('background-position-y')) || 0;
backgroundYPosition = parseInt(backgroundYPosition.toString());

ctaLink.addEventListener('mousemove', (e: MouseEvent): void => {
  const { left, top } = ctaLink.getBoundingClientRect();
  // update CSS variable to determine the left offset of the glow
  ctaLink.style.setProperty(
    '--cta-glow-left',
    `${Math.round(e.clientX - left)}px`
  );
  // update CSS variable to determine the top offset of the glow
  ctaLink.style.setProperty(
    '--cta-glow-top',
    `${Math.round(e.clientY - top)}px`
  );
});

window.addEventListener('scroll', () => {
  if (heroImage && heroImage instanceof HTMLElement) {
    heroImage.style.setProperty(
      '--hero-img-top',
      `${+backgroundYPosition + window.scrollY * heroImageScrollFactor}px`
    );
  }

  if (header && header instanceof HTMLElement) {
    header.style.transform = `translateY(${
      window.scrollY * imageScrollFactor
    }px)`;
  }
});
