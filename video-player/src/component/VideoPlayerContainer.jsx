import VideoPlayer from "./VideoPlayer";
import { videoDataState } from "../store/atoms/videoDataState";
import { useRecoilState } from "recoil";
import { selectedVideoState } from "../store/atoms/selectedVideoState";
import { useRef } from "react";

const VideoPlayerContainer = () => {
  const [videoData, setVideoData] = useRecoilState(videoDataState);
  const [selectedVideo, setSelectedVideo] = useRecoilState(selectedVideoState);

  const draggedFrom = useRef(null);
  const draggedTo = useRef(null);

  const handleDragStart = (index) => {
    draggedFrom.current = index;
  };

  const handleDragEnter = (index) => {
    draggedTo.current = index;
  };

  const handleDragEnd = () => {
    const videoDataClone = [...videoData];
    const temp = videoDataClone[draggedFrom.current];
    videoDataClone[draggedFrom.current] = videoDataClone[draggedTo.current];
    videoDataClone[draggedTo.current] = temp;
    setVideoData(videoDataClone);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    // Additional logic for handling video click
  };

  return (
    <div className="p-5 lg:flex lg:justify-evenly text-white">
      <VideoPlayer src={selectedVideo.sources}></VideoPlayer>

      <div className="playlist  text-white font-quicksand lg:ml-5 overflow-y-auto no-scrollbar  lg:h-[80vh]">
        <h1 className="font-quicksand lg:w-full m-2 text-3xl">Playlist</h1>
        {videoData.map((video, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={handleDragEnd}
            onClick={() => handleVideoClick(video)} // Separate onClick for video click
            className={`playlist-item lg:w-full   cursor-pointer my-2 bg-white/15 rounded-lg p-4 hover:bg-slate-100/35 ${
              selectedVideo.title === video.title ? "selected" : ""
            }`}
          >
            <div>{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerContainer;
