import React from 'react'
import styles from '../styles/components/DivisionCard.module.scss'
import CustomLink from './CustomLink'
import Image from './Image'
import { Images } from '../public'

const divisionData = [{
    title: "Arung Jeram",
    summary: "Siapkan pengarunganmu. Tantang jerammu!",
    image: Images.HeroBanner
},
{
    title: "Gunung Hutan",
    summary: "Pijakan jejak, gegapkan langkah!",
    image: Images.Gh
},
{
    title: "Panjat Tebing",
    summary: "Berkawan kepal karst dan andesit.",
    image: Images.Rc
},
{
    title: "Susur Gua",
    summary: "Merayap meyelami zona gelap abadi.",
    image: Images.CavingImages
},
{
    title: "Selam",
    summary: "Sedalam hati laut, diam tak berbatas",
    image: Images.Diving
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
