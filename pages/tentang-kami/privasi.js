import CustomLink from '../../components/CustomLink'
import LeftArrow from '/public/icons/arrow-left.svg'
import RightArrow from '/public/icons/arrow-right.svg'
import Image from '../../components/Image'
import Meta from '../../components/Meta'

function Privasi() {
    return (
        <>
            <Meta title="Aturan Privasi" description="Aturan Privasi Penggunaan" />

            <div className="container">
                Ini kontak

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/syarat">
                        <a><button className="btn-muted">
                            <Image
                                src={LeftArrow}
                                alt="left-arrow"
                                sprite="sprite"
                                className="btnImgLeft"
                            />
                            Sebelumnya
                        </button></a>
                    </CustomLink>
                    <CustomLink href="/tentang-kami/disclaimer">
                        <a><button className="btn-secondary">
                            Selanjutnya
                            <Image
                                src={RightArrow}
                                alt="right-arrow"
                                sprite="sprite"
                            /></button></a>
                    </CustomLink>
                </div>

            </div>
        </>
    )
}

Privasi.layout = "docs"

export default Privasi
