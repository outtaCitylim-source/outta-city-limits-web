# Outta City Limits Web

This repository contains the source code for the **Outta City Limits** web application.  The goal of the app is to provide a modern, unified platform for cataloging and selling coins, collectibles, motorcycles and other items under the Outta City Limits brand.  The site is built using the [Next.js](https://nextjs.org/) App Router with [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and is designed to deploy easily to [Vercel](https://vercel.com/).

## Getting Started

These instructions assume you have **Node 18 LTS or newer** installed locally.  To run the project on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Visit http://localhost:3000 in your browser
```

> **Note:** Since this repository is delivered as a skeleton without installed packages, you must run `npm install` on your own machine to fetch dependencies.  The `node_modules` folder is intentionally omitted.

## Project Structure

```
outta-city-limits-web/
├── app/              # App Router directory for pages and layouts
│   ├── inventory/    # Inventory dashboard
│   │   └── page.tsx  # Inventory page
│   ├── reference/    # Coin reference database
│   │   └── page.tsx
│   ├── collection/   # Customer collection portal
│   │   └── page.tsx
│   ├── tools/        # Whatnot and marketing tools
│   │   └── page.tsx
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global CSS
├── components/       # Reusable React components
│   ├── NavBar.tsx
│   └── Footer.tsx
├── lib/              # Utility functions and types
├── public/           # Static assets (images, icons, etc.)
├── package.json      # Project metadata and scripts
├── tsconfig.json     # TypeScript configuration
├── next.config.mjs   # Next.js configuration
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js# Tailwind configuration
└─ README.md         # You are here
```

## Roadmap

This starter only includes placeholder pages.  To complete the Outta City Limits app you will need to implement the following features:

1. **Inventory Dashboard** – Create forms and tables to add, edit and view inventory items.  Track cost, asking price, sold price, profit and status (available, pending, sold, archived).
2. **Coin Reference Database** – Populate the `reference` section with information on Morgan dollars, Peace dollars, Lincoln cents, large cents, bullion and world coins.  Include mintage data, variety notes and certification information.
3. **Customer Collection Portal** – Allow users to register/login, add their own coins, manage a wishlist and see estimated collection value.  This should eventually integrate with Outta City Limits inventory to facilitate purchases.
4. **Whatnot & Seller Tools** – Build tools to generate show boards, spin board odds, item descriptions, and review request links.
5. **Marketing Dashboard** – Provide templates and automation for social posts, marketplace listings and follow‑up messages.
6. **Styling & Branding** – Replace placeholder text with Outta City Limits content and apply a cohesive, glassy UI using Tailwind CSS.
7. **Database & Auth** – Integrate a backend such as Supabase or Firebase for storing data and handling user authentication.

## Deployment

You can deploy the project to Vercel by connecting this GitHub repository to your Vercel account.  Vercel will detect the Next.js app automatically and build/deploy it on every push to `main`.

1. Create a free account on [Vercel](https://vercel.com/) if you don't already have one.
2. In Vercel, import this repository.
3. For the framework preset, select **Next.js** and accept the defaults.
4. Once deployed, updates pushed to the `main` branch will trigger new builds.

## Contributing

Pull requests are welcome!  If you have improvements or bug fixes, please create a feature branch, make your changes, and open a PR.  When planning larger features, it’s helpful to open an issue first to discuss your approach.
