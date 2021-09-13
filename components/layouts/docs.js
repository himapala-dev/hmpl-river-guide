import Footer from "../Footer"
import Meta from "../Meta"
import Navbar from "../Navbar"
import SideNav from "../SideNav"

const Documentation = (props) => {
    return (
        <>
            <Meta />
            <div id="docs">
                <Navbar />
                <div id="docsLayout">
                    <SideNav />
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Documentation
