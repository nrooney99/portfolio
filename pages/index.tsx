import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nico Rooney</title>
        <meta name="description" content="Nico Rooney's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <GoogleAnalytics />
      <Navbar />
      <Main />
    </>
  )
}
