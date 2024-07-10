import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS + shadcn/ui</title>
        <meta name="description" content="Boilerplate for Next.js with Tailwind CSS and shadcn/ui" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Next.js + Tailwind CSS + shadcn/ui
        </h1>
        <p className="text-xl">
          Get started by editing <code className="font-mono bg-gray-100 p-1 rounded">src/pages/index.tsx</code>
        </p>
      </main>
    </>
  )
}