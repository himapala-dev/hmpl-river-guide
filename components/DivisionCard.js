import React from 'react'
import styles from '../styles/components/DivisionCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const divisionData = [{
    title: "Arung Jeram",
    summary: "Siapkan pengarunganmu. Tantang jerammu!",
    image: "/images/hero-banner.jpg"
},
{
    title: "Gunung Hutan",
    summary: "Pijakan jejak, gegapkan langkah!",
    image: "/images/gh.jpg"
},
{
    title: "Panjat Tebing",
    summary: "Berkawan kepal karst dan andesit.",
    image: "/images/rc.jpg"
},
{
    title: "Susur Gua",
    summary: "Merayap meyelami zona gelap abadi.",
    image: "/images/caving.jpg"
},
{
    title: "Selam",
    summary: "Sedalam hati laut, diam tak berbatas",
    image: "/images/diving.jpg"
},
]

function DivisionCard() {
    return (
        <>
            <div className={styles.divisionLists}>
                {divisionData.map((e, i) => (
                    <React.Fragment key={i}>
                        <div className={`${e.title == "Arung Jeram" ? styles.cardDivision : styles.raftingCard}`}>
                            <div className={styles.cardThumbnail}>
                                <div className={styles.bgWrapper}>
                                    <Image
                                        src={e.image}
                                        alt="division img"
                                        layout="fill"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL={e.image}
                                    />
                                </div>
                                <div className={styles.cardText}>
                                    <div className={styles.textInside}>
                                        <h4>{e.title}</h4>
                                        <p>{e.summary}</p>
                                        {e.title == "Arung Jeram" ? (
                                            <Link href="/river-guide">
                                                <a>
                                                    <button className="btn-primary">RIVER GUIDE</button>
                                                </a>
                                            </Link>
                                        ) : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default DivisionCard
