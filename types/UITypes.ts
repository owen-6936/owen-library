import { JSXElement } from "./GeneralTypes";
import Home from "../src/components/ui/Home";
import FileManagerUI from "../src/components/ui/file-management/FileManagerUI";
import VideoLibraryUI from "../src/components/ui/video/VideoLibraryUI";
import ImageGalleryUI from "../src/components/ui/image/ImageLibraryUI";

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
    label: "Video Library",
    path: "/video-library",
    component: VideoLibraryUI,
  },
  ImageLibrary: {
    label: "Image Library",
    path: "/image-library",
    component: ImageGalleryUI,
  },
};
