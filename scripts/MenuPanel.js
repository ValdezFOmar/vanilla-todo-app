import {PanelManager} from './PanelManager.js'

export class MenuPanel extends PanelManager {
  constructor(panel, mask) {
    super(panel, mask)
  }

  open() {
    if (!this.openState) {
      this.turnOnMask()
      this.panel.style.right = '0'
      this.openState = true
    }
  }

  close() {
    if (this.openState) {
      this.turnOffMask()
      this.panel.style.right = '-60vw'
      this.openState = false
    }
  }
}