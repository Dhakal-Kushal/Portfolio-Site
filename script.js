document.querySelectorAll('.accordion').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const panel = btn.nextElementSibling;
    if (!panel) return;
    
    const img = panel.querySelector('img[data-gif]');

    if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
      panel.style.maxHeight = "0px";
      
    } else {
      if (img) {
        if (!img.src || img.src === "") {
          img.src = img.dataset.gif;
          
          img.onload = () => {
            panel.style.maxHeight = panel.scrollHeight + "px";
          };
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
});