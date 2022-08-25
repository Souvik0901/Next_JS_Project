
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import Intro from '../Components/Intro'
import Info from '../Components/Info'
import Stats from '../Components/Stats'
import Applink from '../Components/Applink'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>H4U</title>
        <meta name="description" content="Best Health for You" />
      </Head>
      <Navbar/>
      <Intro/>
      <Info/>
      <Stats/>
      <Applink/>
      
      
      
    </div>
  )
}