 const slider = document.querySelector('.items');

  let isDown = false;
  let startX = 0;

  slider.addEventListener('mousedown', (e) => {
    if (e.which !== 1) return;
    isDown = true;
    startX = e.pageX;
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const walk = Math.abs(startX - e.pageX);
    slider.scrollLeft += walk;
  });