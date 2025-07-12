// Scroll-Based Parallax Text Movement
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Parallax 1: Vertical speed increase for dynamic text
  const parallax1 = document.querySelector('.parallax-1 .text-dynamic');
  if (parallax1) {
    parallax1.style.transform = `translateY(${-scrollY * 0.8}px)`;
  }

  // Parallax 2: Horizontal scroll of second line
  const parallax2 = document.querySelector('.parallax-2 .text-scroll');
  if (parallax2) {
    parallax2.style.transform = `translateX(${-scrollY * 0.4}px)`;
  }

  // Parallax 3: Horizontal scroll right
  const parallax3 = document.querySelector('.parallax-3 .text-scroll.left');
  if (parallax3) {
    parallax3.style.transform = `translateX(${scrollY * 0.4}px)`;
  }
});

// Auto-scrolling horizontal info cards based on vertical scroll
let lastScrollTop = 0;
const cardTrack = document.querySelector('.info-card-track');

window.addEventListener('scroll', () => {
  if (!cardTrack) return;
  let st = window.scrollY;
  let direction = st > lastScrollTop ? 1 : -1;
  cardTrack.scrollLeft += direction * 5;
  lastScrollTop = st <= 0 ? 0 : st;
});

// Carousel Logic
let carouselIndex = 0;
const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

function moveCarousel() {
  if (!carouselTrack || !slides.length) return;
  carouselIndex = (carouselIndex + 1) % slides.length;
  const slideWidth = slides[0].offsetWidth + 20; // includes gap
  carouselTrack.style.transform = `translateX(-${carouselIndex * slideWidth}px)`;
}

setInterval(moveCarousel, 5000);

// Hover animation on Hero Section - toggle class
const hero = document.getElementById('hero');
const floatImgs = document.querySelectorAll('.hero-animation .float-img');

if (hero && floatImgs.length) {
  hero.addEventListener('mouseenter', () => {
    floatImgs.forEach(img => img.classList.add('active'));
  });

  hero.addEventListener('mouseleave', () => {
    floatImgs.forEach(img => img.classList.remove('active'));
  });
}
