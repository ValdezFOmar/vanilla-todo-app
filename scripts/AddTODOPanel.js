// Manging the state of the panel to add TODOs
export class AddTODOPanel {
  #panel
  #mask
  #openState = false

  constructor(panel, mask) {
    this.#panel = panel
    this.#mask = mask
  }

  getPanel () {
    return this.#panel
  }

  isOpen() {
    return this.#openState
  }

  open() {
    // articleMask.style.display = 'block'
    this.#mask.style.bottom = '0'
    this.#mask.style.backgroundColor = 'hsla(0, 0%, 0%, 0.5)'
    this.#panel.style.bottom = '0'
    this.#openState = true
  }

  close() {
    const panelHeight = this.#panel.offsetHeight
    this.#panel.style.bottom = `-${panelHeight}px`
    this.#mask.style.backgroundColor = 'hsla(0, 0%, 0%, 0)'
    // articleMask.style.display = 'none'
    this.#mask.style.bottom = ''
    this.#openState = false
  }
}