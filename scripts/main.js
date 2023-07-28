const content = document.querySelector('.content')
const contentItems = content.querySelectorAll('.content-item')

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