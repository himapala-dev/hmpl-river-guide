import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'

function Pengurus() {
    return (
        <>
            <Meta title="Pengurus Himapala Unesa" description="Jajaran Pengurus Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya" />

            <div className="container">
                <h1>Jajaran Pengurus Himapala Unesa</h1>

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/sejarah">
                        <a><button className="btn-muted">
                            <Image
                                src={Icons.ArrowLeft}
                                alt="left-arrow"
                                sprite="sprite"
                                className="btnImgLeft"
                            />
                            Sebelumnya
                        </button></a>
                    </CustomLink>
                    <CustomLink href="/tentang-kami/rekamjejak">
                        <a><button className="btn-secondary">
                            Selanjutnya
                            <Image
                                src={Icons.ArrowRight}
                                alt="right-arrow"
                                sprite="sprite"
                            /></button></a>
                    </CustomLink>
                </div>

            </div>
        </>
    )
}

Pengurus.layout = "docs"

export default Pengurus
