// ---------- Mobile nav toggle ----------
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after a link is clicked, and smooth-scroll to the target
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      const headerOffset = 72;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// ---------- Skill category filtering ----------
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.dataset.filter;
    skillCards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

// ---------- Project "key highlights" toggle ----------
const detailToggles = document.querySelectorAll('.details-toggle');

detailToggles.forEach(toggle => {
  const list = toggle.nextElementSibling;
  toggle.addEventListener('click', () => {
    const isOpen = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.firstChild.textContent = isOpen ? 'Hide key highlights ' : 'Show key highlights ';
  });
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Resume mock link notice ----------
// resume.pdf is a placeholder path — replace it with your actual resume file
// and this button will download it directly with no extra JS needed.
