import VideoPlayer from "./VideoPlayer";
import { videoDataState } from "../store/atoms/videoDataState";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedVideoState } from "../store/atoms/selectedVideoState";

const VideoPlayerContainer = () => {
  const videoData = useRecoilValue(videoDataState);
  const [selectedVideo, setSelectedVideo] = useRecoilState(selectedVideoState);
  const handleVideoClick = (video) => {
    // navigate("/player");
    setSelectedVideo(video);
  };
  return (
    <div className="p-5 lg:flex lg:justify-evenly text-white">
      <VideoPlayer src={selectedVideo.sources}></VideoPlayer>

      <div className="playlist text-white font-quicksand lg:ml-5 overflow-y-auto no-scrollbar  lg:h-[80vh]">
        {videoData.map((video, index) => (
          <div
            key={index}
            className={`playlist-item cursor-pointer my-2 bg-white/15 rounded-lg p-4 hover:bg-slate-100/35 ${
              selectedVideo.title === video.title ? "selected" : ""
            }`}
            onClick={() => handleVideoClick(video)}
          >
            {video.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default VideoPlayerContainer;
