# Next.js + Tailwind CSS + shadcn/ui Boilerplate

This is a boilerplate project for Next.js with Tailwind CSS and shadcn/ui integration.

## Features

- [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static websites
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-tailwind-shadcn-boilerplate.git
cd nextjs-tailwind-shadcn-boilerplate
```

2. Install the dependencies:

```bash
pnpm install
```

### Development

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:

```bash
pnpm build
```

### Start

To start the production server:

```bash
pnpm start
```

## Project Structure

```
nextjs-tailwind-shadcn-boilerplate/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── public/
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Adding shadcn/ui Components

To add shadcn/ui components, use the shadcn/ui CLI:

```bash
pnpm dlx shadcn-ui@latest add button
```

Replace `button` with the name of the component you want to add.

## Customization

- Modify `tailwind.config.js` to customize your design tokens and add new utility classes.
- Update `src/styles/globals.css` to add your own custom styles.
- Create new components in the `src/components/` directory.
- Add new pages in the `src/pages/` directory.

## Learn More

To learn more about the technologies used in this boilerplate, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).