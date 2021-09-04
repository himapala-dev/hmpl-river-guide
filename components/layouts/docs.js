import Footer from "../Footer"
import Meta from "../Meta"
import Navbar from "../Navbar"
import SideNav from "../SideNav"
import styles from "../../styles/DocsLayout.module.scss"

const Documentation = (props) => {
    return (
        <>
            <Meta />
            <div id="docs">
                <Navbar />
                <div id="docsLayout">
                    <div className="sideNavContainer">
                        <SideNav />
                    </div>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Documentation
