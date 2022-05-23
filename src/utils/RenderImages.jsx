import React, { useEffect, useState } from "react";
import ImageElement from "../elements/ImageElement";

export function RenderImages() {

    const [logos, setLogos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/partners')
            .then(res => res.json())
            .then(
                (result) => {
                    setLogos(result)
                }
            )
    }, [])

    return logos.map((el) => (
        <div key={el.id}
            className="container sm-auto p-1 w-24">
            <a href={el.redirectUrl}>
                <ImageElement
                    imgUrl={el.imgUrl}
                    alt={el.alt}
                    redirectUrl={el.redirectUrl}
                />
            </a>
        </div>
    ));
};

export default RenderImages