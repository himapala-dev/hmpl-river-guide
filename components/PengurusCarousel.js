import { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../styles/components/Carousel.module.scss"
import SocmedLists from "./SocmedLists";

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="nextArrow" onClick={onClick}>
            <Image
                src="/icons/chevron-right.svg"
                alt="chev-right"
                width={48}
                height={48}
            />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="prevArrow" onClick={onClick}>
            <Image
                src="/icons/chevron-left.svg"
                alt="chev-left"
                width={48}
                height={48}
            />
        </div>
    );
}

const pengurusData = Array(20).fill({
    name: "Trio Adi Saputra",
    title: "Ketua Umum",
    src: "/images/carousel-img.jpg",
    socmed: {
        facebook: "https://www.facebook.com/himapala.unesa",
        instagram: "https://www.instagram.com/himapala.unesa/",
        twitter: "https://twitter.com/hmpl_unesa"
    }
})

export default class PengurusCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: pengurusData
        };
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            speed: 500,
            autoplaySpeed: 3000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className={styles.pengurusCarousel}>
                <Slider {...settings}>
                    {this.state.slides.map(function (slide) {
                        return (
                            <div key={slide.name}>
                                <div className={styles.imgCarousel}>
                                    <Image
                                        src={slide.src}
                                        alt="ex"
                                        width={210}
                                        height={210}
                                        placeholder="blur"
                                        blurDataURL={slide.src}
                                        objectFit="cover"
                                        className={styles.profilePhoto}
                                    />
                                </div>
                                <div className={styles.carouselBody}>
                                    <h4>{slide.name}</h4>
                                    <p>{slide.title}</p>
                                </div>
                                <div className={styles.carouselSoc}>
                                    <SocmedLists
                                        facebook={slide.socmed.facebook}
                                        instagram={slide.socmed.instagram}
                                        twitter={slide.socmed.twitter}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}