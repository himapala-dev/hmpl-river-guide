import React from 'react'
import CustomLink from './CustomLink'
import styles from '../styles/components/SideNav.module.scss'
import Image from './Image'
import ChevRight from '/public/icons/chevron-right.svg'

function SideNav() {
    return (
        <div className={styles.sideNav}>
            <div className="container">
                <div className={styles.headerSideNav}>
                    <h4>Daftar Isi</h4>
                    <Image
                        src={ChevRight}
                        alt="chev-right"
                        width="16"
                        height="16"
                        sprite="sprite"
                    />
                </div>
                <ul className={styles.menu}>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Sejarah</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Pengurus</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Rekam Jejak</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Kontak Kami</a>
                        </CustomLink>
                    </li>
                    <li>
                        <b>Halaman</b>
                        <ul className={styles.submenu}>
                            <li>
                                <CustomLink href="/tentang-kami">
                                    <a>Syarat dan Ketentuan</a>
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink href="/tentang-kami">
                                    <a>Aturan Privasi</a>
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink href="/tentang-kami">
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
