// Manging the state of the panel to add TODOs
export class AddTODOPanel {
  #panel
  #mask
  #openState = false

  constructor(panel, mask) {
    this.#panel = panel
    this.#mask = mask

    window.addEventListener('resize', () => {
      if (this.#openState)
        this.#panel.style.bottom = '0'
    })
  }

  getPanel () {
    return this.#panel
  }

  isOpen() {
    return this.#openState
  }

  open() {
    this.#mask.style.display = 'block'
    this.#mask.style.backgroundColor = 'hsla(0, 0%, 0%, 0.4)'
    this.#panel.style.bottom = '0'
    this.#openState = true
  }

  close() {
    this.#panel.style.bottom = `-50%`
    this.#mask.style.backgroundColor = 'hsla(0, 0%, 0%, 0)'
    this.#mask.style.display = 'none'
    this.#openState = false
  }
}