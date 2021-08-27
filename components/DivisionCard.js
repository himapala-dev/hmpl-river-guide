import React from 'react'
import styles from '../styles/components/DivisionCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const divisionData = [{
    title: "Arung Jeram",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet."
},
{
    title: "Gunung Hutan",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet."
},
{
    title: "Panjat Tebing",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet."
},
{
    title: "Susur Gua",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet."
},
{
    title: "Selam",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus sit tristique lectus amet."
},
]

function DivisionCard() {
    return (
        <>
            <div className={styles.divisionLists}>
                {divisionData.map(e => (
                    <div key={e.name} className={`${e.title == "Arung Jeram" ? styles.cardDivision : styles.raftingCard}`}>
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
                ))}
            </div>
        </>
    )
}

export default DivisionCard
