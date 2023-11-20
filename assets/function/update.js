function update() {
  if (pageNbr === 0) {
    previous.style.pointerEvents = 'none';
    previous.style.opacity = '0.5';
  } else if (pageNbr === data[0].length - 1) {
    next.style.pointerEvents = 'none';
    next.style.opacity = '0.5';
  }
  const wrappers = [...document.querySelectorAll('.wrapper')];
  wrappers.map((wrapper) => {
    wrapper.style.transform = `translateX(${pageNbr * -100}%)`;
  });
}
