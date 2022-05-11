import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import StakeDetails from '../components/StakeDetails'
import StakeForm from '../components/StakingForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stake App</title>
        <meta name="description" content="Sirinu staking app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <Header />
        <StakeDetails />
        <StakeForm />
      </div>
    </div>
  )
}
