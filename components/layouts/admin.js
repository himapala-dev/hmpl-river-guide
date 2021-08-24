import Meta from "../Meta"
import SideNav from "../SideNav"

const AdminLayout = (props) => {
    return (
        <>
        <Meta title="Administrator" />
        <div>
            <SideNav />
            <div>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default AdminLayout
