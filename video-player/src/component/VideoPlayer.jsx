/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { IoPlay, IoPause, IoVolumeHigh } from "react-icons/io5";
import { BsFullscreen } from "react-icons/bs";

/* eslint-disable react/prop-types */
const VideoPlayer = ({ src }) => {
  const [source, setSource] = useState(src);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [videoSpeed, setVideoSpeed] = useState(1);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    setSource(src);
    const video = videoRef.current;
    video.addEventListener("timeupdate", function () {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;
      setCurrentTime(video.currentTime);
      setSliderValue(value);
    });

    return () => {
      video.removeEventListener("timeupdate", () => {
        console.log("event listener removed");
      });
    };
  }, [src, sliderValue]);

  const handleLoadedData = () => {
    const video = videoRef.current;
    const totalTimeInSeconds = parseInt(video.duration);

    setPlayStatus(true);
    setSliderValue(0);
    setDuration(
      new Date(totalTimeInSeconds * 1000).toISOString().slice(11, 19)
    );
    setVideoSpeed(1);
  };
  const handlePlayAction = () => {
    const video = videoRef.current;
    playStatus ? video.pause() : video.play();
    setPlayStatus(!playStatus);
  };

  const handleSeekBar = (e) => {
    const video = videoRef.current;
    console.log(e.target.value);
    setSliderValue(e.target.value);
    let time = video.duration * (e.target.value / 100);
    video.currentTime = time;
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setVideoSpeed(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  return (
    <div
      key={source}
      className="lg:h-[80vh] lg:w-[70vw] bg-black rounded-md relative"
    >
      <video
        className="w-full h-full overflow-hidden rounded-md object-cover block "
        ref={videoRef}
        autoPlay
        onLoadedData={handleLoadedData}
      >
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 p-5 w-full ">
        <div className="w-full flex justify-between items-center">
          {/* 1st part of controls */}
          {/* play/pause */}
          <div className="flex items-center justify-start">
            <div onClick={handlePlayAction} className="cursor-pointer mr-2">
              {playStatus ? <IoPause /> : <IoPlay />}
            </div>
            {/* seekbar */}
            <input
              className="seekBar mr-2 h-0.5"
              onChange={handleSeekBar}
              type="range"
              value={sliderValue}
            ></input>
            {/* current time / duration */}
            <div>
              {new Date(parseInt(currentTime) * 1000)
                .toISOString()
                .slice(11, 19) + " "}
              / {duration}
            </div>
          </div>
          {/* second part of controls */}
          <div className="flex items-center justify-end">
            {/* speed change */}
            <div className=" mr-2">
              <select
                className="border-none bg-transparent focus:bg-slate-900"
                onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              >
                <option value="0.5">0.5x</option>
                <option selected value="1">
                  1x
                </option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>
            </div>
            <div className="flex mr-2 items-center">
              <IoVolumeHigh />
              <input
                className="h-0.5"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              />
            </div>
            <div className="cursor-pointer" onClick={handleFullscreen}>
              <BsFullscreen className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
