import {TODOElement} from './TODOElement.js'
import {AddTODOPanel} from './AddTODOPanel.js'
import {checkmarkButton, trashcanButton} from './IconButton.js'


// Container for all the TODOElements
const content = document.querySelector('.content')

// Create default TODOElement
const defaultTitle = 'Default TODO'
const defaultDescription = 'You don\'t have any TODOs saved!\n\
You can add TODOs by clicking the + icon in the bottom right.\n\
Click the checkmark to mark the TODO as completed or the trashcan icon to delete.'

const defaultTODO = new TODOElement(defaultTitle, defaultDescription, false)
defaultTODO.addCheckButton(checkmarkButton.createButtonElement())
defaultTODO.addDeleteButton(trashcanButton.createButtonElement())
content.append(defaultTODO.getTODONode())


// Manage the main menu panel
const mainMenu = document.getElementById('menu')
const openMenuButton = document.getElementById('menu-button')
let isMenuOpen = false

openMenuButton.onclick = ev => {
  ev.stopPropagation()
  if (!isMenuOpen) {
    mainMenu.style.right = '0'
    isMenuOpen = true
  }
}
document.addEventListener('click', ev => {
  if (!mainMenu.contains(ev.target) && isMenuOpen) {
    mainMenu.style.right = '-60vw'
    isMenuOpen = false
  }
})


// Create object to manage the add TODOs panel
const articleMask = document.querySelector('.mask')
const TODOPanelElement = document.querySelector('.add-todo-panel')
const addTODOPanel = new AddTODOPanel(TODOPanelElement, articleMask)

document.getElementById('expand-todo-panel').onclick = ev => {
  ev.stopPropagation()
  if (!addTODOPanel.isOpen()) {
    addTODOPanel.open()
  }
}

// Close the panel when the user clicks outside of it
document.addEventListener('click', ev => {
  if (!addTODOPanel.getPanel().contains(ev.target) && addTODOPanel.isOpen()) {
    addTODOPanel.close()
  }
})


// Manage the form to create a new TODOElement
const addTODOBtn = addTODOPanel.getPanel().querySelector('button[type="submit"]')
const titleInput = addTODOPanel.getPanel().querySelector('#todo-title')
const descriptionInput = addTODOPanel.getPanel().querySelector('#todo-description')

// Add the new TODOElement
addTODOBtn.onclick = ev => {
  ev.preventDefault()

  const title = titleInput.value.trim()
  const description = descriptionInput.value.trim()

  const newTODO = new TODOElement(title, description, false)
  newTODO.addCheckButton(checkmarkButton.createButtonElement())
  newTODO.addDeleteButton(trashcanButton.createButtonElement())
  content.append(newTODO.getTODONode())

  // Clear the input elements
  titleInput.value = ''
  descriptionInput.value = ''

  // Close the panel
  if (addTODOPanel.isOpen()) {
    addTODOPanel.close()
  }

  // Scroll to the bottom of the page (where the new TODOElement is)
  window.scroll({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth',
  })
}