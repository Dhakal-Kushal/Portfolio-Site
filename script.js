document.querySelectorAll('.accordion').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const panel = btn.nextElementSibling;
    if (!panel) return;
    const img = panel.querySelector('img[data-gif]');

    if (panel.style.maxHeight) {
      // Collapse
      panel.style.maxHeight = null;

      // Wait until animation ends before clearing src
      const onTransitionEnd = () => {
        if (img) img.removeAttribute('src'); 
        panel.removeEventListener('transitionend', onTransitionEnd);
      };
      panel.addEventListener('transitionend', onTransitionEnd);

    } else {
      // Expand
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
