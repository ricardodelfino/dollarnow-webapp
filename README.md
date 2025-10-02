# DollarNow Web App

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Svelte" src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" />
</p>

**DollarNow** is a sleek, fast, and user-friendly currency converter web application. It provides real-time exchange rates for a wide range of fiat currencies and assets, with a clean interface and a delightful user experience.

The live version is available at: **[dollarnow.pages.dev](https://dollarnow.pages.dev)**

 <!-- TODO: Add a screenshot of the app here -->

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

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
