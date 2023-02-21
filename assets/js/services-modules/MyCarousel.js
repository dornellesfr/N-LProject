class MyCarousel {
  constructor(Items, container, duration, interval) {
  this.container = container
  this.carouselItems = Items
  this.duration = duration
  this.interval = interval
  this.myCarousel = ''
  this.number = 0
  }

  getNCarousel () {
    const qtn = document.querySelectorAll('.my-cont-carousel')
    this.number = qtn.length + 1
  }

  createItems () {
    this.getNCarousel()
    let text = '<div class="relative w-7/12 m-auto mt-2/12 my-cont-carousel" data-carousel="slide"><div class="relative h-56 overflow-hidden rounded-lg md:h-96">'
    this.carouselItems.forEach((item, index) => {
      if (!index) {
        text += `<div id="carousel-${this.number}-item-${index + 1}" class="hidden duration-${this.duration} ease-in-out carousel-${this.number}-item" data-carousel-item="active">
                  <img src="${this.carouselItems[index]}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                  </div>`
      } else {
        text += `<div id="carousel-${this.number}-item-${index + 1}" class="hidden duration-${this.duration} ease-in-out carousel-${this.number}-item" data-carousel-item>
        <img src="${this.carouselItems[index]}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>`
      }
        
    })
    text += '</div>'
    this.myCarousel += text
  }

  createIndicatores () {
    let text = '<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">'
    this.carouselItems.forEach((item, index) => {
      if (!index) {
        text += `<button type="button" class="w-3 h-3 rounded-full carousel-${this.number}-indicator" aria-current="true" aria-label="Slide ${index + 1}" data-carousel-slide-to="${index}"></button>`
      } else {
        text += `<button type="button" class="w-3 h-3 rounded-full carousel-${this.number}-indicator" aria-current="false" aria-label="Slide ${index + 1}"              data-carousel-slide-to="${index}"></button>`
      }
    })
    text += '</div>'
    this.myCarousel += text
  }

  addControls () {
    this.myCarousel += `<button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev title="Anterior">
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                        </span>
                        </button>
                        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next title="Próximo">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>`
  } 

  setItemsAndOptions () {
    this.items = []
    this.indicators = []
    this._items = document.querySelectorAll(`.carousel-${this.number}-item`)
    this._indicators = document.querySelectorAll(`.carousel-${this.number}-indicator`)

    this._items.forEach((item, index) => {
      this.items.push({position: index, el: item})
    })

    this._indicators.forEach((indicator, index) => {
      this.indicators.push({position: index, el: indicator})
    })
  
    this.options = {
      defaultPosition: 1,
      interval: this.interval,
      indicators: {
          activeClasses: 'bg-white',
          inactiveClasses: 'bg-white/50 hover:bg-white',
          items: this.indicators
      },
      
      // callback functions
      onNext: (item) => {
          console.log();
      },
      onPrev: (item) => {
          console.log();
      },
      onChange: (item) => {
          console.log(item);
      }
    }
  }
    addListerners () {
      this._items.forEach((item, index) => {})
      
  }
  
  
  
  start () {
    this.createItems()
    this.createIndicatores()
    this.addControls()
    this.container.innerHTML = this.myCarousel
    this.setItemsAndOptions()
    this.carousel = new Carousel(this.items, this.options)
    // this.carousel.cycle()
  }
}

const items1 = ['../assets/images/servicos/73.jpg', '../assets/images/servicos/84.jpg', '../assets/images/servicos/53.jpg', '../assets/images/servicos/28.jpg', '../assets/images/servicos/54.jpg', '../assets/images/servicos/11.jpg', '../assets/images/servicos/13.jpg', '../assets/images/servicos/30.jpg', '../assets/images/servicos/1.jpg', '../assets/images/servicos/4.jpg', '../assets/images/servicos/6.jpg', '../assets/images/servicos/12.jpg', '../assets/images/servicos/13.jpg', '../assets/images/servicos/16.jpg', '../assets/images/servicos/18.jpg', '../assets/images/servicos/19.jpg', '../assets/images/servicos/22.jpg', '../assets/images/servicos/29.jpg', '../assets/images/servicos/30.jpg', '../assets/images/servicos/34.jpg', '../assets/images/servicos/38.jpg']

const items2 = ['../assets/images/servicos/20.jpg', '../assets/images/servicos/23.jpg', '../assets/images/servicos/25.jpg', '../assets/images/servicos/26.jpg', '../assets/images/servicos/35.jpg', '../assets/images/servicos/36.jpg', '../assets/images/servicos/13.jpg', '../assets/images/servicos/30.jpg', '../assets/images/servicos/4.jpg']

const container1 = document.querySelector('#carousel-1')
const container2 = document.querySelector('#carousel-2')

const duration = 1000
const interval = 5000

const carousel1 = new MyCarousel(items1, container1, duration, interval)
const carousel2 = new MyCarousel(items2, container2, duration, interval)
carousel1.start()
carousel2.start()