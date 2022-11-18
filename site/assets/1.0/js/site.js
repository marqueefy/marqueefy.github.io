/* global root, marqueefy, materialstyle, anchors, ClipboardJS, mdc */

(() => {
  'use strict'

  function updateUrl(target = 'installation') {
    window.history.pushState(target, '', `#${target}`)
  }

  window.addEventListener('popstate', event => {
    if (event.state) {
      showTab(`${event.state}-tab`)
    }
  })

  function showTab(tabName) {
    const siteTab = document.getElementById(tabName)
    const instance = materialstyle.Tab.getOrCreateInstance(siteTab)
    instance.show()

    showTableOfContents(tabName)

    const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
    dataSpyList.forEach(dataSpyEl => {
      const i = materialstyle.Scrollspy.getInstance(dataSpyEl)
      if (i) {
        i.refresh()
      }
    })
  }

  function showTableOfContents(tabName) {
    switch (tabName) {
      case 'installation-tab': {
        document.querySelector('#contents .nav').innerHTML =
        `<li class="nav-item"><a class="nav-link" href="#installation-cdn">CDN</a></li>
         <li class="nav-item"><a class="nav-link" href="#installation-npm">npm</a></li>
         <li class="nav-item"><a class="nav-link" href="#installation-download">Download</a></li>`

        root.setAttribute('data-color', 'green')

        break
      }

      case 'usage-tab': {
        document.querySelector('#contents .nav').innerHTML =
        '<li class="nav-item">Usage</li>'

        root.setAttribute('data-color', 'red')

        break
      }

      case 'options-tab': {
        document.querySelector('#contents .nav').innerHTML =
        `<li class="nav-item mb-2">Variants</li>
         <li class="nav-item"><a class="nav-link" href="#options-single-item">Single Item</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-multiple-items">Multiple Items</a></li>
         <li class="nav-item my-2">Directions</li>
         <li class="nav-item"><a class="nav-link" href="#options-left-default">Left (Default)</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-right">Right</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-top">Top</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-bottom">Bottom</a></li>
         <li class="nav-item my-2">Speed</li>
         <li class="nav-item"><a class="nav-link" href="#options-speed">Speed</a></li>
         <li class="nav-item my-2">Javascript</li>
         <li class="nav-item"><a class="nav-link" href="#options-configuration">Configuration</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-non-visible-elements">Non-visible elements</a></li>
         <li class="nav-item my-2">Customization</li>
         <li class="nav-item"><a class="nav-link" href="#options-background-color">Background color</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-border-radius">Border radius</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-border">Border</a></li>
         <li class="nav-item"><a class="nav-link" href="#options-font">Font</a></li>`

        root.setAttribute('data-color', 'indigo')

        break
      }

      case 'specs-tab': {
        document.querySelector('#contents .nav').innerHTML =
        `<li class="nav-item"><a class="nav-link" href="#specs-css-custom-properties">CSS custom properties</a></li>
        <li class="nav-item"><a class="nav-link" href="#specs-javascript-functions">Javascript functions</a></li>
        <li class="nav-item"><a class="nav-link" href="#specs-html-attributes">HTML attributes</a></li>`

        root.setAttribute('data-color', 'orange')

        break
      }
    // No default
    }
  }

  const siteTab = document.getElementById('site-tab')
  if (siteTab) {
    siteTab.addEventListener('shown.bs.tab', e => {
      // Initialize Marquees
      const marqueeList = Array.prototype.slice.call(document.querySelectorAll('.marqueefy:not([data-mq-direction="top"], [data-mq-direction="bottom"])'))
      marqueeList.map(m => {
        return new marqueefy.Marqueefy(m)
      })

      const marqueeListY = Array.prototype.slice.call(document.querySelectorAll('.marqueefy[data-mq-direction="top"], .marqueefy[data-mq-direction="bottom"]'))
      marqueeListY.map(m => {
        return new marqueefy.Marqueefy(m, { speed: 50 })
      })

      let target = e.target.dataset.bsTarget
      target = target.slice(1, target.indexOf('-'))

      if (!window.location.href.includes(target)) {
        updateUrl(target)
      }

      showTableOfContents(`${target}-tab`)

      const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
      dataSpyList.forEach(dataSpyEl => {
        const i = materialstyle.Scrollspy.getInstance(dataSpyEl)
        if (i) {
          i.refresh()
        }
      })
    })
  }

  const el = document.querySelector('.sticky-top')
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('container', e.intersectionRatio < 1),
    { threshold: [1] }
  )

  observer.observe(el)

  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash.includes('usage')) {
      showTab('usage-tab')
    } else if (window.location.hash.includes('options')) {
      showTab('options-tab')
    } else if (window.location.hash.includes('specs')) {
      showTab('specs-tab')
    } else if (window.location.hash.includes('installation')) {
      showTab('installation-tab')
    } else {
      updateUrl('installation')
      showTab('installation-tab')
    }

    const hTags = Array.prototype.slice.call(document.querySelectorAll('h3, h4'))
    hTags.forEach(h => {
      h.id = `${h.closest('.tab-pane').dataset.content}-${h.id}`
    })

    anchors.add('h3, h4')

    const h2 = Array.prototype.slice.call(document.querySelectorAll('h2'))
    h2.map(h => h.removeAttribute('id'))

    // Hide AdSpace
    const ad = document.querySelector('.adspace')
    if (ad) {
      ad.innerHTML = ''
      ad.style.display = 'none'
    }

    /**
     * Copy to clipboard
     */

    const copyBtnTitle = 'Copy to clipboard'

    const btnHtml = `<div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 rounded-top border">
      <small class="font-monospace text-theme-color text-uppercase">##lang##</small>
      <div class="d-flex ms-auto">
        <button type="button" class="copy-to-clipboard btn btn-outline-secondary btn-fab mini-fab border-0" title="Copy to clipboard">
          <i class="bi bi-clipboard2" role="img" aria-label="Copy"></i>
        </button>
      </div>
    </div>`

    // Add copy button to code blocks that were not created by shortcode
    for (const element of document.querySelectorAll('.highlight')) {
      if (!element.closest('.collapse')) {
        element.insertAdjacentHTML('beforebegin', btnHtml.replace('##lang##', element.querySelector('code').dataset.lang))
        element.classList.add('rounded-bottom', 'border', 'border-top-0')
      }
    }

    /**
     *
     * @param {string} selector
     * @param {string} title
     */
    function snippetButtonTooltip(selector, title) {
      for (const btn of document.querySelectorAll(selector)) {
        materialstyle.Tooltip.getOrCreateInstance(btn, { title })
      }
    }

    snippetButtonTooltip('.copy-to-clipboard', copyBtnTitle)

    const clipboard = new ClipboardJS('.copy-to-clipboard', {
      target: trigger => trigger.closest('.highlight-toolbar').nextElementSibling
    })

    clipboard.on('success', event => {
      const iconCopy = '<i class="bi bi-clipboard2" role="img" aria-label="Copy"></i>'
      const iconCopied = '<i class="bi bi-check2 text-green" role="img" aria-label="Copied"></i>'
      const originalTitle = event.trigger.title
      const tooltipBtn = materialstyle.Tooltip.getInstance(event.trigger)

      tooltipBtn.setContent({ '.tooltip-inner': 'Copied!' })

      event.clearSelection()
      event.trigger.title = 'Copied!'
      event.trigger.innerHTML = iconCopied

      setTimeout(() => {
        tooltipBtn.setContent({ '.tooltip-inner': copyBtnTitle })
        event.trigger.title = originalTitle
        event.trigger.innerHTML = iconCopy
      }, 2000)
    })

    clipboard.on('error', event => {
      const modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
      const fallbackMsg = `Press ${modifierKey}C to copy`
      const tooltipBtn = materialstyle.Tooltip.getInstance(event.trigger)

      tooltipBtn.setContent({ '.tooltip-inner': fallbackMsg })
      event.trigger.addEventListener('hidden.bs.tooltip', () => {
        tooltipBtn.setContent({ '.tooltip-inner': copyBtnTitle })
      }, { once: true })
    })

    // Initialize Ripple
    const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
    rippleSurface.map(s => {
      return new mdc.ripple.MDCRipple(s)
    })

    // Initialize Tabs
    const tabs = Array.prototype.slice.call(document.querySelectorAll('.nav-tabs'))
    tabs.map(tab => {
      return new materialstyle.MaterialTab(tab)
    })

    // Tooltip
    const tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(tooltipTriggerEl => {
      return new materialstyle.Tooltip(tooltipTriggerEl)
    })

    function setTabHeight() {
      document.documentElement.style.setProperty('--site-tab-height', `${document.querySelector('#site-tab').closest('.sticky-top').offsetHeight}px`)
    }

    setTabHeight()
    window.addEventListener('resize', setTabHeight)

    let i = 1
    const squiggles = Array.prototype.slice.call(document.querySelectorAll('.squiggle'))
    squiggles.forEach(s => {
      s.querySelector('pattern').setAttribute('id', `s${i}`)
      s.querySelector('rect').setAttribute('fill', `url(#s${i++})`)
    })

    document.querySelector('#specs-button').addEventListener('click', () => {
      showTab('specs-tab')
    })

  })
})()
