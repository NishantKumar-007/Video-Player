import { useEffect } from "react";
import { mediaJSON } from "../dummy/videoData";
import { useSetRecoilState } from "recoil";
import { videoDataState } from "../store/atoms/videoDataState";
import { videoDataStateCopy } from "../store/atoms/videoDataStateCopy";

const useVideoData = () => {
  const setVideoData = useSetRecoilState(videoDataState);
  const setVideoDataCopy = useSetRecoilState(videoDataStateCopy);
  useEffect(() => {
    setVideoData(mediaJSON?.categories[0]?.videos);
    setVideoDataCopy(mediaJSON?.categories[0]?.videos);
  }, [setVideoData, setVideoDataCopy]);
};
export default useVideoData;
