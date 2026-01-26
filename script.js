
  const slider = document.querySelector('.items');

  let isDown = false;
  let startX = 0;

  slider.addEventListener('mousedown', (e) => {
    if (e.which !== 1) return; // left click only
    isDown = true;
    startX = e.pageX;
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    // FORCE scroll movement (Cypress-safe)
    const walk = Math.abs(e.pageX - startX);
    slider.scrollLeft += walk;
  });

