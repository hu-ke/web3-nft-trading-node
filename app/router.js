'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/test', controller.nft.test);
  router.get('/api/getMintedNFTs', controller.nft.getMintedNFTs);
  router.get('/api/getMyNFTs', controller.nft.getMyNFTs);
  router.post('/api/createNFT', controller.nft.create);
  router.post('/api/deleteNFT', controller.nft.delete);
  router.post('/api/updateNFTAccount', controller.nft.updateNFTAccount);
};
