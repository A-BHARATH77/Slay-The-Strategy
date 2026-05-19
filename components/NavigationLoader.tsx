'use client';
// @ts-nocheck
import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// ─── Resource manifest per route ────────────────────────────────────────────
const ROUTE_PRELOAD_MAP: Record<string, string[]> = {
  '/work': [
    '/Work1/painting_03.webp',
    '/Work1/painting_01.webp',
    '/Work2/mahru_01.webp',
    '/Work2/mahru_02.webp',
    '/Work2/mahru_03.webp',
    '/Work2/mahru_04.webp',
    '/Work3/work_06.webp',
    '/Work3/nails.webp',
    '/Work5/carousel_01.webp',
    '/Work5/first-copy.webp',
  ],
  '/studio': [
    '/Studio/studio1.webp',
    '/Studio/studio2.webp',
    '/Studio/studio3.webp',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  ],
  '/contact': [], // Text/form only — navigate immediately
};

// ─── Types ───────────────────────────────────────────────────────────────────
type LoaderContextType = {
  navigateTo: (path: string) => void;
  isLoading: boolean;
};

const LoaderContext = createContext<LoaderContextType>({
  navigateTo: () => {},
  isLoading: false,
});

export function useNavigationLoader() {
  return useContext(LoaderContext);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function preloadImages(urls: string[]): Promise<void> {
  if (urls.length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    let loaded = 0;
    const total = urls.length;
    const checkDone = () => { if (++loaded >= total) resolve(); };
    urls.forEach((url) => {
      const img = new window.Image();
      img.onload = checkDone;
      img.onerror = checkDone; // never block on 404s
      img.src = url;
    });
    // Safety net: never wait more than 4 s
    setTimeout(resolve, 4000);
  });
}

// ─── Provider ────────────────────────────────────────────────────────────────
export function NavigationLoaderProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  // Ref keeps the target path without causing re-renders; effect reads it
  const pendingPathRef = useRef<string | null>(null);

  // ── Drop the overlay only when Next.js has actually committed the new page ─
  useEffect(() => {
    if (pendingPathRef.current !== null && pathname === pendingPathRef.current) {
      pendingPathRef.current = null;
      setProgress(0);
      setIsLoading(false);
    }
  }, [pathname]);

  const navigateTo = useCallback(
    async (path: string) => {
      // Already on this page — do nothing
      if (path === pathname) return;

      const images = ROUTE_PRELOAD_MAP[path] ?? [];

      setIsLoading(true);
      setProgress(0);
      pendingPathRef.current = path;

      // Fake-progress ticker fills to ~85 % while real loads happen
      let fakeP = 0;
      const ticker = setInterval(() => {
        fakeP = Math.min(fakeP + Math.random() * 12 + 3, 85);
        setProgress(fakeP);
      }, 120);

      await preloadImages(images);

      clearInterval(ticker);
      setProgress(98);

      // Navigate — overlay stays visible until useEffect sees pathname change
      router.push(path);
    },
    [router, pathname],
  );

  return (
    <LoaderContext.Provider value={{ navigateTo, isLoading }}>
      {children}

      {isLoading && (
        <div
          aria-label="Loading page"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#f7f2e6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {/* Spinner */}
          <div
            style={{
              width: '48px',
              height: '48px',
              border: '1.5px solid rgba(81,104,86,0.2)',
              borderTop: '1.5px solid #516856',
              borderRadius: '50%',
              animation: 'nl-spin 0.9s linear infinite',
            }}
          />

          {/* Progress bar */}
          <div
            style={{
              width: '160px',
              height: '1px',
              backgroundColor: 'rgba(81,104,86,0.15)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundColor: '#516856',
                width: `${progress}%`,
                transition: 'width 0.12s ease',
              }}
            />
          </div>

          <style>{`
            @keyframes nl-spin { to { transform: rotate(360deg); } }
          `}</style>
        </div>
      )}
    </LoaderContext.Provider>
  );
}
