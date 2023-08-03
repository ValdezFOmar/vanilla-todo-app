import {ConfirmDeletePanel} from './ConfirmDeletePanel.js'

export class TODOElement {
  #id
  #title
  #description
  #isCheck
  #TODONode
  #completedStyle = 'completed-state'

  constructor(title, description, isCheck, id = null) {
    this.#title = title
    this.#description = description
    this.#isCheck = isCheck
    this.#id = id || crypto.randomUUID()

    this.#TODONode = this.#createTODONode()

    if (this.#isCheck) {
      this.#addCompletedStyle(
          this.#TODONode.querySelector('.card'),
          this.#TODONode.querySelector('.card-header'),
      )
    }
  }

  // Create the entire node structure of the TODOElement (header, content, etc.)
  #createTODONode() {
    const listItem = document.createElement('li')
    const section = document.createElement('section')
    const header = document.createElement('div')
    const title = document.createElement('h2')
    // const completedBtn = document.createElement('button')
    // const deleteBtn = document.createElement('button')
    const paragraph = document.createElement('p')

    listItem.classList.add('content-item')
    section.classList.add('card')
    header.classList.add('card-header')
    title.classList.add('card-title')
    paragraph.classList.add('card-content')

    title.textContent = this.#title
    paragraph.textContent = this.#description

    header.append(title)
    section.append(header, paragraph)
    listItem.append(section)

    return listItem
  }

  saveToLocalStorage() {
    const item = localStorage.getItem('todos')
    const todosArray = item ? JSON.parse(item) : []
    todosArray.push({
      _id: this.#id,
      title: this.#title,
      desc: this.#description,
      isCheck: this.#isCheck,
    })
    localStorage.setItem('todos', JSON.stringify(todosArray))
  }

  removeFromLocalStorage() {
    const todosArray = JSON.parse(localStorage.getItem('todos'))
    const removedThisArray = todosArray.filter(todo => todo._id !== this.#id)

    if (removedThisArray.length === 0)
      localStorage.removeItem('todos')
    else
      localStorage.setItem('todos', JSON.stringify(removedThisArray))
  }

  #addCompletedStyle(cardTODO, cardHeaderTODO) {
    cardTODO.classList.add(this.#completedStyle)
    cardHeaderTODO.classList.add(this.#completedStyle)
  }

  // Add a button that acts like a checkmark
  addCheckButton(checkButton) {
    const addCheckToLocalStorage = (value) => {
      const todosArray = JSON.parse(localStorage.getItem('todos'))
      const changeCheckArr = todosArray.map(todo => {
        if (todo._id === this.#id)
          todo.isCheck = value
        return todo
      })
      localStorage.setItem('todos', JSON.stringify(changeCheckArr))
    }

    const cardTODO = this.#TODONode.querySelector('.card')
    const cardHeaderTODO = this.#TODONode.querySelector('.card-header')
    const button = cardHeaderTODO.appendChild(checkButton)

    button.onclick = () => {
      if (this.#isCheck) {
        cardTODO.classList.remove(this.#completedStyle)
        cardHeaderTODO.classList.remove(this.#completedStyle)
      } else {
        this.#addCompletedStyle(cardTODO, cardHeaderTODO)
      }
      this.#isCheck = !this.#isCheck
      addCheckToLocalStorage(this.#isCheck)
    }
  }

  // Add a button that will remove the entire TODOElement node tree
  addDeleteButton(deleteButton, mask = null) {
    const cardHeaderTODO = this.#TODONode.querySelector('.card-header')
    const button = cardHeaderTODO.appendChild(deleteButton)

    const message = `Do you want to delete "${this.#title}"? this action is permanent.`

    button.onclick = (ev) => {
      ev.stopPropagation()

      const deletePanel = new ConfirmDeletePanel(message, mask)
      deletePanel.okAction = () => {
        deletePanel.close()
        this.#TODONode.remove()
        this.removeFromLocalStorage()
      }

      deletePanel.open()
    }
  }

  // The entire node structure of HTML elements that forms a TODOElement
  getTODONode() {
    return this.#TODONode
  }

  toString() {
    return 'This is a TODO element :)'
  }
}