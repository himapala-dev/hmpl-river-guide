import FbImage from '../public/icons/icons8-facebook-f.svg'
import YtImage from '../public/icons/youtube.svg'
import IgImage from '../public/icons/icons8-instagram-logo.svg'
import TwImage from '../public/icons/icons8-twitter.svg'
import LiImage from '../public/icons/linkedin-svgrepo-com.svg'
import Image from './Image'

function SocmedLists({ facebook, instagram, twitter, linkedin, youtube }) {
    return (
        <>
            {facebook ? (
                <a href={facebook} target="_blank" rel="noreferrer">
                    <Image
                        src={FbImage}
                        alt="fb-icon"
                        width="35"
                        height="35"
                        sprite="sprite"
                    />
                </a>
            ) : ""}

            {youtube ? (
                <a href={youtube} target="_blank" rel="noreferrer">
                    <Image
                        src={YtImage}
                        alt="yt-icon"
                        width="35"
                        height="35"
                        sprite="sprite"
                    />
                </a>
            ) : ""}


            {instagram ? (
                <a href={instagram} target="_blank" rel="noreferrer">
                    <Image
                        src={IgImage}
                        alt="ig-icon"
                        width="35"
                        height="35"
                        sprite="sprite"
                    />
                </a>
            ) : ""}

            {twitter ? (
                <a href={twitter} target="_blank" rel="noreferrer">
                    <Image
                        src={TwImage}
                        alt="twitter-icon"
                        width="35"
                        height="35"
                        sprite="sprite"
                    />
                </a>
            ) : ""}

            {linkedin ? (
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <Image
                        src={LiImage}
                        alt="li-icon"
                        width="35"
                        height="35"
                        sprite="sprite"
                    />
                </a>
            ) : ""}
        </>
    )
}

export default SocmedLists
