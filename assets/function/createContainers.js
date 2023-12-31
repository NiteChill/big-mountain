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
    }
  }
  for (let i = 5 - stars.length; i > 0; i--) stars.push(0);

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
  conclusion.innerHTML = `<div class="text-container">
      <span class="material-symbols-outlined">article</span>
      <p>Conclusion</p>
    </div>
    <p>${item.conclusion}</p>`;
  conclusion.className = 'conclusion';
  conclusions.append(conclusion);
}