<p align="center">
   <br> English | <a href="README-CN.md">中文</a>
</p>

# Web3 NFT Trading Node

This repository contains the backend API layer for the NFT asset generation and trading application deployed on the Sepolia network. The backend is implemented using Egg.js.

## Overview

The Web3 NFT Trading Node provides the server-side functionality required for the Web3 NFT Trading App. It provides APIs for the frontend application.

## Repositories

- **Frontend:** [web3-nft-trading-app](https://github.com/hu-ke/web3-nft-trading-app)
- **Backend:** [web3-nft-trading-node](https://github.com/hu-ke/web3-nft-trading-node)

## Features

- **API for NFT Generation:** Endpoints to create unique NFTs with customizable metadata.
- **API for NFT Trading:** Endpoints for buying, selling, and trading NFTs.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hu-ke/web3-nft-trading-node.git
   cd web3-nft-trading-node
   ```
2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```
3. Configure environment variables:
   Create a `.env` file in the root directory and add your environment variables. 
4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```
5. The server should be running at http://localhost:7001.

## Disclaimer
Please note that this application uses the Sepolia test network. Ensure that you are not using real ETH from the Ethereum mainnet for any transactions on this platform.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements, bug fixes, or new features.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact
If you have any questions or feedback, please open an issue or contact the repository owner.
