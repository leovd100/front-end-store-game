import ArrowButtons from "components/arrowButtons";
import HeaderInfo from "components/headerInfo";
import BackGroundVideo from "../backGroundVideo";

import helo from '../../assets/img/persons/helo.png';
import background from '../../assets/img/halo-background.webp';

import "./style.css"
function VideoStyle(){
    return(
        <>
        
            <div className="bg-video">
                <HeaderInfo/>
                <ArrowButtons/>
                

                <img className="bg-person" src={background} alt="" />
                <img className="person" src={helo} alt=""/>
                <BackGroundVideo/>
                
                    
            </div>
        
        </>
    );

}

export default VideoStyle;