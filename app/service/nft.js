const { Service } = require('egg');

class NFTService extends Service {
  async find(uid) {
    const nft = await this.app.mysql.get('nfts', { id: uid });
    return { nft };
  }

  async getMintedNFTs(uris) {
    const nfts = await this.app.mysql.select('nfts', {
      where: {
        isMinted: true
      }
    });
    return nfts;
  }

  async ifNFTExisting(image) {
    const nfts = await this.app.mysql.select('nfts', {
      where: { 
       image
      },
    });
    console.log('nfts', nfts)
    return nfts.length > 0
  }

  async getMyNFTs(account) {
    // 查询 users 表中所有 account 为 123 的记录
    const nfts = await this.app.mysql.select('nfts', {
      where: { account },
    });
    return nfts;
  }

  async create(nft) {
    console.log('nft>', nft)
    const result = await this.app.mysql.insert('nfts', nft);
    return result;
  }

  async delete(nftId) {
    const result = await this.app.mysql.delete('nfts', {
      id: nftId
    })
    return result
  }

  async updateNFTAccount(nftId, account) {
    const result = await this.app.mysql.update('nfts', {
      account,
    }, {
      where: {
        id: nftId,
      },
    });
    return result
  }

  async updateNFTMintingStatus(nftId, isMinted) {
    const result = await this.app.mysql.update('nfts', {
      isMinted,
    }, {
      where: {
        id: nftId,
      },
    });
    return result
  }
}

module.exports = NFTService;
