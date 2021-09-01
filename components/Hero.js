import styles from '../styles/components/Hero.module.scss'
import Logo from '../public/images/logo.png'
import SocmedLists from './SocmedLists'
import CustomLink from './CustomLink'
import Image from './Image'

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
                                <CustomLink href={link}>
                                    <a><button className="btn-primary">{button}</button></a>
                                </CustomLink>
                            </div>
                        </div>

                        <div>
                            {image ? (
                                <div className={styles.heroImg}>
                                <Image
                                    src={Logo}
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
