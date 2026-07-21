"use client";
import { Curve } from "@/components";

export default function About() {
  const handleNavigation = (page: string) => {
    // Navigate to the respective HTML page in a new tab
    switch(page) {
      case "photos":
        window.open("/photos.html", "_blank");
        break;
      case "graphics":
        window.open("/graphics.html", "_blank");
        break;
      case "videos":
        window.open("https://linktr.ee/SocialMoodboardVideoGallery", "_blank");
        break;
      default:
        window.open("/photos.html", "_blank");
    }
  };

  return (
    <Curve backgroundColor={"#526855"}>
      <section className="w-full h-screen flex flex-col">
        {/* Iframe taking full remaining height */}
        <div className="relative w-full h-full">
          <iframe
            src="/works-gallery.html"
            title="Works Page"
            className="w-full h-full border-none"
          />
          {/* Centered Buttons - Fully responsive */}
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col bg-black/50 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 rounded-3xl mx-auto">
              <button
                onClick={() => handleNavigation("photos")}
                className="my-1 mx-1 sm:mx-2 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 bg-transparent text-white hover:bg-white/20"
              >
                PHOTOS
              </button>
              <button
                onClick={() => handleNavigation("graphics")}
                className="my-1 mx-1 sm:mx-2 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 bg-transparent text-white hover:bg-white/20"
              >
                GRAPHICS
              </button>
              <button
                onClick={() => handleNavigation("videos")}
                className="my-1 mx-1 sm:mx-2 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 bg-transparent text-white hover:bg-white/20"
              >
                VIDEOS
              </button>
            </div>
          </div>
        </div>
      </section>
    </Curve>
  );
}