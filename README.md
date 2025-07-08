# 🪙 Rely Exchange — Frontend

Welcome to the **frontend for Rely Exchange**, a fast and elegant decentralized exchange (DEX) interface. This project delivers a clean user experience for swapping tokens and interacting with the blockchain in real time.

---

## 🚀 Features

- 🔁 Swap tokens seamlessly
- 💼 Wallet connection (MetaMask, WalletConnect)
- 📊 Token stats and charts
- ⚡ Fast load times with Vite
- 🌙 Light/dark mode (if supported)
- 📱 Fully responsive for mobile & desktop

---

## 🧱 Tech Stack

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 💅 [Tailwind CSS](https://tailwindcss.com/)
- 🧠 Web3 via [ethers.js](https://docs.ethers.org/) or [wagmi.sh](https://wagmi.sh/) *(if used)*
- 🎨 Heroicons or Lucide (for icons)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/rely-frontend.git
cd rely-frontend
```

### 2. Install dependencies

Make sure you're using **Node.js 18+**.

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

---

## ⚙️ Environment Variables

You can define runtime settings in a `.env` file at the root.

Create `.env` based on the provided `.env.example`:

```bash
cp .env.example .env
```

Fill in the variables as needed:

```env
VITE_API_URL=https://api.rely.exchange
VITE_CONTRACT_ADDRESS=0xYourSmartContract
VITE_CHAIN_ID=1
```

You can access these in code via `import.meta.env.VITE_...`.

---

## 📁 Project Structure

```bash
rely-frontend/
├── public/              # Static files
├── src/
│   ├── assets/          # Icons, images
│   ├── components/      # UI components (buttons, cards, etc.)
│   ├── pages/           # App pages and routes
│   ├── App.jsx          # Main app layout
│   └── main.jsx         # Entry point
├── .env.example         # Sample environment file
├── index.html           # HTML template
├── package.json         # Scripts and dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

---

## 🌐 Deployment

You can deploy this frontend to any static hosting service like:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- AWS S3 + CloudFront

> If you need help deploying to Vercel, just run:

```bash
npx vercel
```

---

## 🤝 Contributing

We welcome community contributions!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Create a pull request

---

## 📄 License

This project is licensed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

## 📧 Contact

For questions, ideas, or collaborations:

- 📩 Email: [team@rely.exchange](mailto:team@rely.exchange)
- 🌐 Website: [https://rely.exchange](https://rely.exchange) *(coming soon)*

---

## ⭐️ Support

If you find this project useful:

- Give us a ⭐️ on GitHub
- Share it with others building in Web3
- Contribute improvements!
