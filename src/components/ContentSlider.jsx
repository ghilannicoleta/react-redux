import React, { useEffect, useState } from "react";
import goToSlide from "../utils/goToSlide";

export function ContentSlider() {

    const [slides, setSlides] = useState([]);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    useEffect(() => {
        fetch('http://localhost:3004/topSlider')
            .then(res => res.json())
            .then(
                (result) => {
                    setSlides(result)
                }
            )
    }, [])


    return (
        <div className='flex'>
            {slides.map((el, index) => {
                return (
                    <img alt="logo"
                        key={index}
                        src={el.img}
                        className={activeSlideIndex === index ? "block" : "hidden"} />
                )
            })}

            <button
                className="absolute top-80 pl-80 text-7xl"
                onClick={() => goToSlide(activeSlideIndex - 1, slides, setActiveSlideIndex)}
            > &#10094;</button>
            <button
            className="absolute top-80 right-80 text-7xl"
            onClick={() => goToSlide(activeSlideIndex + 1, slides, setActiveSlideIndex)}> &#10095; </button>
        </div>
    )
}

export default ContentSlider