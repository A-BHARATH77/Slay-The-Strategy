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

        </div>
      </section>
    </Curve>
  );
}