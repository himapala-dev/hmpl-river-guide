import Meta from "../Meta"
import Navbar from "../Navbar"

const River = (props) => {
    return (
        <>
            <Meta />
            <Navbar />
            {props.children}
        </>
    )
}

export default River
