'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/test', controller.nft.test);
  router.post('/getMintedNFTs', controller.nft.getMintedNFTs);
  router.get('/getMyNFTs', controller.nft.getMyNFTs);
  router.post('/createNFT', controller.nft.create);
  router.post('/deleteNFT', controller.nft.delete);
  router.post('/updateNFTAccount', controller.nft.updateNFTAccount);
};
