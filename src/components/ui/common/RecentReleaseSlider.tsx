import { useState, useEffect } from "react";
import { Movie } from "../../../../types/VideoLibraryTypes";

export default function RecentReleasesSlider({
  releases,
}: {
  releases: Movie[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [isPaused, setIsPaused] = useState(false); // for pausing on hover

  function srcSetImgUrl(imgSrc: string) {
    const formats = ["jpg", "jpeg", "webp", "png"];
    let format: string = "jpg"; // Default format

    // You could try to extract the format from the imgSrc
    const dotIndex = imgSrc.lastIndexOf(".");
    if (dotIndex !== -1) {
      const ext = imgSrc.substring(dotIndex + 1);
      if (formats.includes(ext)) {
        format = ext;
      }
    }

    const baseName = imgSrc.substring(0, dotIndex);

    return {
      sm: `${baseName}-sm.${format} 600w`,
      mg: `${baseName}-md.${format} 1000w`,
      lg: `${baseName}-lg.${format} 1600w`,
    };
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % releases.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + releases.length) % releases.length
    );
  };

  useEffect(() => {
    if (!releases || releases.length === 0) {
      return;
    }

    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [releases]);

  if (!releases || releases.length === 0) {
    return <div className="text-center">No recent releases available.</div>;
  }
  return (
    <div className="relative w-auto overflow-hidden rounded-md shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {releases.map((release, index) => {
          const srcSets = srcSetImgUrl(release.thumbnailUrl);
          return (
            <div
              key={index}
              className="w-full flex-shrink-0 relative flex justify-center"
              style={{ width: "100%" }}
            >
              <img
                srcSet={`${srcSets.sm},
                        ${srcSets.mg},
                        ${srcSets.lg}`}
                src={release.thumbnailUrl}
                alt={release.title}
                className="block w-full h-auto lg:max-h-130 min-h-60"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-4">
                <h3 className="text-l md:text-xl font-semibold">
                  {release.title}
                </h3>
                {/* You can add more details here if needed */}
              </div>
            </div>
          );
        })}
      </div>

      {releases.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          {/* Optional: Add dots for navigation */}
          <div className="absolute bottom-9.5 left-0 right-0 flex justify-center space-x-2">
            {releases.map((_, index) => (
              <button
                key={index}
                className={`rounded-full w-3 h-3 focus:outline-none ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
