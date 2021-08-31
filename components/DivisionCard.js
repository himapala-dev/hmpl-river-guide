import React from 'react'
import styles from '../styles/components/DivisionCard.module.scss'
import Link from 'next/link'

const divisionData = [{
    title: "Arung Jeram",
    summary: "Siapkan pengarunganmu. Tantang jerammu!",
    image: "hero-banner.jpg"
},
{
    title: "Gunung Hutan",
    summary: "Pijakan jejak, gegapkan langkah!",
    image: "gh.jpg"
},
{
    title: "Panjat Tebing",
    summary: "Berkawan kepal karst dan andesit.",
    image: "rc.jpg"
},
{
    title: "Susur Gua",
    summary: "Merayap meyelami zona gelap abadi.",
    image: "caving.jpg"
},
{
    title: "Selam",
    summary: "Sedalam hati laut, diam tak berbatas",
    image: "diving.jpg"
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
                                    <img
                                        src={`/images/${e.image}?lqip`}
                                        alt="division img"
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
