/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { IoPlay, IoPause } from "react-icons/io5";
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
    setPlayStatus(true);
    setSliderValue(0);
    setDuration(video.duration);
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
      <div className="absolute bottom-0 p-8 w-full ">
        <div className="w-full flex justify-around items-center">
          <div onClick={handlePlayAction} className="cursor-pointer">
            {playStatus ? <IoPause /> : <IoPlay />}
          </div>
          <input
            className="seekBar"
            onChange={handleSeekBar}
            type="range"
            value={sliderValue}
          ></input>
          <div>
            {currentTime}/{duration}
          </div>
          <div className="cursor-pointer" onClick={handleFullscreen}>
            <BsFullscreen />
          </div>
          <div>
            <select
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
          <div>
            <label>Volume: </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
