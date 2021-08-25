import React from 'react'
import Meta from '../Meta'
import styles from '../../styles/DefaultLayout.module.scss'
import Footer from '../Footer'

const DefaultLayout = (props) => {
    return (
        <>
            <Meta />
            {props.children}
            <Footer />
        </>
    )
}

export default DefaultLayout
