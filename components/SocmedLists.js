import FbImage from '../public/icons/icons8-facebook-f.svg'
import YtImage from '../public/icons/youtube.svg'
import IgImage from '../public/icons/icons8-instagram-logo.svg'
import TwImage from '../public/icons/icons8-twitter.svg'
import LiImage from '../public/icons/linkedin-svgrepo-com.svg'

function SocmedLists({ facebook, instagram, twitter, linkedin, youtube }) {
    return (
        <>
            {facebook ? (
                <a href={facebook} target="_blank" rel="noreferrer">
                    <img
                        src={`${FbImage.src}?sprite`}
                        alt="fb-icon"
                        width="35"
                        height="35"
                    />
                </a>
            ) : ""}

            {youtube ? (
                <a href={youtube} target="_blank" rel="noreferrer">
                    <img
                        src={`${YtImage.src}?sprite`}
                        alt="yt-icon"
                        width="35"
                        height="35"
                    />
                </a>
            ) : ""}


            {instagram ? (
                <a href={instagram} target="_blank" rel="noreferrer">
                    <img
                        src={`${IgImage.src}?sprite`}
                        alt="ig-icon"
                        width="35"
                        height="35"
                    />
                </a>
            ) : ""}

            {twitter ? (
                <a href={twitter} target="_blank" rel="noreferrer">
                    <img
                        src={`${TwImage.src}?sprite`}
                        alt="twitter-icon"
                        width="35"
                        height="35"
                    />
                </a>
            ) : ""}

            {linkedin ? (
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <img
                        src={`${LiImage.src}?sprite`}
                        alt="li-icon"
                        width="35"
                        height="35"
                    />
                </a>
            ) : ""}
        </>
    )
}

export default SocmedLists
