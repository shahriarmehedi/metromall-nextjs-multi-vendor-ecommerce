import Head from 'next/head'
import Slider from '../components/HomeComponents/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MetroMall</title>
        <meta name="Best ecommerce platform" content="Ypur shopping destination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />

    </div>
  )
}
