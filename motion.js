/* Signature moment: specimen diagrams draw themselves in. Respects prefers-reduced-motion. */
(function () {
  'use strict';
  function reveal(el) { if (el) el.classList.add('in'); }

  function run() {
    if (!document.documentElement.classList.contains('motion')) return;

    var hero = document.getElementById('hero-diagram');
    if (hero) setTimeout(function () { reveal(hero); }, 260);

    var rows = Array.prototype.slice.call(document.querySelectorAll('.theme-media'));
    if (!rows.length) return;

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); }
        });
      }, { threshold: 0.4 });
      rows.forEach(function (r) { io.observe(r); });
    } else {
      rows.forEach(reveal);
    }
  }

  if (window.TMG_READY) run();
  else document.addEventListener('tmg:ready', run, { once: true });
})();
