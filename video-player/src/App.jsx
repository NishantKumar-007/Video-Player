import VideoList from "./component/VideoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <main className="relative bg-gradient-to-tr from-black via-slate-800 to-black w-full min-h-screen">
        <div className="text-white">MY VIDEO PLAYER</div>
        <VideoList></VideoList>
      </main>
    </RecoilRoot>
  );
}

export default App;
