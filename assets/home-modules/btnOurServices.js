function btnOurServices () {
  document.querySelector('#btn-our-services').addEventListener('click', () => {
    whindow.location.assign('/servicos')
    window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload')
  })
}

btnOurServices()
