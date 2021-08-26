import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Blog.module.scss"

export default function Blog() {
    return (
        <>
            <div className="topWrapper"></div>
            <Navbar />
            <Hero
                title="Petualangan Berharga"
                summary="Menumbuhkan sikap ramah tamah, bela lingkungan, olah raga alam bebas, dan minat masyarakat untuk menumbuhkan semangat hidup yang penuh mengisi jiwa pemuda."
                image={false}
                link="/article/[id]"
                button="Selengkapnya"
                socmed={false}
            />
        </>
    )
}

Blog.layout = "default";
