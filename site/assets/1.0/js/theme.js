/* global activeTheme, root, checkSystemTheme */

(() => {
  'use strict'

  document.querySelector('.btn-check[data-theme="auto"]').checked = true

  const setTheme = function (theme) {
    const themeButtons = Array.prototype.slice.call(document.querySelectorAll('.btn-check'))
    themeButtons.forEach(tb => {
      tb.checked = tb.dataset.theme === theme
    })
  }

  if (activeTheme) {
    setTheme(activeTheme)
  }

  const themeButtons = Array.prototype.slice.call(document.querySelectorAll('.btn-check'))
  themeButtons.forEach(tb => {
    tb.addEventListener('click', function () {
      const { theme } = this.dataset

      if (theme === 'auto') {
        root.removeAttribute('data-theme')
        localStorage.removeItem('theme')
        checkSystemTheme()
      } else {
        root.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
      }
    })
  })
})()
