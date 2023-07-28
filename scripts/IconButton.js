class IconButton {
  #classStyle = 'icon-button'
  #additionalStyle
  #name
  #iconImage

  constructor(iconImage, name, classStyle = '') {
    this.#name = name
    this.#additionalStyle = classStyle
    this.#iconImage = iconImage
  }

  createButtonElement() {
    const buttonElement = document.createElement('button')

    buttonElement.append(this.#iconImage.createImgElement())
    buttonElement.name = this.#name
    buttonElement.classList.add(this.#classStyle)

    if (this.#additionalStyle)
      buttonElement.classList.add(this.#additionalStyle)

    return buttonElement
  }

}

class IconImage {
  src
  alt
  #classStyle = 'icon-image'

  constructor(src, alt) {
    this.src = src
    this.alt = alt
  }

  createImgElement() {
    const imgElement = document.createElement('img')
    imgElement.src = this.src
    imgElement.alt = this.alt
    imgElement.classList.add(this.#classStyle)

    return imgElement
  }
}

const checkmarkIcon = new IconImage('icons/check-solid.svg', 'Icon of a green check mark')
const trashcanIcon = new IconImage('icons/trash-solid.svg', 'Icon of a red trash can')

export const checkmarkButton = new IconButton(checkmarkIcon, 'completed', 'completed')
export const trashcanButton = new IconButton(trashcanIcon, 'delete', 'delete')