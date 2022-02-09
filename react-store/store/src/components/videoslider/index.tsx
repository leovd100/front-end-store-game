import BackGroundVideo from "../backGroundVideo";
import "./style.css"
function VideoStyle(){
    return(
        <>
        
            <div className="bg-video">
                <div id="left"> &lt;&lt; </div>
                <div id="right"> &gt;&gt; </div>
                <div className="container_btn">
                    <img className="logo_game" src="" alt="" />
                    <div className="btn_option">
                        <div className="btn-compra">Comprar Agora!</div>
                        <div className="btn-sobre">Saiba mais</div>
                    </div>
                </div>

                <img className="person" src="" alt=""/>
                <BackGroundVideo/>
                
                
            </div>
        
        </>
    );

}

export default VideoStyle;