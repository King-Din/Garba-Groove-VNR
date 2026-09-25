(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const pairs = [...document.querySelectorAll('.impact-pair')];

  let ticking = false;
  function update() {
    ticking = false;
    pairs.forEach(p => {
      const r = p.getBoundingClientRect();
      const span = r.height - innerHeight * 0.8; // matches stage's sticky offset
      const progress = Math.min(Math.max(-r.top / span, 0), 1);
      const after = p.querySelector('.after');
      if (after) after.style.opacity = progress;
    });
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
})();
