import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.topWrapper}>
      <Navbar />
      <section id="hero" className={styles.hero}>
        <div className="container">
          <div className={styles.heroInside}>

            <div className={styles.heroText}>
              <h1>Petualangan Itu Berharga</h1>
              <p>lorem</p>
            </div>

            <div className={styles.heroImg}>
              <Image
                src="/images/logo.png"
                alt="hmpl-logo"
                width={287}
                height={350}
              />

              <div className={styles.heroSoc}>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.layout = "default";
