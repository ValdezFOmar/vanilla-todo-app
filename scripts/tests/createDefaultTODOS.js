import {TODOElement} from '../TODOElement.js'
import {checkmarkButton, trashcanButton} from '../IconButton.js'

const TODOsContainer = document.querySelector('.content')

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse finibus est at nunc elementum, non consectetur orci consectetur. 
Donec in arcu dolor. Proin sit amet ex non diam fringilla efficitur.
`

for (let i = 0; i < 10; i++) {
  const title = `Title ${i + 1}`
  const newTODO = new TODOElement(title, description, false)
  newTODO.addCheckButton(checkmarkButton.createButtonElement())
  newTODO.addDeleteButton(trashcanButton.createButtonElement())
  TODOsContainer.append(newTODO.getTODONode())
}