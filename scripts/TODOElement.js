export class TODOElement {
  #title
  #description
  #isCheck
  #TODONode

  constructor(title, description, isCheck) {
    this.#title = title
    this.#description = description
    this.#isCheck = isCheck

    this.#TODONode = this.#createTODONode()
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

  // Add a button that acts like a checkmark
  addCheckButton(checkButton) {
    const cardTODO = this.#TODONode.querySelector('.card')
    const cardHeaderTODO = this.#TODONode.querySelector('.card-header')
    const button = cardHeaderTODO.appendChild(checkButton)

    button.onclick = () => {
      cardTODO.classList.add('completed-state')
      cardHeaderTODO.classList.add('completed-state')
      console.log(`'${this.#title}' check button clicked.`)
    }
  }

  // Add a button that will remove the entire TODOElement node tree
  addDeleteButton(deleteButton) {
    const cardHeaderTODO = this.#TODONode.querySelector('.card-header')
    const button = cardHeaderTODO.appendChild(deleteButton)
    button.onclick = () => this.#TODONode.remove()
  }

  // The entire node structure of HTML elements that forms a TODOElement
  getTODONode() {
    return this.#TODONode
  }

  toString() {
    return 'This is a TODO element :)'
  }
}