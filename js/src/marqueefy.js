/**
 * --------------------------------------------------------------------------
 * Marqueefy (v1.0.1): marqueefy.js
 * Licensed under MIT (https://github.com/marqueefy/marqueefy.github.io/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './helpers/base-component'

const NAME = 'marqueefy'

const Default = {
  direction: 'left',
  speed: 100
}

const DefaultType = {
  direction: 'string',
  speed: 'number'
}

class Marqueefy extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._element = element
    this._config = this._getConfig(config)
    this.refresh()
  }

  static get NAME() {
    return NAME
  }

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  refresh() {
    const { direction } = this._config
    const { speed } = this._config

    this._element.setAttribute('data-mq-direction', direction)
    this._element.setAttribute('data-mq-speed', speed)

    const content = this._element.querySelector('.content')
    let distance = content.getBoundingClientRect().width

    if (direction === 'top' || direction === 'bottom') {
      distance = this._element.getBoundingClientRect().height
      this._element.style.setProperty('--mq-height', distance + 'px')
    }

    this._element.style.setProperty('--mq-animation-duration', (distance / speed) + 's')
  }
}

export default Marqueefy
