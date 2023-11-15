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

function buildContainers(res) {
  data.push(res);
  data[0].map((el) => createContainers(el));
}

function createContainers(item) {
  const photo = document.createElement('div');
  photo.innerHTML = `<div>
      <span class="material-symbols-outlined">photo_camera</span>
      <p>Photo by <span class="bold">${item.picture_copyright}</span></p>
    </div>`;
  photo.className = 'photo';
  photo.style.background = `center / cover no-repeat url(${item.picture_url})`;
  photos.append(photo);

  const altitude = document.createElement('div');
  altitude.innerHTML = `<div class="text-container">
      <span class="material-symbols-outlined">filter_hdr</span>
      <p>${
        (item.mount === true ? 'Mount ' : 'Mountain ') +
        '<span class="bold">' +
        item.name +
        '</span>'
      }</p>
    </div>
    <div class="altitude-number">
      <span class="material-symbols-outlined big-icon">altitude</span>
      <p>${item.altitude + ' m'}</p>
    </div>
    <div class="text-container">
      <span class="material-symbols-outlined">leaderboard</span>
      <p>${
        (item.rank > 1 ? 'Number ' + item.rank + ' biggest' : 'Tallest') +
        ' mountain on earth'
      }</p>
    </div>`;
  altitude.className = 'altitude';
  altitudes.append(altitude);

  const stars = [],
    rating = document.createElement('div');
  for (let i = Math.floor(item.rating); i > 0; i--) {
    stars.push(1);
    if (i === 1 && item.rating % 1 !== 0) {
      stars.push(0.5);
      for (let i = 5 - stars.length; i > 0; i--) stars.push(0);
    }
  }

  rating.innerHTML = `<div class="text-container">
      <span class="material-symbols-outlined">thumbs_up_down</span>
      <p>Personal rating</p>
    </div>
    <div class="rating-main">
      <div style="font-size: 0;" class="icon-rating">
        ${stars.map((star) => {
          return star === 1
            ? '<span class="material-symbols-outlined fill medium-icon">star</span>'
            : star === 0.5
            ? '<span class="material-symbols-outlined medium-icon">star_half</span>'
            : '<span class="material-symbols-outlined medium-icon">star</span>';
        })}
      </div>
      <p>${item.rating} / 5</p>
    </div>
    <div class="text-container">
      <span class="material-symbols-outlined">comment</span>
      <p>${item.rating_comment}</p>
    </div>`;
  rating.className = 'rating';
  ratings.append(rating);

  const conclusion = document.createElement('div');
  conclusion.innerHTML =
    `<div class="text-container">
      <span class="material-symbols-outlined">article</span>
      <p>conclusion</p>
    </div>
    <p>${item.conclusion}</p>`;
  conclusion.className = 'conclusion';
  conclusions.append(conclusion);
}

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
    wrapper.style.transform = `translateX(${pageNbr * -100}%)`
  })
}
update();

function changePage(direction = 'forward') {
  if (direction === 'forward') {
    next.classList.remove('clicked');
    previous.style.pointerEvents = 'all';
    previous.style.opacity = '1';
    pageNbr++;
  } else {
    previous.classList.remove('clicked');
    next.style.pointerEvents = 'all';
    next.style.opacity = '1';
    pageNbr--;
  }
  update();
}

previous.addEventListener('mousedown', () => previous.classList.add('clicked'));
previous.addEventListener('mouseup', () => changePage('backward'));
previous.addEventListener('touchstart', () => previous.classList.add('clicked'));
previous.addEventListener('touchend', () => changePage('backward'));
next.addEventListener('mousedown', () => next.classList.add('clicked'));
next.addEventListener('mouseup', () => changePage('forward'));
next.addEventListener('touchstart', () => next.classList.add('clicked'));
next.addEventListener('touchend', () => changePage('forward'));