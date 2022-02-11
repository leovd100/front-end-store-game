import "./styles.css"

//import ReactPlayer from 'react-player';
import helo from '../../assets/video/haloinfinite.mp4';

function BackGroundVideo(){
    return(
        <>
      {/*    <ReactPlayer  playing={true} onPlay={true} controls={false} url={Forza} muted={true} loop={true} className="video__content"  />
      */}
        <video className="bg-video__content" autoPlay muted loop poster="">
            <source className="vd1" src={helo} type="video/mp4"/>
            <source className="vd1" src={helo} type="video/webm"/>
            Your browser is not supported!
        </video>  
        </>
    );
}

export default BackGroundVideo;