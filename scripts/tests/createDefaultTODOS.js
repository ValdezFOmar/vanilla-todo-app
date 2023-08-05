import {TODOElement} from '../TODOElement.js'
import {checkmarkButton, trashcanButton} from '../IconButton.js'

const bodyMask = document.querySelector('.mask')
const TODOsContainer = document.querySelector('.content')

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse finibus est at nunc elementum, non consectetur orci consectetur. 
Donec in arcu dolor. Proin sit amet ex non diam fringilla efficitur.
`

for (let i = 0; i < 10; i++) {
  const title = `Title ${i + 1}`
  const start = 0
  const end = Math.floor(Math.random() * description.length)
  const descriptionSlice = description.slice(start, end)

  const newTODO = new TODOElement(title, descriptionSlice, false)
  newTODO.addCheckButton(checkmarkButton.createButtonElement())
  newTODO.addDeleteButton(trashcanButton.createButtonElement(), bodyMask)
  TODOsContainer.append(newTODO.getTODONode())
}