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
