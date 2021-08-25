import Hero from '../components/Hero';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      <section>
        Division
      </section>

      {/* Pengurus */}
      <section>
        Pengurus
      </section>
      <section>
        Pengurus
      </section>
      <section>
        Pengurus
      </section>
      <section>
        Pengurus
      </section>
      <section>
        Pengurus
      </section>
      <section>
        Pengurus
      </section>

      {/* 100KM section */}
      <section>
        1000km
      </section>

      {/* Blog Card */}
      <section>
        blog
      </section>

      {/* Kontak */}
      <section>
        kontak
      </section>
    </>
  )
}

Home.layout = "default";
