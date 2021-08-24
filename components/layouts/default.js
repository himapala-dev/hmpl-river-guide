import React from 'react'
import Meta from '../Meta'
import Navbar from '../Navbar'
import styles from '../../styles/DefaultLayout.module.scss'
import Footer from '../Footer'

const DefaultLayout = (props) => {
    return (
        <>
            <Meta />
            <div>
                <Navbar />
                <div>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default DefaultLayout
