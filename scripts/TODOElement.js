// TODO Implement delete and check buttons

export class TODOElement {
  #title
  #description
  #isCheck
  #TODONode

  constructor(title, description, isCheck) {
    this.#title = title
    this.#description = description
    this.#isCheck = isCheck
  }

  createTODONode() {
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

  toString() {
    return 'This is a TODO element :)'
  }
}