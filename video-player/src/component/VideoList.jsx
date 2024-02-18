/* eslint-disable react-hooks/rules-of-hooks */

import useVideoData from "../utils/useVideoData";
// import { selectedVideoState } from "../store/atoms/selectedVideoState";
// import { useRecoilValue } from "recoil";
// import Catalouge from "./Catalouge";
// import VideoPlayerContainer from "./VideoPlayerContainer";
import { Outlet } from "react-router-dom";

const VideoList = () => {
  // const navigate = useNavigate();

  useVideoData();

  return (
    // <div className="video-list-container min-h-screen">
    //   {!selectedVideo && <Catalouge></Catalouge>}
    //   <div className="p-5 lg:flex lg:justify-evenly text-white ">
    //     {selectedVideo && <VideoPlayerContainer></VideoPlayerContainer>}
    //   </div>
    // </div>
    <div className="min-h-screen">{<Outlet />}</div>
  );
};

export default VideoList;
