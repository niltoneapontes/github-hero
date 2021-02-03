import Head from 'next/head'
import theme from '../styles/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{fontFamily: theme.fonts.title}}>Isso é um título</h1>
      <h1 style={{fontFamily: theme.fonts.text}}>Isso não é um título</h1>
    </>
  )
}
