import { JSXElement } from "../../../../types/GeneralTypes";
import "../../../styles/video-library.scss";
import Navbar from "../common/Navbar";
import RecentReleasesSlider from "../common/RecentReleaseSlider";

export default function VideoLibraryUI(): JSXElement {
  return (
    <div className="flex flex-col h-screen" data-testid="video-library-ui">
      <Navbar />
      <div
        className="video-library m-2 border-1 border-[#ccc] p-5 flex-grow"
        data-testid="video-player-ui"
      >
        <RecentReleasesSlider
          releases={[
            {
              title: "Venom: The Last Dance",
              thumbnailUrl: "../../src/assets/images/venom-the-last-dance.jpg",
            },
            {
              title: "Weak Hero Class 2",
              thumbnailUrl: "../../src/assets/images/Weak-Hero-Class-2.png",
            },
            {
              title: "Parasite (2019)",
              thumbnailUrl: "../../src/assets/images/Parasite.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
}
