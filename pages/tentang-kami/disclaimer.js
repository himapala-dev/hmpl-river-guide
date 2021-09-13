import CustomLink from '../../components/CustomLink';
import Image from '../../components/Image';
import Meta from '../../components/Meta';
import LeftArrow from '/public/icons/arrow-left.svg'

function Disclaimer() {
    return (
        <>
            <Meta title="Disclaimer" />
            <div className="container">
                Ini kontak
                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/privasi">
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
                </div>
            </div>
        </>
    )
}

Disclaimer.layout = "docs"

export default Disclaimer
