import {TODOElement} from './TODOElement.js'
import {checkmarkButton, trashcanButton} from './IconButton.js'

function defaultTODO(elementToAppend, mask = null) {
  // Create default TODOElement
  const defaultTitle = 'Default TODO'
  const defaultDescription = 'You don\'t have any TODOs saved!\n\
You can add TODOs by clicking the + icon in the bottom right.\n\
Click the checkmark to mark the TODO as completed or the trashcan icon to delete.'

  const defaultTODO = new TODOElement(defaultTitle, defaultDescription, false, '0')
  defaultTODO.addCheckButton(checkmarkButton.createButtonElement())
  defaultTODO.addDeleteButton(trashcanButton.createButtonElement(), mask)
  defaultTODO.saveToLocalStorage()
  elementToAppend.append(defaultTODO.getTODONode())
}

function loadSavedTODOS(todos, elementToAppend, mask = null) {
  for (const todoData of todos) {
    const todo = new TODOElement(
        todoData.title,
        todoData.desc,
        todoData.isCheck,
        todoData._id,
    )
    todo.addCheckButton(checkmarkButton.createButtonElement())
    todo.addDeleteButton(trashcanButton.createButtonElement(), mask)
    elementToAppend.append(todo.getTODONode())
  }
}

export function loadTODOS(elementToAppend, mask = null) {
  const rawData = localStorage.getItem('todos')
  if (!rawData) {
    defaultTODO(elementToAppend, mask)
    return
  }
  const todosArray = JSON.parse(rawData)
  loadSavedTODOS(todosArray, elementToAppend, mask)
}