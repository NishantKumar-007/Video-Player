import { useState } from "react";
import { videoDataState } from "../store/atoms/videoDataState";
import useVideoData from "../utils/useVideoData";
import { useRecoilValue } from "recoil";
import VideoPlayer from "./VideoPlayer";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  useVideoData();
  const videoData = useRecoilValue(videoDataState);
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-list-container min-h-screen">
      {!selectedVideo && (
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
                  <h1 className="font-semibold px-2 pt-2 text-lg">
                    {video.title}
                  </h1>
                  <h2 className="text-md px-2 pt-2">{video.subtitle}</h2>
                  <p className="text-sm px-2  pb-3 truncate hover:overflow-visible hover:">
                    {video.description}
                  </p>
                </div>
              ))}
        </div>
      )}
      <div className="p-5 lg:flex lg:justify-evenly  text-white ">
        {selectedVideo && (
          <>
            <VideoPlayer src={selectedVideo.sources}></VideoPlayer>

            <div className="playlist text-white font-quicksand">
              {videoData.map((video, index) => (
                <div
                  key={index}
                  className={`playlist-item cursor-pointer my-2 ${
                    selectedVideo.title === video.title ? "selected" : ""
                  }`}
                  onClick={() => handleVideoClick(video)}
                >
                  {video.title}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoList;
