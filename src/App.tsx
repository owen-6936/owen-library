import { JSXElement } from "../types/GeneralTypes";
import "./App.scss";
import Home from "./components/ui/Home.tsx";
import { Route, Routes } from "react-router";
import FileManagerUI from "./components/ui/file-management/FileManagerUI.tsx";
import ImageLibraryUI from "./components/ui/image/ImageLibraryUI.tsx";
import VideoLibraryUI from "./components/ui/video/VideoLibraryUI.tsx";

function App(): JSXElement {
  {
    return (
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<FileManagerUI />} path="/file-manager"></Route>
        <Route element={<VideoLibraryUI />} path="/video-library"></Route>
        <Route element={<ImageLibraryUI />} path="/image-gallery"></Route>
      </Routes>
    );
  }
}

export default App;
