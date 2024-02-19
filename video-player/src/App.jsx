import VideoList from "./component/VideoList";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalouge from "./component/Catalouge";
import VideoPlayerContainer from "./component/VideoPlayerContainer";
import Header from "./component/Header";
import SearchBox from "./component/SearchBox";

function App() {
  return (
    <RecoilRoot>
      <main className="relative bg-gradient-to-tr from-black via-slate-800 to-black w-full min-h-screen flex flex-col items-center">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<VideoList></VideoList>}>
              <Route
                path="/"
                element={
                  <div className="flex flex-col items-center">
                    <SearchBox></SearchBox>
                    <Catalouge></Catalouge>
                  </div>
                }
              ></Route>
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
