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

In this project, we utilized the Zustand package for state management of toggled favorite states. The favorites are stored in the localStorage for persistent storage. To achieve this, we created a custom hook called useFavorite by employing the create, persist, and useJSONStorage functions.
</br>
For the styling aspect, we followed the mobile-first rule and incorporated a certain level of responsiveness. To accomplish this, we predominantly used Tailwind CSS while also incorporating some vanilla CSS techniques.
