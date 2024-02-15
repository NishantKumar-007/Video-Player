import { useState } from "react";
import { videoDataState } from "../store/atoms/videoDataState";
import useVideoData from "../utils/useVideoData";
import { useRecoilValue } from "recoil";

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  useVideoData();
  const v = useRecoilValue(videoDataState);
  //console.log(v);
  const videos = [
    "Video 1",
    "Video 2",
    "Video 3",
    "Video 4",
    "Video 1",
    "Video 2",
    "Video 3",
    "Video 4",
    "Video 1",
    "Video 2",
    "Video 3",
    "Video 4",
    "Video 1",
    "Video 2",
    "Video 3",

    // Add more video titles as needed
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-list-container">
      {!selectedVideo && (
        <div className="video-list grid lg:grid-cols-4 md:grid-cols-3 gap-10 grid-cols-2 place-items-center m-5">
          {v == null
            ? console.log("Loading")
            : v.map((video, index) => (
                <div
                  key={index}
                  className={`video-item cursor-pointer h-52 overflow-hidden border-2  ${
                    selectedVideo === video ? "selected" : ""
                  }`}
                  onClick={() => handleVideoClick(video)}
                >
                  <div>{video.title}</div>
                  <h1>{video.title}</h1>
                  <h2>{video.subtitle}</h2>
                  <div className="text-ellipsis">{video.description}</div>
                </div>
              ))}
        </div>
      )}
      <div className="video-player flex justify-evenly">
        {selectedVideo && (
          <>
            <div className="expanded-video w-3/4 bg-gray-400">
              {selectedVideo}
            </div>
            <div className="playlist">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`playlist-item ${
                    selectedVideo === video ? "selected" : ""
                  }`}
                  onClick={() => handleVideoClick(video)}
                >
                  {video}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
