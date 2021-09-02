import styles from '../styles/components/BlogCard.module.scss'
import CustomLink from './CustomLink'

function BlogCard({ src, title, summary, button, href }) {
    return (
        <>
            <div className={`${styles.blogCard} radius-20`}>
                <CustomLink href={href}>
                    <a>
                        <div className={styles.cardImg}>
                            <img src={src} alt="card-img" className="cover" />
                            <button className="outline">Baca Artikel</button>
                        </div>
                        <div className={styles.cardBody}>
                            <h4>{title}</h4>
                            <p>{summary}</p>
                        </div>
                        {button ? (
                            <button className="btn-secondary">{button}</button>
                        ) : ""}
                    </a>
                </CustomLink>
            </div>
        </>
    )
}

export default BlogCard
