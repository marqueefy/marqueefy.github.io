/*!
  * Material Style marqueefy.js v1.0.0 (https://marqueefy.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
  * This a fork of Bootstrap: Initial license below
  *
  * Bootstrap marqueefy.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Marqueefy = factory());
})(this, (function () { 'use strict';

  class Marqueefy {
    constructor(marquee) {
      const marqueeWidth = marquee.getBoundingClientRect().width;
      const speed = 140;
      const time = marqueeWidth / speed;
      marquee.style.setProperty('--mq-animation-duration', time + 's');
    }

  }

  return Marqueefy;

}));
//# sourceMappingURL=marqueefy.js.map
