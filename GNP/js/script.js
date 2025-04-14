// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Navbar Scroll Effects =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== Active Link on Scroll =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
    } else {
      document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.remove('active');
    }
  });
});

// ===== Reveal on Scroll =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => {
  el.classList.add('hidden');
  revealObserver.observe(el);
});

// ===== Scroll-to-Top Button =====
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scrollToTop';
scrollBtn.innerText = '↑';
document.body.appendChild(scrollBtn);
scrollBtn.style.cssText = `
  position: fixed; bottom: 30px; right: 30px; z-index: 999;
  padding: 10px 14px; border: none; border-radius: 50%;
  background: #00ffc3; color: #000; font-size: 1.2rem;
  box-shadow: 0 0 10px #00ffc3; cursor: pointer; display: none;
`;
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// ===== Dark Mode Toggle (optional future feature) =====
/*
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
*/

// ===== Typing Effect (Hero Text) =====
const typingText = "বাংলাদেশ জাতীয়তাবাদী দল - বাংলাদেশ এর জন্য গর্ব!";
let i = 0;
function typeWriter() {
  const target = document.getElementById('typeText');
  if (target && i < typingText.length) {
    target.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.addEventListener('load', typeWriter);

// ===== Parallax Effect (Hero) =====
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.4 + 'px';
  }
});

// ===== Responsive Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.navbar ul');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Dynamic Footer Year =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
