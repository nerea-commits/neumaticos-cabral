/* ============================================
   NEUMÁTICOS CABRAL — SCRIPTS
   ============================================ */

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('v');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-r]').forEach(function (el) {
    observer.observe(el);
  });
});
// Ticker
(function(){
  const items = [
    {num:'4.8 / 5',     label:'Google Reviews'},
    {num:'273',          label:'Opiniones verificadas'},
    {num:'+10 años',     label:'En Cabral, Vigo'},
    {num:'TOP 1',        label:'Taller en Vigo'},
    {num:'30 min',       label:'Cambio de neumáticos'},
    {num:'Desde 2013',   label:'Taller de confianza'},
    {num:'Coche & moto', label:'Lo hacemos todo'},
  ];
  const track = document.getElementById('ticker-track');
  if(!track) return;
  const html = items.map(i=>`
    <div class="ticker-item">
      <div class="ticker-diamond"></div>
      <div class="ticker-num">${i.num}</div>
      <div class="ticker-pipe"></div>
      <div class="ticker-lbl">${i.label}</div>
    </div>
  `).join('');
  track.innerHTML = html + html;
})();
