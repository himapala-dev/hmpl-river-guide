import Link from 'next/link'

function CustomLink({ href, children }) {
    return (
        <Link href={href} as={ process.env.BACKEND_URL + href}>
            {children}
        </Link>
    )
}

export default CustomLink
