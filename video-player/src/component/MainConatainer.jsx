/* eslint-disable react-hooks/rules-of-hooks */
import useVideoData from "../utils/useVideoData";
import { Outlet } from "react-router-dom";

const MainConatainer = () => {
  useVideoData();
  return <div className="min-h-screen flex flex-col">{<Outlet />}</div>;
};

export default MainConatainer;
