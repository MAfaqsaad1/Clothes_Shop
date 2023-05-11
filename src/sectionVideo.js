import videoImg from "./img/carouselItem2.jpg";
import playButton from "./img/play-button.png";

function Video() {
    return (
        <div className="h-screen bg-cover brightness-75 my-10" style={{ backgroundImage: `url(${videoImg})` }}>
            <div className="flex justify-center items-center h-screen">
                <div className="">
                    <img src={playButton} className="h-20" alt="" srcset="" />
                </div>

            </div>


        </div>
    )
}

export default Video
