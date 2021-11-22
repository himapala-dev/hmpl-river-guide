import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'
import Buttons from '../../components/Button'

function Sejarah() {
    return (
        <>
            <Meta title="Sejarah Himapala Unesa" description="Sejarah Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya" />

            <div className="container">
                Cek Sejarah

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami">
                        <a>
                            <Buttons className="btn-muted" title="Sebelumnya">
                                <Image
                                    src={Icons.ArrowLeft}
                                    alt="left-arrow"
                                    sprite="sprite"
                                    className="btnImgLeft"
                                />
                            </Buttons>
                        </a>
                    </CustomLink>
                    <CustomLink href="/tentang-kami/pengurus">
                        <a>
                            <Buttons className="btn-secondary" title="Selanjutnya">
                                <Image
                                    src={Icons.ArrowRight}
                                    alt="right-arrow"
                                    sprite="sprite"
                                />
                            </Buttons>
                        </a>
                    </CustomLink>
                </div>

            </div>
        </>
    )
}

Sejarah.layout = 'docs'

export default Sejarah
