<p align="center">
   <br> <a href="README.md">English</a> | 中文
</p>

# Web3 NFT 交易节点

该仓库包含部署在 Sepolia 网络上的 NFT 资产生成和交易应用的后端 API 层。后端使用 Egg.js 实现。

## 概述

Web3 NFT 交易节点提供 Web3 NFT 交易应用所需的服务器端功能。它为前端应用提供 API。

## 仓库

- **前端：** [web3-nft-trading-app](https://github.com/hu-ke/web3-nft-trading-app)
- **后端：** [web3-nft-trading-node](https://github.com/hu-ke/web3-nft-trading-node)

## 功能

- **NFT 生成 API：** 创建具有可定制元数据的独特 NFT 的端点。
- **NFT 交易 API：** 买卖和交易 NFT 的端点。
- **区块链交互：** 与 Sepolia 测试网络上的以太坊区块链交互。
- **安全性：** 实现处理敏感数据和交易的安全最佳实践。

## 入门

### 前置条件

- Node.js
- npm 或 yarn
- MongoDB（或其他数据库）

### 安装

1. 克隆仓库：

   ```bash
   git clone https://github.com/hu-ke/web3-nft-trading-node.git
   cd web3-nft-trading-node
   ```
2. 安装依赖
   ```
   npm install
   # 或
   yarn install
   ```
3. 配置环境变量：
在根目录创建 `.env` 文件并添加您的环境变量。
4. 启动开发服务器：
   ```
   npm run dev
   # 或
   yarn dev
   ```
5. 服务器应运行在 http://localhost:7001。
## 免责声明
请注意，此应用使用的是 Sepolia 测试网络。确保您在此平台上进行交易时不使用以太坊主网上的真实 ETH。

## 贡献
欢迎贡献！请 fork 仓库并提交 pull request 以改进、修复错误或添加新功能。

## 许可证
此项目使用 MIT 许可证。详情请参见 LICENSE 文件。

## 联系方式
如果您有任何问题或反馈，请提交 issue 或联系仓库所有者。