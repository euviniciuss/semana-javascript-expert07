export default class View {
  #btnInit = document.querySelector('#init')
  #statusElemet = document.querySelector('#status')

  enableButton() {
    this.#btnInit.disabled = false
  }

  configureBtnClick(fn) {
    this.#btnInit.addEventListener('click', fn)
  }

  log(text) {
    this.#statusElemet.innerHTML = text
  }
}