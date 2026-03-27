document.addEventListener('DOMContentLoaded', function () {

  // TICKER
  const items = [
    '4.8 / 5 · Google Reviews',
    '+10 años en Cabral',
    '273 opiniones verificadas',
    'TOP 1 taller en Vigo',
    'Cambio en 30 minutos',
    'Coche y moto',
    'Desde 2013',
    'Precio claro siempre',
  ];
  const track = document.getElementById('ticker-track');
  if (track) {
    const html = items.map(t => `
      <div class="ticker-item">
        <div class="ticker-diamond"></div>
        <span class="ticker-text">${t}</span>
      </div>
    `).join('');
    track.innerHTML = html + html + html;
  }

  // SCROLL REVEAL
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.srv-item, .rev-card, .proc-step, .why-item, .faq-item').forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .6s ease ${i * 0.06}s, transform .6s ease ${i * 0.06}s`;
    observer.observe(el);
  });

});
