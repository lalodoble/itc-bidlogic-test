## Upgrading Plan

To upgrade your plan, send us your order ID to pouya@dasiyui.com.
We will then provide you with a discount code so you won't have to pay the full price.

# Nexus - Client & Admin Dashboard

## Package

Thank you for purchasing Nexus Admin. I hope it's going to be helpful for you.
Please share your feedback by filling out [the form](https://forms.gle/UeX3jgsjFNFcZsq9A)

### Please refer [online documentation](https://nexus.daisyui.com/docs/) for full details

## Using the template

This HTML template doesn't need a build step on your server.
It means you can use it as an HTML file with any server or any programming language.
After buildint the pages locally (`npm i && npm run build`), open the `/html/index.html` file in your browser and it works.
To use it on the server, you can put the files from `/html` folder on your server and it works.  
You can also use it with any server-side language like PHP, Ruby, Python, etc. to add dynamic content.

## Build from source

If you want to modify the partials or styles, you can build the project from source. This step needs Node.js but you can build it once and then use the files from `/html` directory without Node.js or build steps.

### Using NPM

1. Install dependencies

```
npm install
```

2. Run the dev server

```
npm run dev
```

3. Or build and preview:

```
npm run build
npm run start
```

### Using Yarn

1. Install dependencies

```
yarn
```

2. Run the dev server

```
yarn dev
```

3. Or build and preview:

```
yarn build
yarn start
```

### Using Bun

1. Install dependencies

```
bun i
```

2. Run the dev server

```
bun run dev
```

3. Or build and preview:

```
bun run build
bun run start
```

Note: It is compatible with all 3 major package managers (NPM, Yarn & Bun)
We recommended using bun for faster deps installation

# IT Crowd Backoffice - Next.js Version

This is a [Next.js](https://nextjs.org/) version of the IT Crowd Backoffice application, converted from a Vite HTML project.

## Features

- Modern React components using Next.js App Router
- TypeScript support
- TailwindCSS for styling
- DaisyUI component library
- Responsive UI with mobile support
- Iconify for icons

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- `/` - Dashboard with statistics and charts
- `/rfq-listing` - RFQ listing with filtering and pagination
- `/rfq-form` - RFQ form for creating/editing RFQs
- `/form` - Form elements showcase

## Project Structure

- `src/app/*` - Next.js App Router pages
- `src/components/*` - React components
- `src/components/layout/*` - Layout components (Sidebar, Topbar)
- `src/components/dashboard/*` - Dashboard specific components
- `src/components/rfq/*` - RFQ related components
- `src/components/form/*` - Form components

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [DaisyUI](https://daisyui.com/) - UI component library
- [Iconify](https://iconify.design/) - Icons
- [ApexCharts](https://apexcharts.com/) - Charts

## Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run linter
- `yarn format` - Format code with Prettier
