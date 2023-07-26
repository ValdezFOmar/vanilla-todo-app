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