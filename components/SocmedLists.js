import Image from 'next/image'

function SocmedLists({ facebook, instagram, twitter, linkedin }) {
    return (
        <>
            <a href={facebook}>
                <Image
                    src='/icons/icons8-facebook-f.svg'
                    alt="fb-icon"
                    width={35}
                    height={35}
                />
            </a>

            <a href={instagram}>
                <Image
                    src='/icons/icons8-instagram-logo.svg'
                    alt="fb-icon"
                    width={35}
                    height={35}
                />
            </a>

            <a href={twitter}>
                <Image
                    src='/icons/icons8-twitter.svg'
                    alt="fb-icon"
                    width={35}
                    height={35}
                />
            </a>

            <a href={linkedin}>
                <Image
                    src='/icons/linkedin-svgrepo-com.svg'
                    alt="fb-icon"
                    width={35}
                    height={35}
                />
            </a>
        </>
    )
}

export default SocmedLists
