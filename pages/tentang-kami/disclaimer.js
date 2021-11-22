import CustomLink from '../../components/CustomLink';
import Image from '../../components/Image';
import Meta from '../../components/Meta';
import { Icons } from '../../public';
import Buttons from '../../components/Button';

function Disclaimer() {
    return (
        <>
            <Meta title="Disclaimer" />
            <div className="container">
                Ini kontak
                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/privasi">
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
                </div>
            </div>
        </>
    )
}

Disclaimer.layout = "docs"

export default Disclaimer
