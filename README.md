# Chat Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a chat application that allows users to register, log in, and chat in real-time.

## Features

- User Authentication (Login, Register, Logout)
- Real-time Chat using Socket.io
- Google OAuth Integration
- Form Validation with Yup
- State Management with React Context and React Query
- Tailwind CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chat-application.git
   cd chat-application
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

To run the application in production mode:

```bash
npm run start
# or
yarn start
```

## Project Structure

```plaintext
.env.local
.eslintrc.json
.gitignore
.next/
package.json
postcss.config.mjs
public/
README.md
src/
  app/
  appPage/
  components/
  constants/
  context/
  hooks/
  schemas/
  service/
  styles/
  types/
  utils/
tailwind.config.ts
tsconfig.json
```

### Key Directories and Files

- `src/app/`: Contains the main application components and pages.
- `src/appPage/SignIn.tsx`: Sign-in page component.
- `src/components/`: Contains reusable UI components.
- `src/context/`: Context providers for state management.
- `src/hooks/`: Custom hooks for API calls and other functionalities.
- `src/service/`: API service files.
- `src/styles/`: Global styles and Tailwind CSS configuration.
- `src/types/`: TypeScript type definitions.
- `src/utils/`: Utility functions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
