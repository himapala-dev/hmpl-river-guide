import Image from 'next/image'

function SocmedLists({ facebook, instagram, twitter, linkedin, youtube }) {
    return (
        <>
            {facebook ? (
                <a href={facebook}>
                    <Image
                        src='/icons/icons8-facebook-f.svg'
                        alt="fb-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}

            {youtube ? (
                <a href={youtube}>
                    <Image
                        src='/icons/youtube.svg'
                        alt="yt-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}


            {instagram ? (
                <a href={instagram}>
                    <Image
                        src='/icons/icons8-instagram-logo.svg'
                        alt="ig-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}

            {twitter ? (
                <a href={twitter}>
                    <Image
                        src='/icons/icons8-twitter.svg'
                        alt="twitter-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}

            {linkedin ? (
                <a href={linkedin}>
                    <Image
                        src='/icons/linkedin-svgrepo-com.svg'
                        alt="li-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}
        </>
    )
}

export default SocmedLists
