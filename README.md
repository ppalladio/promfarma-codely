This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run test:
```bash
npm test
```

To view test coverage:
```bash
npm test -- --coverage
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

this project used zustand package for the state management of the toggled favourite states, and keep them in the localStorage, to be more specific, a hook called useFavorite is created using create, persist and useJSONStorage functions.
the styling is done following the mobile-first rule and a certain degree of responsiveness was applied where Tailwindcss was adapted majorly and combined with some vanilla CSS.
