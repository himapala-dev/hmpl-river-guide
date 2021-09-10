import CustomLink from '../../components/CustomLink'
import LeftArrow from '/public/icons/arrow-left.svg'
import RightArrow from '/public/icons/arrow-right.svg'
import Image from '../../components/Image'
import Meta from '../../components/Meta'
import SocmedLists from '../../components/SocmedLists'

function Kontak() {
    return (
        <>
            <Meta title="Kontak Himapala Unesa" description="Kontak Himpunan Mahasiswa Pencinta Alam Universitas Negeri Surabaya" />

            <div className="container">
                <h1>Kontak</h1>

                <h4>Alamat Sekretariat</h4>
                <p>Sekretariat Himapala Unesa, Gedung P7, Kampus Lidah Wetan Universitas Negeri Surabaya, Lakarsantri, Surabaya, Jawa Timur.</p>
                <p>Email: hmpl.unesa@gmail.com</p>

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
                    <CustomLink href="/tentang-kami/syarat">
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

Kontak.layout = "docs"

export default Kontak