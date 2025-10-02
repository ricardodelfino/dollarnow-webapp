# DollarNow Web App

[!Deploy to Cloudflare Pages](https://pages.cloudflare.com/)
[!Built with Svelte](https://svelte.dev)
[!Powered by Vite](https://vitejs.dev)

**DollarNow** is a sleek, fast, and user-friendly currency converter web application. It provides real-time exchange rates for a wide range of fiat currencies and assets, with a clean interface and a delightful user experience.

The live version is available at: **dollarnow.pages.dev**

 <!-- TODO: Adicione um screenshot aqui -->

---

## ✨ Features

*   **Real-time Rates**: Fetches the latest currency exchange rates from a resilient API.
*   **Wide Currency Support**: Includes major fiat currencies and assets like Gold, Silver, and Bitcoin.
*   **Instant Conversion**: Two-way data binding for instant calculation as you type.
*   **Intuitive UI**: A clean, mobile-first design with easy-to-use controls.
*   **Theme Toggle**: Switch between a light and dark theme, with your preference saved locally.
*   **Persistent Preferences**: Remembers your last selected currency and view (inverted or not).
*   **Auto-Refresh**: Exchange rates are automatically updated every 90 seconds.

## 🛠️ Tech Stack

*   **Framework**: SvelteKit
*   **Language**: TypeScript
*   **Styling**: Plain CSS with CSS Variables for theming
*   **API Backend**: Cloudflare Workers
*   **Deployment**: Cloudflare Pages

## 🚀 Getting Started

### Prerequisites

*   Node.js (version 18.x or higher)
*   npm (or pnpm, yarn)

### Installation & Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ricardodelfino/dollarnow-webapp.git
    cd dollarnow-webapp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Building for Production

To create a production version of your app:

```sh
npm run build
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
