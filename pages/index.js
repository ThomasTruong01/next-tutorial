import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Tutorial</title>
      </Head>
     <h1>Hello World</h1>
    </div>
  )
}
