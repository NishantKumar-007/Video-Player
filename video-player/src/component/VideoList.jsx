/* eslint-disable react-hooks/rules-of-hooks */
import useVideoData from "../utils/useVideoData";
import { Outlet } from "react-router-dom";

const VideoList = () => {
  useVideoData();
  return <div className="min-h-screen">{<Outlet />}</div>;
};

export default VideoList;
