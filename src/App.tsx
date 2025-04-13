import { JSXElement } from "../types/GeneralTypes";
import "./App.scss";
import Home from "./components/ui/Home.tsx";
import { Route, Routes } from "react-router";
import FileManagerUI from "./components/ui/file-management/FileManagerUI.tsx";
import MusicPlayerUI from "./components/ui/audio/MusicPlayerUI.tsx";
import ImageGalleryUI from "./components/ui/image/ImageGalleryUI.tsx";
import VideoPlayerUI from "./components/ui/video/VideoPlayerUI.tsx";

function App(): JSXElement {
  {
    return (
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<FileManagerUI />} path="/file-manager"></Route>
        <Route element={<VideoPlayerUI />} path="/video-player"></Route>
        <Route element={<ImageGalleryUI />} path="/image-gallery"></Route>
        <Route element={<MusicPlayerUI />} path="/music-player"></Route>
      </Routes>
    );
  }
}

export default App;
