import Hero from '../components/Hero';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import dynamic from 'next/dynamic'
import Loading from '../components/Loading';
import { Icons, Images } from '../public';
import Image from '../components/Image';
import CustomLink from '../components/CustomLink';
import { useState } from 'react';
import Buttons from '../components/Button';

const DivisionCard = dynamic(() => import("../components/DivisionCard"), { loading: () => <Loading loading={true} /> })
const BlogCard = dynamic(() => import("../components/BlogCard"), { loading: () => <Loading loading={true} /> })
const PengurusCarousel = dynamic(() => import('../components/PengurusCarousel'), { loading: () => <Loading loading={true} /> })

const blogData = Array(3).fill({
  title: "Lorem Ipsum",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet. Sollicitudin posuere neque, non semper pharetra.",
  image: "https://picsum.photos/seed/picsum/200/300"
})

export default function Home() {
  const [data, setData] = useState(blogData)
  return (
    <>
      <div className="topWrapper">
        <div className="bgWrapper">
          <Image
            src={Images.HeroBanner}
            alt="img-banner"
          />
        </div>
      </div>
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
        <div className="container text-center">
          <div className="heading-line center">
            <div className="line center"></div>
            <h1>5 Divisi</h1>
            <p>5 konsentrasi peminatan, pelatihan ruang, lapangan oleh instruktur dan alumni. Mendayagunakan anggota tiap divisi mencapai profesionalitas olahraga alam, beretika lingkungan, dan berwawasan kemasyarakatan.</p>
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
          <PengurusCarousel />
        </div>
      </section>

      {/* 100KM section */}
      <section id="xpdc">
        <video autoPlay muted loop id="myVideo" loading="lazy" preload="auto" playsInline className="styles.videoBanner">
          <source src={`${process.env.BACKEND_URL}/videos/1000km.mp4`} type="video/mp4" />
        </video>
        <div className="container text-center">
          <h1>XPDC 1000 KM Sungai Indonesia</h1>
          <p>Mimpi Himapala untuk Indonesia. Proyek 1000 km bertajuk basis data arung jeram. Eksplor pengarunganmu disini!!</p>
          <CustomLink href="/river-guide">
            <a>
              <Buttons className="btn-primary" title="RIVER GUIDE" /> 
            </a>
          </CustomLink>
        </div>
      </section>

      {/* Blog Card */}
      <section id="blog">
        <div className="container">
          <div className="heading-line text-center center">
            <div className="line center"></div>
            <h1>Blog</h1>
          </div>
          <div className={styles.cardBlogContainer}>
            {data.map(function (blog, idx) {
              return (
                <BlogCard
                  key={idx}
                  href="/blog/[id]"
                  src={blog.image}
                  title={blog.title}
                  summary={blog.summary}
                />
              )
            })}
          </div>
          <CustomLink href="/blog">
            <a>
              <Buttons 
                className="btn-secondary center"
                title="Lihat Semua"
              >
                <Image src={Icons.ArrowRight} alt="right-arrow" sprite="sprite" />
              </Buttons>
            </a>
          </CustomLink>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className={styles.kontak}>
        <div className="container grid-col two">
          <div>
            <div className="heading-line">
              <div className="line"></div>
              <h1>Berpetualang Bersama Kami</h1>
              <p>Bingkai jelajah nusantara lekat dengan asa dalam potret kolaborasi.</p>
            </div>
          </div>
          <div>
            <CustomLink href="/tentang-kami/kontak">
              <a>
              <Buttons 
                className="btn-secondary"
                title="Kontak Kami"
              >
                <Image
                    src={Icons.Mail}
                    alt="mail"
                    sprite="sprite"
                  />
              </Buttons>
              </a>
            </CustomLink>
          </div>
        </div>
      </section>
    </>
  )
}

Home.layout = "default";
