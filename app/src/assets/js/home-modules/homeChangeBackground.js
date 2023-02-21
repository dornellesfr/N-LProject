// fill array with url images
const URLS = ['../assets/images/trator-2.jpg', '../assets/images/trator.jpg']
const TIME_TO_START = 3.5 * 1000
const TIME_TO_CHANGE = 5 * 1000
let cont = 0

function homeChangeBackground () {
  const bg1 = document.querySelector('#bg-home-1')
  const bg2 = document.querySelector('#bg-home-2')
  bg2.style.backgroundImage = `url('${URLS[cont]}')`
  bg1.style.backgroundImage = `url('${URLS[cont]}')`
  cont++
  if (cont === URLS.length) {
    cont = 0
  }
}

setTimeout(() => {
  setInterval(() => {
    homeChangeBackground()
  }, TIME_TO_CHANGE)
}, TIME_TO_START)


