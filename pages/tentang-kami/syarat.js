import CustomLink from '../../components/CustomLink'
import LeftArrow from '/public/icons/arrow-left.svg'
import RightArrow from '/public/icons/arrow-right.svg'
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
                                src={LeftArrow}
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

Syarat.layout = "docs"

export default Syarat
