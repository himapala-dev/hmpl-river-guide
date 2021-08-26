import Hero from '../components/Hero';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <div className="topWrapper"></div>
      <Navbar />
        <Hero
          title="Petualangan Berharga"
          summary="Menumbuhkan sikap ramah tamah, bela lingkungan, olah raga alam bebas, dan minat masyarakat untuk menumbuhkan semangat hidup yang penuh mengisi jiwa pemuda."
          image={true}
          link="/tentang-kami"
          button="Tentang Kami"
          socmed={true}
        />

      {/* Division Card */}
      <section>
        Division
      </section>

      {/* Pengurus */}
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
