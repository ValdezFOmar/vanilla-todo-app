import {TODOElement} from './TODOElement.js'

// TODO Refactor all this ugly code
const content = document.querySelector('.content')
const contentItems = content.querySelectorAll('.content-item')

// TODO Include this functionality as part of the TODOElement class
for (const item of contentItems) {
  const deleteBtn = item.querySelector('button.delete')
  deleteBtn.onclick = () => {
    item.remove()
  }

  const completedBtn = item.querySelector('button.completed')
  const card = item.querySelector('.card')
  const cardHeader = card.querySelector('.card-header')
  completedBtn.onclick = () => {
    card.classList.add('completed-state')
    cardHeader.classList.add('completed-state')
  }
}

const articleMask = document.querySelector('.mask')
const expandAddTODOPanelBtn = document.getElementById('expand-todo-panel')
const addTODOPanel = document.querySelector('.add-todo-panel')

let isPanelOpen = false

expandAddTODOPanelBtn.onclick = ev => {
  ev.stopPropagation()
  if (!isPanelOpen) {
    // articleMask.style.display = 'block'
    articleMask.style.bottom = '0'
    articleMask.style.backgroundColor = 'hsla(0, 0%, 0%, 0.5)'
    addTODOPanel.style.bottom = '0'
    isPanelOpen = true
  }
}


// FIXME. Theres code repetition here, make a function
document.addEventListener('click', ev => {
  if (!addTODOPanel.contains(ev.target) && isPanelOpen) {
    const panelHeight = addTODOPanel.offsetHeight
    addTODOPanel.style.bottom = `-${panelHeight}px`
    articleMask.style.backgroundColor = 'hsla(0, 0%, 0%, 0)'
    // articleMask.style.display = 'none'
    articleMask.style.bottom = ''
    isPanelOpen = false
  }
})

const addTODOBtn = addTODOPanel.querySelector('button[type="submit"]')
const titleInput = addTODOPanel.querySelector('#todo-title')
const descriptionInput = addTODOPanel.querySelector('#todo-description')

addTODOBtn.onclick = ev => {
  ev.preventDefault()

  const newTODO = new TODOElement(titleInput.value, descriptionInput.value, false)
  content.append(newTODO.createTODONode())

  // Clear the input elements
  titleInput.value = ''
  descriptionInput.value = ''

  // Close the panel
  if (isPanelOpen) {
    const panelHeight = addTODOPanel.offsetHeight
    addTODOPanel.style.bottom = `-${panelHeight}px`
    articleMask.style.backgroundColor = 'hsla(0, 0%, 0%, 0)'
    // articleMask.style.display = 'none'
    articleMask.style.bottom = ''
    isPanelOpen = false
  }
}