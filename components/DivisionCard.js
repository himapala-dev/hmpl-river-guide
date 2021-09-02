import React from 'react'
import styles from '../styles/components/DivisionCard.module.scss'
import CustomLink from './CustomLink'
import Image from './Image'
import HeroImg from '/public/images/hero-banner.jpg'
import GhImg from '/public/images/gh.jpg'
import RcImg from '/public/images/rc.jpg'
import CavingImg from '/public/images/caving.jpg'
import DivingImg from '/public/images/diving.jpg'

const divisionData = [{
    title: "Arung Jeram",
    summary: "Siapkan pengarunganmu. Tantang jerammu!",
    image: HeroImg
},
{
    title: "Gunung Hutan",
    summary: "Pijakan jejak, gegapkan langkah!",
    image: GhImg
},
{
    title: "Panjat Tebing",
    summary: "Berkawan kepal karst dan andesit.",
    image: RcImg
},
{
    title: "Susur Gua",
    summary: "Merayap meyelami zona gelap abadi.",
    image: CavingImg
},
{
    title: "Selam",
    summary: "Sedalam hati laut, diam tak berbatas",
    image: DivingImg
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
                                <div className={`${styles.bgWrapper} radius-20`}>
                                    <Image
                                        src={e.image}
                                        alt="division img"
                                        className="cover"
                                    />
                                </div>
                                <div className={styles.cardText}>
                                    <div className="text-center">
                                        <h4>{e.title}</h4>
                                        <p>{e.summary}</p>
                                        {e.title == "Arung Jeram" ? (
                                            <CustomLink href="/river-guide">
                                                <a>
                                                    <button className="btn-primary center">RIVER GUIDE</button>
                                                </a>
                                            </CustomLink>
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
