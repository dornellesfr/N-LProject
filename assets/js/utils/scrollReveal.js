function scrollReveal (observed, toggled, margin) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle(toggled, entry.isIntersecting)
    })
  },
  {
    rootMargin: margin
  })
  const items = document.querySelectorAll(observed)
  if (items.length > 0) {
    items.forEach((element) => observer.observe(element))
  }
}

const observed = '.observed'
const toggled = 'show'
const margin = '-300px'

scrollReveal(observed, toggled, margin)