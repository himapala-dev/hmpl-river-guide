import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/Navbar.module.scss'
import { OutsideClick } from './OutsideClick';
import { useRouter } from 'next/dist/client/router';
import useScrollPosition from './UseScrollPosition';
import CustomLink from './CustomLink';

function Navbar() {
    const toggleRef = useRef(null);
    const [isActive, setIsActive] = OutsideClick(toggleRef, false);
    const scrollPosition = useScrollPosition();
    const onClick = () => setIsActive(!isActive);
    const router = useRouter();

    return (
        <nav className={`${router.pathname == "/" ? "" : "bg-blue" && router.pathname == "/blog" ? "" : "bg-blue"} ${scrollPosition > 50 ? "bg-blue" : ""} ${isActive ? "bg-blue" : ""}`}>
            <div className="container">
                <div className={styles.logo}>
                    <CustomLink href="/">
                        <a>Himapala Unesa</a>
                    </CustomLink>
                </div>

                <div className={styles.toggle} onClick={onClick}>
                    <button className={`${styles.toggler} ${isActive ? styles.active : ""}`} ref={toggleRef}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                <div className={`${styles.menu} ${isActive ? styles.active : ""}`} ref={toggleRef}>
                    <ul className={`${isActive ? styles.active : ""}`} ref={toggleRef}>
                        <li>
                            <CustomLink href="/">
                                <a className={router.pathname == "/" ? styles.choosen : ""}>Home</a>
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/tentang-kami">
                                <a className={router.pathname == "/tentang-kami" ? styles.choosen : ""}>Tentang Kami</a>
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/blog">
                                <a className={router.pathname == "/blog" ? styles.choosen : ""}>Blog</a>
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/river-guide">
                                <a><button className="btn-primary center">RIVER GUIDE</button></a>
                            </CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
