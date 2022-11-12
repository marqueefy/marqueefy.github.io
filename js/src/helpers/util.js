/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`
  }

  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase()
}

const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false
  }

  return typeof object.nodeType !== 'undefined'
}

const getElement = object => {
  if (isElement(object)) {
    return object
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object)
  }

  return null
}

export {
  getElement,
  isElement,
  toType
}
