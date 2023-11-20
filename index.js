const photos = document.querySelector('.photos'),
  altitudes = document.querySelector('.altitudes'),
  ratings = document.querySelector('.ratings'),
  conclusions = document.querySelector('.conclusions'),
  previous = document.querySelector('.previous'),
  next = document.querySelector('.next'),
  data = [];
let pageNbr = 0;

try {
  fetch('./data/mountains.json')
    .then((response) => response.json())
    .then((json) => buildContainers(json));
} catch (error) {
  console.log(error);
} finally {
  console.log('successful loading');
}

update();

previous.addEventListener('click', () => changePage('backward'));
next.addEventListener('click', () => changePage('forward'));

document.addEventListener('keydown', (e) => {
  e.key === 'ArrowRight'
    ? changePage('forward')
    : e.key === 'ArrowLeft' && changePage('backward');
});
