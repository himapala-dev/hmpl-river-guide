import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'
import Buttons from '../../components/Button'

function Syarat() {
    return (
        <>
            <Meta title="Syarat dan Ketentuan" description="Syarat dan Ketentuan Penggunaan" />

            <div className="container">
                Ini kontak

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/kontak">
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
                    <CustomLink href="/tentang-kami/privasi">
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

Syarat.layout = "docs"

export default Syarat
