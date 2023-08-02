import {MenuPanel} from './MenuPanel.js'

/*
* Script for managing the main menu panel, the button open it
* and the toggle theme button inside of it.
* */


// Change Theme Button
const body = document.querySelector('body')

if (localStorage.getItem('theme')) {
  body.classList.remove('light', 'dark')
  body.classList.add(localStorage.getItem('theme'))
}

const changeThemeButton = document.querySelector('.change-theme-button')

changeThemeButton.onclick = () => {
  if (body.classList.contains('light')) {
    changeThemeButton.textContent = 'light'
    body.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
  } else if (body.classList.contains('dark')) {
    changeThemeButton.textContent = 'dark'
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
  }
  changeThemeButton.blur()
}

// Body mask that activates when a panel is open
const bodyMask = document.querySelector('.mask')

// Manage the main menu panel
const mainMenu = document.getElementById('menu')
const mainMenuPanel = new MenuPanel(mainMenu, bodyMask)

document.getElementById('menu-button').onclick = ev => {
  ev.stopPropagation()
  mainMenuPanel.open()
}
