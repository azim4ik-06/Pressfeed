const banner = document.querySelector('.banner');
const slideImg = document.querySelector('.img-slide');

const slideImgCopy = slideImg.cloneNode(true);

banner.appendChild(slideImgCopy);
