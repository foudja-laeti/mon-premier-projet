// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(function(lien) {
  lien.addEventListener('click', function(e) {
    e.preventDefault();
    var cible = document.querySelector(this.getAttribute('href'));
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animation d'apparition des cards au scroll
var cards = document.querySelectorAll('.card');

window.addEventListener('scroll', function() {
  cards.forEach(function(card) {
    var position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Initialiser les cards invisibles au départ
cards.forEach(function(card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});