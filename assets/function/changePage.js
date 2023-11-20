function changePage(direction = 'forward') {
  if (direction === 'forward' && pageNbr < data[0].length - 1) {
    previous.style.pointerEvents = 'all';
    previous.style.opacity = '1';
    pageNbr++;
  } else if (direction === 'backward' && pageNbr > 0) {
    next.style.pointerEvents = 'all';
    next.style.opacity = '1';
    pageNbr--;
  }
  update();
}
