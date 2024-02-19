import { videoDataState } from "../store/atoms/videoDataState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { videoDataStateCopy } from "../store/atoms/videoDataStateCopy";
const SearchBox = () => {
  const copydata = useRecoilValue(videoDataStateCopy);
  const setVideoData = useSetRecoilState(videoDataState);
  const handleSearch = (e) => {
    const filteredData = copydata.filter((element) => {
      return element.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    console.log(filteredData);
    setVideoData(filteredData);
  };
  return (
    <input
      onChange={handleSearch}
      className="w-2/3 rounded-lg mt-4 p-3  bg-transparent/45 focus:text-white"
      placeholder="What's on your mind today?"
    ></input>
  );
};
export default SearchBox;
