import styles from '../styles/components/Hero.module.scss'
import Logo from '../public/images/logo.png'
import Link from 'next/link'
import SocmedLists from './SocmedLists'

function Hero({ id, title, summary, image, link, button, socmed }) {
    return (
        <>
            <section id={id} className={styles.hero}>
                <div className="container">
                    <div className={styles.heroInside}>

                        <div>
                            <div className={styles.heroText}>
                                <h1>{title}</h1>
                                <p>{summary}</p>
                            </div>

                            <div className={styles.heroBtnContainer}>
                                <Link href={link} as={ process.env.BACKEND_URL + link}>
                                    <a><button className="btn-primary">{button}</button></a>
                                </Link>
                            </div>
                        </div>

                        <div>
                            {image ? (
                                <div className={styles.heroImg}>
                                <img
                                    src={`${Logo.src}?lqip-colors[#A4A4A4]`}
                                    alt="hmpl-logo"
                                    width="287"
                                    height="350"
                                />
                            </div>
                            ) : ""}

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
