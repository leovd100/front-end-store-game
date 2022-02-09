import "./styles.css"
import React, { useState } from "react"; 
import ReactPlayer from 'react-player/file';

function BackGroundVideo(){
    const [videoFilePath, setVideoFilePath] = useState(null);
    return(
        
        <>
        



        <ReactPlayer  controls={true} url='./forza.mp4' />
        {/* <video className="bg-video__content" autoPlay muted loop poster="">
            <source className="vd1" src={`${require('forza')}`} type="video.mp4"/>
            <source className="vd1" src={`${require('forza')}`} type="video.webm"/>
            Your browser is not supported!
        </video> */}
        </>
    );
}

export default BackGroundVideo;