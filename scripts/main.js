import {TODOElement} from './TODOElement.js'
import {AddTODOPanel} from './AddTODOPanel.js'
import {checkmarkButton, trashcanButton} from './IconButton.js'
import {loadTODOS} from './loadTODOS.js'


// Body mask that activates when a panel is open
const bodyMask = document.querySelector('.mask')

// Container for all the TODOElements
const content = document.querySelector('.content')

loadTODOS(content, bodyMask)


// Create object to manage the add TODOs panel
const TODOPanelElement = document.querySelector('.add-todo-panel')
const addTODOPanel = new AddTODOPanel(TODOPanelElement, bodyMask)

document.getElementById('expand-todo-panel').onclick = ev => {
  ev.stopPropagation()
  addTODOPanel.open()
}


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
  newTODO.addDeleteButton(trashcanButton.createButtonElement(), bodyMask)
  content.append(newTODO.getTODONode())
  newTODO.saveToLocalStorage()

  // Clear the input elements
  titleInput.value = ''
  descriptionInput.value = ''

  // Close the panel
  addTODOPanel.close()

  // Scroll to the bottom of the page (where the new TODOElement is)
  window.scroll({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth',
  })
}