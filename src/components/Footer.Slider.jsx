import React, { useEffect, useState } from "react";
import goToSlide from "../utils/goToSlide";

export function FooterSlider() {

    const [slides, setSlides] = useState([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3004/footerSlide')
            .then(res => res.json())
            .then(
                (result) => {
                    setSlides(result)
                }
            )
    }, [])
    // border-b-8 border-b-red-600
    return (
        <div className="flex  justify-center pt-20">
            <div className='flex '>
                {slides.map((el, index) => {
                    return (
                        <img alt="logo"
                            key={index}
                            src={el.img}
                            className={(activeSlideIndex === index ? "block" : "hidden")}

                        />
                    )
                })}

                <button
                    className="absolute pt-80 left-80 text-7xl"
                    onClick={() => goToSlide(activeSlideIndex - 1, slides, setActiveSlideIndex)}
                > &#10094;</button>
                <button
                    className="absolute pt-80 right-80 text-7xl"
                    onClick={() => goToSlide(activeSlideIndex + 1, slides, setActiveSlideIndex)}>
                    &#10095; </button>
            </div>
        </div>
    )
}

export default FooterSlider
