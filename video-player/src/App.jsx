import VideoList from "./component/VideoList";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalouge from "./component/Catalouge";
import VideoPlayerContainer from "./component/VideoPlayerContainer";

function App() {
  return (
    <RecoilRoot>
      <main className="relative bg-gradient-to-tr from-black via-slate-800 to-black w-full min-h-screen flex flex-col items-center">
        <div className="text-white font-quicksand text-5xl my-4">
          MY VIDEO PLAYER
        </div>
        <input
          className="w-2/3 rounded-lg mt-4 p-3 bg-transparent/45 focus:text-white"
          placeholder="What's on your mind today?"
        ></input>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VideoList></VideoList>}>
              <Route path="/" element={<Catalouge></Catalouge>}></Route>
              <Route
                path="video-player"
                element={<VideoPlayerContainer></VideoPlayerContainer>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </RecoilRoot>
  );
}

export default App;
