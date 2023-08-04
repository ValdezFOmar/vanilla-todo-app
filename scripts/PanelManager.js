export class PanelManager {
  openState = false

  constructor(panel, mask = null) {
    this.panel = panel
    this.mask = mask

    document.addEventListener('click', ev => {
      if (!this.panel.contains(ev.target) && this.openState) {
        this.close()
      }
    })
  }

  getPanel() {
    return this.panel
  }

  turnOnMask() {
    if (this.mask) {
      this.mask.style.display = 'block'
      this.mask.style.backgroundColor = 'hsla(0, 0%, 0%, 0.4)'
    }
  }

  turnOffMask() {
    if (this.mask) {
      this.mask.style.display = 'none'
      this.mask.style.backgroundColor = 'hsla(0, 0%, 0%, 0)'
    }
  }

  isOpen() {
    return this.openState
  }

  open() {
    this.turnOnMask()
  }

  close() {
    this.turnOffMask()
  }
}