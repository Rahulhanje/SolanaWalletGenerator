# Solana Wallet Generator

A modern, secure web application for generating and managing Solana wallets with hierarchical deterministic (HD) key derivation. Built with Next.js 14, TypeScript, and the Solana Web3.js library.

## ✨ Features

- 🔐 **Secure Wallet Generation**: Create multiple Solana wallets from a single mnemonic phrase using BIP39 and BIP44 standards
- 🔑 **HD Key Derivation**: Hierarchical deterministic wallet generation following the `m/44'/501'/0'/x'` derivation path
- 💾 **Local Storage**: Wallets and recovery phrases are stored securely in your browser's local storage
- 👁️ **Private Key Protection**: Toggle visibility of private keys with eye icon controls
- 📋 **Easy Copy**: One-click copy functionality for mnemonic phrases
- 🗑️ **Wallet Management**: Add or remove individual wallets, or clear all wallets at once
- 🎨 **Modern UI**: Clean, responsive interface built with TailwindCSS and Radix UI components
- ⚡ **Fast & Lightweight**: Built on Next.js 14 with optimized performance

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rahulhanje/SolanaWalletGenerator.git
cd SolanaWalletGenerator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📖 Usage

### Creating Your First Wallet

1. **Generate Wallet**: Click the "Add Wallet" button to generate your first Solana wallet
2. **Save Recovery Phrase**: Your secret recovery phrase (mnemonic) will be displayed at the top. **Save it securely** - this is the only way to recover your wallets
3. **View Keys**: Each wallet displays its public key and private key (hidden by default)
4. **Add More Wallets**: Click "Add Wallet" again to generate additional wallets from the same mnemonic

### Managing Wallets

- **Show/Hide Private Key**: Click the eye icon to toggle private key visibility
- **Copy Mnemonic**: Click the copy icon next to your recovery phrase to copy it to clipboard
- **Delete Individual Wallet**: Click the trash icon on any wallet card to remove it
- **Clear All Wallets**: Click "Clear Wallets" to remove all wallets and start fresh with a new mnemonic

### Security Best Practices

⚠️ **Important Security Notes:**
- Never share your mnemonic phrase or private keys with anyone
- Store your recovery phrase in a secure location (offline is recommended)
- This application stores data in browser local storage - clearing browser data will delete your wallets
- Always backup your mnemonic phrase before clearing wallets
- This is a client-side application - your keys never leave your browser

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Blockchain**: [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) - Solana JavaScript API
- **Cryptography**:
  - [bip39](https://github.com/bitcoinjs/bip39) - Mnemonic phrase generation
  - [ed25519-hd-key](https://github.com/alepop/ed25519-hd-key) - HD key derivation for Ed25519
  - [tweetnacl](https://github.com/dchest/tweetnacl-js) - Cryptographic signing
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [Lucide React](https://lucide.dev/) - Icon library
- **Styling**: [class-variance-authority](https://cva.style/) & [clsx](https://github.com/lukeed/clsx) - Conditional styling utilities

## 📁 Project Structure

```
SolanaWalletGenerator/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── wallethanler.tsx   # Main wallet generation logic
│   ├── WalletCard.tsx     # Individual wallet display
│   ├── mnemonicCard.tsx   # Recovery phrase display
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
│   └── use-toast.ts       # Toast notification hook
├── lib/                   # Utility functions
│   └── utils.ts           # Helper utilities
└── package.json           # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests where applicable.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 🐛 Known Issues

If you encounter any issues with the application, please check:
- Browser console for error messages
- Ensure JavaScript and local storage are enabled in your browser
- Try clearing browser cache and local storage if wallets aren't loading correctly

## 📞 Support & Contact

For questions, feedback, or support:
- **Email**: rahulhanje0.7@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/Rahulhanje/SolanaWalletGenerator/issues)

## ⚖️ License

This project is open source and available for educational and personal use. Please ensure you understand the security implications of managing cryptocurrency wallets.

## 🙏 Acknowledgments

- Built with [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [TailwindCSS](https://tailwindcss.com/)

---

**⚠️ Disclaimer**: This wallet generator is provided as-is for educational purposes. Always exercise caution when handling cryptocurrency wallets and private keys. The developers are not responsible for any loss of funds. 
