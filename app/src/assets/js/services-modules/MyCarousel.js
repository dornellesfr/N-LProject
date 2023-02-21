class MyCarousel {
  constructor() {
    this.myCarousel = '';
    this.container = document.querySelector('#services');
    // URLs that contains images
    this.carouselItems = ['../assets/images/trator-2.jpg', '../assets/images/trator.jpg'],
    // set transition duration
    this.duration = 1000;
  }

  createItems() {
    let text = '<div id="indicators-carousel" class="relative w-7/12 m-auto mt-2/12" data-carousel="slide"><div id="items-container" class="relative h-56 overflow-hidden rounded-lg md:h-96">';
    this.carouselItems.forEach((item, index) => {
      if (!index) {
        text += `<div id="carousel-item-${index + 1}" class="hidden duration-${this.duration} ease-in-out carousel-item" data-carousel-item="active">
                  <img src="${this.carouselItems[index]}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                  </div>`;
      } else {
        text += `<div id="carousel-item-${index + 1}" class="hidden duration-${this.duration} ease-in-out carousel-item" data-carousel-item>
        <img src="${this.carouselItems[index]}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>`;
      }
    });
    text += '</div>';
    this.myCarousel += text;
  }

  createIndicatores() {
    let text = '<div id="slider-indicators" class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">';
    this.carouselItems.forEach((item, index) => {
      if (!index) {
        text += `<button type="button" class="w-3 h-3 rounded-full carousel-indicator" aria-current="true" aria-label="Slide ${index + 1}"              data-carousel-slide-to="${index}"></button>`;
      } else {
        text += `<button type="button" class="w-3 h-3 rounded-full carousel-indicator" aria-current="false" aria-label="Slide ${index + 1}"              data-carousel-slide-to="${index}"></button>`;
      }
    });
    text += '</div>';
    this.myCarousel += text;
  }

  addControls() {
    this.myCarousel += `<button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                        </span>
                        </button>
                        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>`;
  }

  setItemsAndOption() {
    this.items = [];
    const indicators = [];
    const _items = document.querySelectorAll('.carousel-item');
    const _indicators = document.querySelectorAll('.carousel-indicator');

    _items.forEach((item, index) => {
      items.push({ position: index, el: item });
    });

    _indicators.forEach((indicator, index) => {
      indicators.push({ position: index, el: indicator });
    });

    this.options = {
      defaultPosition: 1,
      interval: 3000,
      indicators: {
        activeClasses: 'bg-white',
        inactiveClasses: 'bg-white/50 hover:bg-white',
        items: indicators,
      },

      // callback functions
      onNext: (item) => {
        console.log('next slider item is shown');
      },
      onPrev: (item) => {
        console.log('previous slider item is shown');
      },
      onChange: (item) => {
        console.log('new slider item has been shown');
      },
    };
  }

  start() {
    this.createItems();
    this.createIndicatores();
    this.addControls();
    this.container.innerHTML = this.myCarousel;
    this.setItemsAndOption();
    this.carousel = new Carousel(this.items, this.options);
    this.carousel.cycle();
  }
}

const carousel = new MyCarousel();
carousel.start();
