import {PanelManager} from './PanelManager.js'

export class ConfirmDeletePanel extends PanelManager {
  #message

  constructor(message, mask) {
    super(document.createElement('div'), mask)
    this.#message = message
    this.#configPanel()
  }

  #configPanel() {
    const panel = this.panel

    const container = panel.appendChild(document.createElement('div'))
    const iconContainer = container.appendChild(document.createElement('div'))
    const iconImage = iconContainer.appendChild(document.createElement('img'))
    const p = container.appendChild(document.createElement('p'))
    const options = panel.appendChild(document.createElement('div'))
    const cancelButton = options.appendChild(document.createElement('button'))
    const okButton = options.appendChild(document.createElement('button'))

    iconImage.src = '/icons/warning-icon.svg'
    iconImage.alt = 'Warning icon of a exclamation mark inside a triangle'

    p.textContent = this.#message
    cancelButton.textContent = 'CANCEL'
    okButton.textContent = 'OK'

    cancelButton.onclick = () => this.cancelAction()
    okButton.onclick = () => this.okAction()

    panel.classList.add('warning-panel')
    container.classList.add('container')
    iconContainer.classList.add('icon-warning')
    p.classList.add('message')
    options.classList.add('options')
  }

  open() {
    super.open()
    document.querySelector('body').append(this.panel)
    this.openState = true
  }

  close() {
    super.close()
    this.panel.remove()
    this.openState = false
  }

  okAction() {
    this.close()
  }

  cancelAction() {
    this.close()
  }
}