import Hero from '../components/Hero';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <div className={styles.topWrapper}>
        <Navbar />

        <Hero
          title="Petualangan Berharga"
          summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image={true}
          link="/tentang-kami"
          button="Tentang Kami"
          socmed={true}
        />
      </div>

      {/* Division Card */}

      {/* Pengurus */}

      {/* 100KM section */}

      {/* Blog Card */}

      {/* Kontak */}

      {/* Footer */}
    </>
  )
}

Home.layout = "default";
