'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner() {
  return `/*!
  * Marqueefy v${pkg.version} (${pkg.homepage})
  * Copyright ${year} ${pkg.author}
  * Licensed under MIT (https://github.com/marqueefy/marqueefy.github.io/blob/master/LICENSE)  
  */`
}

module.exports = getBanner
