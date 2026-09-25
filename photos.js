(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tiles = [...document.querySelectorAll('.ph-tile')];

  // reveal each photo the first time it scrolls into view
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.2 });
  tiles.forEach(t => io.observe(t));

  if (reduce) return;

  // gentle parallax drift inside each photo while scrolling
  let ticking = false;
  function update() {
    ticking = false;
    tiles.forEach(t => {
      const b = t.getBoundingClientRect();
      const center = b.top + b.height / 2 - innerHeight / 2;
      if (Math.abs(center) > innerHeight * 1.2) return;
      const img = t.querySelector('img');
      if (img) img.style.transform = `translateY(${center * -0.08}px)`;
    });
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
})();
