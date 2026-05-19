// @ts-nocheck
import "./webflow.css";
import "./globals.css";

export const metadata = {
  title: "Slay the Strategy",
  description: "Klaar met content die niets oplevert? Get Hyped helpt merken groeien met slimme content, sterke formats en inzichten uit data.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Local stylesheets are imported via Next.js standard imports above */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.png" />

        {/* Preload critical above-the-fold images at highest browser priority */}
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/RecentWorks/work_01.png" />
        <link rel="preload" as="image" href="/RecentWorks/work_02.png" />
        <link rel="preload" as="image" href="/RecentWorks/work_03.png" />
        <link rel="preload" as="image" href="/HomeCaroussel/carousel_01.jpg" />
        <link rel="preload" as="image" href="/HomeCaroussel/first.jpg" />
        <link rel="preload" as="image" href="/HomeCaroussel/painting_03.jpg" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
