/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (value === Number(value).toString()) {
    return Number(value)
  }

  if (value === '' || value === 'null') {
    return null
  }

  if (typeof value !== 'string') {
    return value
  }

  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return value
  }
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-mq-${normalizeDataKey(key)}`, value)
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-mq-${normalizeDataKey(key)}`)
  },

  getDataAttributes(element) {
    if (!element) {
      return {}
    }

    const attributes = {}
    const mqKeys = Object.keys(element.dataset).filter(key => key.startsWith('mq') && !key.startsWith('mqConfig'))

    for (const key of mqKeys) {
      let pureKey = key.replace(/^mq/, '')
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length)
      attributes[pureKey] = normalizeData(element.dataset[key])
    }

    return attributes
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-mq-${normalizeDataKey(key)}`))
  }
}

export default Manipulator
