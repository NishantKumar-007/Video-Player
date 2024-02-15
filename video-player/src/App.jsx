import VideoPlayer from "./component/VideoPlayer";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div>MY VIDEO PLAYER</div>
      <VideoPlayer></VideoPlayer>
    </RecoilRoot>
  );
}

export default App;
