import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/Navbar.module.scss'
import Link from 'next/link'
import { OutsideClick } from './OutsideClick';
import { useRouter } from 'next/dist/client/router';
import useScrollPosition from './UseScrollPosition';

function Navbar() {
    const toggleRef = useRef(null);
    const [isActive, setIsActive] = OutsideClick(toggleRef, false);
    const scrollPos = useScrollPosition();
    const scrollHeight = scrollPos;
    const onClick = () => setIsActive(!isActive);
    const router = useRouter();

    console.log(scrollHeight)

    return (
        <nav className={`${router.pathname == "/" ? "" : "bg-blue" && router.pathname == "/blog" ? "" : "bg-blue"} ${scrollHeight > 300 ? "bg-blue" : ""}`}>
            <div className="container">
                <div className={styles.logo}>
                    <Link href="/">
                        <a>Himapala Unesa</a>
                    </Link>
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
                            <Link href="/">
                                <a className={router.pathname == "/" ? styles.choosen : ""}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tentang-kami">
                                <a className={router.pathname == "/tentang-kami" ? styles.choosen : ""}>Tentang Kami</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className={router.pathname == "/blog" ? styles.choosen : ""}>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/river-guide">
                                <a><button className="btn-primary">RIVER GUIDE</button></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
