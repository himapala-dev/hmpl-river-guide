import React from 'react'
import CustomLink from './CustomLink'
import styles from '../styles/components/SideNav.module.scss'

function SideNav() {
    return (
        <div className={styles.sideNav}>
            <div className="container">
                <div className={styles.headerSideNav}>
                    <h4>Daftar Isi</h4>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/tentang-kami">
                            <a>Himapala Unesa</a>
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
                                    <a>Syarat dan Ketentuan</a>
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink href="/tentang-kami">
                                    <a>Syarat dan Ketentuan</a>
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
