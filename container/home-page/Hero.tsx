"use client";

export default function Hero() {
  return (
    <div className="w-full h-screen relative pt-16">
      <iframe 
        src="/hero.html" 
        className="absolute top-0 left-0 w-full h-full border-0"
        title="Hero content"
        scrolling="no" // Prevents scrolling within the iframe
        style={{
          pointerEvents: "auto" // Allows clicking the button while body lets scroll pass through
        }}
      />
    </div>
  );
}