import styles from '../styles/components/Hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import SocmedLists from './SocmedLists'

function Hero({ title, summary, image, link, button, socmed }) {
    return (
        <>
            <section id="hero" className={styles.hero}>
                <div className="container">
                    <div className={styles.heroInside}>

                        <div>
                            <div className={styles.heroText}>
                                <h1>{title}</h1>
                                <p>{summary}</p>
                            </div>

                            <div className={styles.heroBtnContainer}>
                                <Link href={link}>
                                    <a><button className="btn-primary">{button}</button></a>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className={styles.heroImg}>
                                <Image
                                    src={`${image == true ? '/images/logo.png' : ""}`}
                                    alt="hmpl-logo"
                                    width={287}
                                    height={350}
                                />
                            </div>

                            <div className={styles.heroSoc}>{socmed == true ? (
                                <SocmedLists
                                    facebook="https://www.facebook.com/hmpl.unesa/"
                                    instagram="https://www.instagram.com/himapala.unesa/"
                                    twitter="https://twitter.com/hmpl_unesa"
                                    linkedin="https://www.linkedin.com/company/himapala-unesa/"
                                />
                            ) : ""
                            }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
