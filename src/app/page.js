import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className={styles.ttl}>CUBE</h1>
      <p className={styles.description}>アウトプットしていく</p>
    </div>
  )  
}
