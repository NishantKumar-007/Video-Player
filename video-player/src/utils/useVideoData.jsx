import { useEffect } from "react";
import { mediaJSON } from "../dummy/videoData";
import { useSetRecoilState } from "recoil";
import { videoDataState } from "../store/atoms/videoDataState";

const useVideoData = () => {
  const setVideoData = useSetRecoilState(videoDataState);

  useEffect(() => {
    setVideoData(mediaJSON?.categories[0]?.videos);
  }, [setVideoData]);
};
export default useVideoData;
