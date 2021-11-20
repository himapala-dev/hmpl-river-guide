import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'
import Buttons from '../../components/Button'

function Privasi() {
    return (
        <>
            <Meta title="Aturan Privasi" description="Aturan Privasi Penggunaan" />

            <div className="container">
                Ini kontak

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/syarat">
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
                    <CustomLink href="/tentang-kami/disclaimer">
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

Privasi.layout = "docs"

export default Privasi
