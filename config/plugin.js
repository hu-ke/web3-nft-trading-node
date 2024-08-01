'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  security: {
    enable: true,
    package: 'egg-security',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};
