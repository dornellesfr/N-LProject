// fill array with url images that will change
const URLS = ['../assets/images/bg/73.jpg', '../assets/images/bg/84.jpg', '../assets/images/bg/53.jpg', '../assets/images/bg/40.jpg'];
const TIME_TO_START = 3.5 * 1000;
const TIME_TO_CHANGE = 5 * 1000;
let cont = 0;

function changeBackground() {
  const bg1 = document.querySelector('#bg-home-1');
  const bg2 = document.querySelector('#bg-home-2');
  bg2.style.backgroundImage = `url('${URLS[cont]}')`;
  bg1.style.backgroundImage = `url('${URLS[cont]}')`;
  cont += 1;
  if (cont === URLS.length) {
    cont = 0;
  }
}

setTimeout(() => {
  setInterval(() => {
    changeBackground();
  }, TIME_TO_CHANGE);
}, TIME_TO_START);
