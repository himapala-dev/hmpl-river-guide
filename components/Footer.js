import Image from 'next/image'
import Link from 'next/link'
import ScrollButton from './BackToTop';
import SocmedLists from './SocmedLists'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="grid-col four">
                        <div>
                            <h4>Himapala Unesa</h4>
                            <p>Sekretariat Himapala Unesa, Gedung P7, Kampus Lidah Wetan
                                Universitas Negeri Surabaya
                                Lakarsantri, Surabaya<br /><br />
                                hmpl.unesa@gmail.com</p>
                        </div>
                        <div>
                            <h4>Tentang Kami</h4>
                            <ul>
                                <li>
                                    <Link href='/tentang-kami#sejarah'>
                                        <a>Sejarah</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#pengurus'>
                                        <a>Pengurus</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#rekamjejak'>
                                        <a>Rekam Jejak</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#kontak'>
                                        <a>Kontak Kami</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Halaman</h4>
                            <ul>
                                <li>
                                    <Link href='/tentang-kami#syarat'>
                                        <a>Syarat dan Ketentuan</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#privasi'>
                                        <a>Aturan Privasi</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/tentang-kami#disclaimer'>
                                        <a>Disclaimer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/administrator'>
                                        <a>Administrator</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt="hmpl-logo"
                                width={143}
                                height={175}
                                placeholder="blur"
                                blurDataURL="/images/logo.png"
                            />
                        </div>
                    </div>
                    <div className="grid-col two">
                        <div>
                            <SocmedLists
                                facebook="https://www.facebook.com/hmpl.unesa/"
                                youtube="https://www.youtube.com/c/HimapalaUnesa"
                                instagram="https://www.instagram.com/himapala.unesa/"
                                twitter="https://twitter.com/hmpl_unesa"
                                linkedin="https://www.linkedin.com/company/himapala-unesa/"
                            />
                        </div>
                        <div>
                            <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
