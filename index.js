const photos = document.querySelector('.photos');

fetch('./data/mountains.json')
  .then((response) => response.json())
  .then((json) => buildContainers(json));

function buildContainers(res) {
  const data = [];
  data.push(res);
  data[0].photo.map((el) => createContainer(el));
}

function createContainer(el) {
  const photo = document.createElement('div');
  photo.innerHTML =
    `<div>
      <span class="material-symbols-outlined">photo_camera</span>
      <p>Photo by <span class="copyright">${el.picture_copyright}</span></p>
    </div>`
  photo.className = 'photo';
  photos.append(photo);
}
