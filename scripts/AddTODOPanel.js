import {PanelManager} from './PanelManager.js'

// Manging the state of the panel to add TODOs
export class AddTODOPanel extends PanelManager {
  constructor(panel, mask) {
    super(panel, mask)

    window.addEventListener('resize', () => {
      if (this.openState)
        this.panel.style.bottom = '0'
    })
  }

  open() {
    if (!this.openState) {
      this.turnOnMask()
      this.panel.style.bottom = '0'
      this.openState = true
    }
  }

  close() {
    if (this.openState) {
      this.turnOffMask()
      this.panel.style.bottom = `-50%`
      this.openState = false
    }
  }
}