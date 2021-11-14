import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'

function Syarat() {
    return (
        <>
            <Meta title="Syarat dan Ketentuan" description="Syarat dan Ketentuan Penggunaan" />

            <div className="container">
                Ini kontak

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/kontak">
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
                    <CustomLink href="/tentang-kami/privasi">
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

Syarat.layout = "docs"

export default Syarat
