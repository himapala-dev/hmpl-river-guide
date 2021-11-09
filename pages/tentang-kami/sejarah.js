import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'

function Sejarah() {
    return (
        <>
            <Meta title="Sejarah Himapala Unesa" description="Sejarah Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya" />

            <div className="container">
                Cek Sejarah

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami">
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
                    <CustomLink href="/tentang-kami/pengurus">
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

Sejarah.layout = 'docs'

export default Sejarah
