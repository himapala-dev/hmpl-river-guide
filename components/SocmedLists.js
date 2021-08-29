import Image from 'next/image'

function SocmedLists({ facebook, instagram, twitter, linkedin, youtube }) {
    return (
        <>
            {facebook ? (
                <a href={facebook} target="_blank" rel="noreferrer">
                    <Image
                        src='/icons/icons8-facebook-f.svg'
                        alt="fb-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}

            {youtube ? (
                <a href={youtube} target="_blank" rel="noreferrer">
                    <Image
                        src='/icons/youtube.svg'
                        alt="yt-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}


            {instagram ? (
                <a href={instagram} target="_blank" rel="noreferrer">
                    <Image
                        src='/icons/icons8-instagram-logo.svg'
                        alt="ig-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}

            {twitter ? (
                <a href={twitter} target="_blank" rel="noreferrer">
                    <Image
                        src='/icons/icons8-twitter.svg'
                        alt="twitter-icon"
                        width={35}
                        height={35}
                    />
                </a>
            ) : ""}

            {linkedin ? (
                <a href={linkedin} target="_blank" rel="noreferrer">
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
