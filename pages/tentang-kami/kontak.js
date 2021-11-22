import CustomLink from '../../components/CustomLink'
import { Icons } from '../../public'
import Image from '../../components/Image'
import Meta from '../../components/Meta'
import SocmedLists from '../../components/SocmedLists'
import Buttons from '../../components/Button'

function Kontak() {
    return (
        <>
            <Meta title="Kontak Himapala Unesa" description="Kontak Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya" />

            <div className="container">
                <h1>Kontak</h1>

                <h4>Alamat Sekretariat</h4>
                <p>Sekretariat Himapala Unesa, Gedung P7, Kampus Lidah Wetan Universitas Negeri Surabaya, Lakarsantri, Surabaya, Jawa Timur.</p>
                <p>Email: himapala.unesa@unesa.ac.id</p>

                <div className="socmed-link">
                    <SocmedLists
                        facebook="https://www.facebook.com/hmpl.unesa/"
                        youtube="https://www.youtube.com/c/HimapalaUnesa"
                        instagram="https://www.instagram.com/himapala.unesa/"
                        twitter="https://twitter.com/hmpl_unesa"
                        linkedin="https://www.linkedin.com/company/himapala-unesa/"
                    />
                </div>

                <div className="contentBtnContainer">
                    <CustomLink href="/tentang-kami/rekamjejak">
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
                    <CustomLink href="/tentang-kami/syarat">
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

Kontak.layout = "docs"

export default Kontak
