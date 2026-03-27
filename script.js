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
        <span class="ticker-star">✦</span>
        <span class="ticker-text">${t}</span>
      </div>
    `).join('');
    track.innerHTML = html + html + html;
  }

  // SCROLL TOP
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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
  }, { threshold: 0.08 });

  document.querySelectorAll('.srv-row, .rev-item, .proc-step, .why-item, .faq-item').forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity .55s ease ${i * 0.05}s, transform .55s ease ${i * 0.05}s`;
    observer.observe(el);
  });

});
