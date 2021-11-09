import { Icons } from '../public'
import Image from './Image'

function SocmedLists({ facebook, instagram, twitter, linkedin, youtube }) {
    return (
        <>
            {facebook ? (
                <a href={facebook} target="_blank" rel="noreferrer">
                    <Image
                        src={Icons.Facebook}
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
                        src={Icons.Youtube}
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
                        src={Icons.Instagram}
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
                        src={Icons.Twitter}
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
                        src={Icons.Linkedin}
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
