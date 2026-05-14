// @ts-nocheck
import "./webflow.css";
import "./globals.css";

export const metadata = {
  title: "Slay the Strategy",
  description: "Klaar met content die niets oplevert? Get Hyped helpt merken groeien met slimme content, sterke formats en inzichten uit data.",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <meta name="description" content={metadata.description} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
