import React from 'react'
import styles from '../styles/components/DivisionCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const divisionData = [{
    title: "Arung Jeram",
    summary: "Siapkan pengarunganmu. Tantang jerammu!"
},
{
    title: "Gunung Hutan",
    summary: "Pijakan jejak, gegapkan langkah!"
},
{
    title: "Panjat Tebing",
    summary: "Berkawan kepal karst dan andesit."
},
{
    title: "Susur Gua",
    summary: "Merayap meyelami zona gelap abadi."
},
{
    title: "Selam",
    summary: "Sedalam hati laut, gemuruh luas samudera."
},
]

function DivisionCard() {
    return (
        <>
            <div className={styles.divisionLists}>
                {divisionData.map(e => (
                    <React.Fragment key={e.name}>
                        <div className={`${e.title == "Arung Jeram" ? styles.cardDivision : styles.raftingCard}`}>
                            <div className={styles.cardThumbnail}>
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
