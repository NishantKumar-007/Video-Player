import VideoList from "./component/VideoList";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalouge from "./component/Catalouge";
import VideoPlayerContainer from "./component/VideoPlayerContainer";
import Header from "./component/Header";

function App() {
  return (
    <RecoilRoot>
      <main className="relative bg-gradient-to-tr from-black via-slate-800 to-black w-full min-h-screen flex flex-col items-center">
        <BrowserRouter>
          <Header></Header>
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
