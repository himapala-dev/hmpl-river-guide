import Footer from "../Footer"
import Meta from "../Meta"
import Navbar from "../Navbar"
import SideNav from "../SideNav"
import styles from "../../styles/DocsLayout.module.scss"

const Documentation = (props) => {
    return (
        <>
            <Meta />
            <Navbar />
            <div id="docsLayout" className="grid-col two">
                <SideNav />
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Documentation
