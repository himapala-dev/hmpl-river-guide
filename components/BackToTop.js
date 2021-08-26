// import React from 'react';
// import Link from 'next/link'
// import Image from 'next/image'

// class ScrollButton extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             intervalId: 0
//         };
//     }

//     scrollStep() {
//         if (window.scrollY === 0) {
//             clearInterval(this.state.intervalId);
//         }
//         window.scroll(0, window.scrollY - this.props.scrollStepInPx);
//     }

//     scroll() {
//         let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
//         //store the intervalId inside the state, 
//         //so we can use it later to cancel the scrolling
//         this.setState({ intervalId: intervalId });
//     }

//     render() {
//         return <Link href='#top' title='Back to top'
//             id='scroll'
//             onClick={(event) => {
//                 event.preventDefault();
//                 this.scroll();
//             }}><a>
//                 <Image
//                     src="/icons/chevron-double-up.svg"
//                     alt="chev-up"
//                     width={35}
//                     height={35}
//                 />
//             </a>
//         </Link>
//     }
// }

// export default ScrollButton;

import { useEffect, useState } from "react";
import Image from 'next/image'

export default function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <a onClick={scrollToTop}>
                    <Image
                        src="/icons/chevron-double-up.svg"
                        alt="chev-up"
                        width={35}
                        height={35}
                    />
                </a>
            )}
        </>
    );
}
