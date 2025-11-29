document.querySelectorAll('.accordion').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const panel = btn.nextElementSibling;
    if (!panel) return;
    const img = panel.querySelector('img[data-gif]');

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

      const onTransitionEnd = () => {
        if (img) img.removeAttribute('src'); 
        panel.removeEventListener('transitionend', onTransitionEnd);
      };
      panel.addEventListener('transitionend', onTransitionEnd);

    } else {
      if (img && !img.src) {
        img.src = img.dataset.gif;
        img.addEventListener('load', () => {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }, { once: true });
      }
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
