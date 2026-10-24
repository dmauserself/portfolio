document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  /* Линия под шапкой, когда страница прокручена */
  const top = document.querySelector('.top');
  const onScroll = () => top.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

});
