import ChevUp from '../public/icons/chevron-double-up.svg'
import { useEffect, useState } from "react";

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
                    <img
                        src={`${ChevUp.src}?lqip`}
                        alt="chev-up"
                        width="35"
                        height="35"
                    />
                </a>
            )}
        </>
    );
}