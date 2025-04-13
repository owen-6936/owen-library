import { JSXElement } from "./GeneralTypes";
import Home from "../src/components/ui/Home";
import FileManagerUI from "../src/components/ui/file-management/FileManagerUI";
import VideoPlayerUI from "../src/components/ui/video/VideoPlayerUI";
import ImageGalleryUI from "../src/components/ui/image/ImageGalleryUI";
import MusicPlayerUI from "../src/components/ui/audio/MusicPlayerUI";

export type UIProps = {
  label: string;
  path: string;
  component: () => JSXElement;
};

export const UI: Record<string, UIProps> = {
  Home: {
    label: "Home",
    path: "/",
    component: Home,
  },
  FileManager: {
    label: "File Manager",
    path: "/file-manager",
    component: FileManagerUI,
  },
  VideoPlayer: {
    label: "Video Player",
    path: "/video-player",
    component: VideoPlayerUI,
  },
  ImageGallery: {
    label: "Image Gallery",
    path: "/image-gallery",
    component: ImageGalleryUI,
  },
  MusicPlayer: {
    label: "Music Player",
    path: "/music-player",
    component: MusicPlayerUI,
  },
};
