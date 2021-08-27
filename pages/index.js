import Hero from '../components/Hero';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import DivisionCard from '../components/DivisionCard';

export default function Home() {
  return (
    <>
      <div className="topWrapper"></div>
      <Navbar />
      <Hero
        id="hero-home"
        title="Petualangan Berharga"
        summary="Menumbuhkan sikap ramah tamah, bela lingkungan, olah raga alam bebas, dan minat masyarakat untuk menumbuhkan semangat hidup yang penuh mengisi jiwa pemuda."
        image={true}
        link="/tentang-kami"
        button="Tentang Kami"
        socmed={true}
      />

      {/* Division Card */}
      <section id="divisi">
        <div className="container">
          <div className="heading-line center">
            <div className="line"></div>
            <h1>5 Divisi</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet. Sollicitudin posuere neque, non semper pharetra. Posuere
              pellentesque velit eget diam in facilisis eget sed pretium. Proin in vitae non orci feugiat leo auctor.</p>
          </div>
          <DivisionCard />
        </div>
      </section>

      {/* Pengurus */}
      <section id="pengurus">
        <div className="container">
          <div className="heading-line">
            <div className="line"></div>
            <h1>Pengurus</h1>
          </div>
        </div>
      </section>

      {/* 100KM section */}
      <section id="xpdc">
        <div className="videoWrapper">
          <video autoPlay muted loop id="myVideo">
            <source src="/videos/1000km.mp4" type="video/mp4" />
          </video>
        </div>
          <div className="container">
            <h1>XPDC 1000 KM Sungai Indonesia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet. Sollicitudin posuere neque, non semper pharetra.</p>
            <Link href="/river-guide">
              <a><button className="btn-primary">RIVER GUIDE</button></a>
            </Link>
          </div>
      </section>

        {/* Blog Card */}
        <section id="blog">
          <div className="container">
            <div className="heading-line center">
              <div className="line"></div>
              <h1>Blog</h1>
            </div>
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className={styles.kontak}>
          <div className="container grid-col two">
            <div>
              <div className="heading-line">
                <div className="line"></div>
                <h1>Mari Berpetualang Bersama Kami</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet.</p>
              </div>
            </div>
            <div>
              <Link href="/tentang-kami#kontak">
                <a>
                  <button className="btn-secondary">
                    Kontak Kami&nbsp;&nbsp;
                    <Image
                      src="/icons/mail.svg"
                      alt="mail"
                      width={24}
                      height={24}
                    />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
    </>
      )
}

      Home.layout = "default";
