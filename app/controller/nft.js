const { Controller } = require('egg');

class NFTController extends Controller {
  async test() {
    const { ctx } = this;
    ctx.body = 'hello test'
  }

  async getMintedNFTs() {
    const { ctx } = this;
    const nfts = await ctx.service.nft.getMintedNFTs();
    ctx.body = {
      msg: 'success',
      code: 200,
      data: nfts
    };
  }

  async getMyNFTs() {
    const { ctx } = this;
    const account = ctx.query.account
    const nfts = await ctx.service.nft.getMyNFTs(account);
    ctx.body = {
      msg: 'success',
      code: 200,
      data: nfts
    }
  }

  async create() {
    const { ctx } = this;
    const nft = ctx.request.body;
    if (await ctx.service.nft.ifNFTExisting(nft.image)) {
      ctx.body = {
        code: 400,
        msg: `The NFT with image url: ${nft.image} has been created before.`,
        data: null
      }
      return
    }
    const result = await ctx.service.nft.create(nft);
    if (result.insertId) {
      ctx.body = {
        code: 200,
        msg: 'Operation is successful',
        data: null
      };
    } else {
      ctx.body = {
        code: 500,
        msg: 'Operation failed',
        data: null
      };
    }
  }

  async delete() {
    const { ctx } = this;
    const nft = ctx.request.body;
    const result = await ctx.service.nft.delete(nft.id);
    console.log('result', result)
    if (result.affectedRows > 0) {
      ctx.body = {
        code: 200,
        msg: 'Deletion is successful',
        data: null
      }
    } else {
      ctx.body = {
        code: 500,
        msg: 'Operation failed',
        data: null
      };
    }
  }

  async updateNFTAccount() {
    const { ctx } = this;
    const { nftId, account } = ctx.request.body;
    const result = await ctx.service.nft.updateNFTAccount(nftId, account);
    if (result.affectedRows === 1) {
      ctx.body = {
        code: 200,
        msg: 'Account updated successfully',
      };
    } else {
      ctx.body = {
        code: 500,
        msg: 'Failed to update account',
      };
    }
  }

  async updateNFTMintingStatus() {
    const { ctx } = this;
    const { nftId, isMinted } = ctx.request.body;
    const result = await ctx.service.nft.updateNFTMintingStatus(nftId, isMinted);
    if (result.affectedRows === 1) {
      ctx.body = {
        code: 200,
        msg: 'Minting Status updated successfully',
      };
    } else {
      ctx.body = {
        code: 500,
        msg: 'Failed to update account',
      };
    }
  }
}

module.exports = NFTController;
