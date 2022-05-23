import ContentSlider from "../ContentSlider";
import ContentContainer from "./ContentContainer"
import FooterSlider from "../Footer.Slider";
import PortalModal from "../PortalModal";
import { useState } from "react";


function Content() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div className="content">

            <ContentSlider />
            <ContentContainer
                setIsOpenModal={setIsOpenModal}
            />
            <FooterSlider />

            
            {isOpenModal && (
                <PortalModal 
                message={'mesajjjj'}/>
            )}
        </div>
    )
}

export default Content