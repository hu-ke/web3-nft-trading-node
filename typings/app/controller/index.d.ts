// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportNft = require('../../../app/controller/nft');

declare module 'egg' {
  interface IController {
    nft: ExportNft;
  }
}
