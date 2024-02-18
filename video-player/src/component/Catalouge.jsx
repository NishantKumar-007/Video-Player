/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilValue, useRecoilState } from "recoil";
import { videoDataState } from "../store/atoms/videoDataState";
import { selectedVideoState } from "../store/atoms/selectedVideoState";
import { useNavigate } from "react-router-dom";

const Catalouge = () => {
  const videoData = useRecoilValue(videoDataState);
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useRecoilState(selectedVideoState);
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    navigate("/video-player");
  };

  return (
    <div className="video-list grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 place-items-center m-10">
      {videoData == null
        ? console.log("Loading")
        : videoData.map((video, index) => (
            <div
              key={index}
              className={`font-quicksand  cursor-pointer w-full backdrop-blur-sm bg-white/10 rounded-lg text-white hover:bg-white/20 hover:scale-105 duration-200  ${
                selectedVideo === video ? "selected" : ""
              }`}
              onClick={() => handleVideoClick(video)}
            >
              <div>
                <img
                  src={video.thumb}
                  className="object-cover h-52 w-full rounded-t-lg "
                ></img>
              </div>
              <h1 className="font-semibold px-2 pt-2 text-lg">{video.title}</h1>
              <h2 className="text-md px-2 pt-2">{video.subtitle}</h2>
              <p className="text-sm px-2  pb-3 truncate hover:overflow-visible hover:">
                {video.description}
              </p>
            </div>
          ))}
    </div>
  );
};
export default Catalouge;
