import { Link } from "react-router-dom";
import ImageElement from "../elements/ImageElement"


const logoPath = "https://andys.md/assets/img/logo.svg";

export const ImageLogo = () => {
    return (
        <div className="img-logo-andys flex ">
            <Link to={'/'}>
                <ImageElement
                    imgUrl={logoPath}
                    className='w-[135px]'
                />
            </Link>
        </div>
    )
}

export default ImageLogo;