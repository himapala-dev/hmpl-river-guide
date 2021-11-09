import { useRef } from 'react'
import CustomLink from './CustomLink'
import styles from '../styles/components/SideNav.module.scss'
import Image from './Image'
import { Icons } from '../public'
import useScrollPosition from './UseScrollPosition'
import { OutsideClick } from './OutsideClick'
import { useRouter } from 'next/router';

function SideNav() {
    const toggleRef = useRef(null)
    const scrollPosition = useScrollPosition();
    const [isActive, setIsActive] = OutsideClick(toggleRef, false);
    const onClick = () => setIsActive(!isActive);
    const router = useRouter();
    return (
        <div className={`${styles.sideNav} ${scrollPosition > 100 ? "sticky" : ""}`}>
            <div className="container">
                <div className={styles.headerSideNav} onClick={onClick}>
                    <h4>Daftar Isi</h4>
                    <Image
                        src={Icons.ChevronRight}
                        alt="chev-right"
                        width="16"
                        height="16"
                        sprite="sprite"
                        className={`${isActive ? styles.rotate90 : ""}`}
                        ref={toggleRef}
                    />
                </div>
                <ul className={`${styles.menu} ${isActive ? styles.active : ""}`} ref={toggleRef}>
                    <li className={router.pathname == "/tentang-kami" ? styles.bullets : ""} onClick={onClick}>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
                        </CustomLink>
                    </li>
                    <li className={router.pathname == "/tentang-kami/sejarah" ? styles.bullets : ""} onClick={onClick}>
                        <CustomLink href="/tentang-kami/sejarah">
                            <a>Sejarah</a>
                        </CustomLink>
                    </li>
                    <li className={router.pathname == "/tentang-kami/pengurus" ? styles.bullets : ""} onClick={onClick}>
                        <CustomLink href="/tentang-kami/pengurus">
                            <a>Pengurus</a>
                        </CustomLink>
                    </li>
                    <li className={router.pathname == "/tentang-kami/rekamjejak" ? styles.bullets : ""} onClick={onClick}>
                        <CustomLink href="/tentang-kami/rekamjejak">
                            <a>Rekam Jejak</a>
                        </CustomLink>
                    </li>
                    <li className={router.pathname == "/tentang-kami/kontak" ? styles.bullets : ""} onClick={onClick}>
                        <CustomLink href="/tentang-kami/kontak">
                            <a>Kontak Kami</a>
                        </CustomLink>
                    </li>
                    <li>
                        <b>Halaman</b>
                        <ul className={styles.submenu}>
                            <li className={router.pathname == "/tentang-kami/syarat" ? styles.bullets : ""} onClick={onClick}>
                                <CustomLink href="/tentang-kami/syarat">
                                    <a>Syarat dan Ketentuan</a>
                                </CustomLink>
                            </li>
                            <li className={router.pathname == "/tentang-kami/privasi" ? styles.bullets : ""} onClick={onClick}>
                                <CustomLink href="/tentang-kami/privasi">
                                    <a>Aturan Privasi</a>
                                </CustomLink>
                            </li>
                            <li className={router.pathname == "/tentang-kami/disclaimer" ? styles.bullets : ""} onClick={onClick}>
                                <CustomLink href="/tentang-kami/disclaimer">
                                    <a>Disclaimer</a>
                                </CustomLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
