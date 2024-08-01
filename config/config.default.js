/* eslint valid-jsdoc: "off" */
require('dotenv').config();

'use strict';
// var path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_aa';

  // add your middleware config here
  config.middleware = [];

  config.cors = {
    // origin: '*',
    origin: 'http://localhost:5173',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.security = {
    domainWhiteList: [ 'http://localhost:5173' ], // 允许访问的白名单地址列表
    csrf: {
      enable: false,
    },
  };

  config.mysql = {
    client: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    app: true,
    agent: false,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
