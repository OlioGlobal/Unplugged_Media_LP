"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";

type Props = {
  videoId: string;
  aspectRatio?: string; // e.g., "16/9"
  className?: string;
  title?: string;
  // quality: "maxresdefault" | "sddefault" | "hqdefault" | "mqdefault" | "default"
  thumbnailQuality?:
    | "maxresdefault"
    | "sddefault"
    | "hqdefault"
    | "mqdefault"
    | "default";
};

export default function YouTubePlayer({
  videoId,
  aspectRatio = "16/9",
  className = "",
  title = "YouTube Video",
  thumbnailQuality = "hqdefault",
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState<string | null>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  // Compute thumbnail URL from YouTube
  const initialThumb = useMemo(
    () => `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`,
    [videoId, thumbnailQuality]
  );

  // Fallback sequence to ensure we always have a thumbnail
  const fallbackThumbs = useMemo(
    () => [
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/default.jpg`,
    ],
    [videoId]
  );

  const handleThumbError = (current: string) => {
    // try next fallback if current fails
    const idx = fallbackThumbs.indexOf(current);
    const next = fallbackThumbs[idx + 1];
    if (next) setThumbSrc(next);
  };

  // initialize thumbSrc on first render
  React.useEffect(() => {
    setThumbSrc(initialThumb);
  }, [initialThumb]);

  // Minimal UI params
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&fs=0&controls=1`;

  // Notes:
  // - controls=1 shows minimal controls; controls=0 hides all controls (but hurts usability).
  // - fs=0 hides fullscreen button. Remove if fullscreen is desired.
  // - playsinline=1 prevents full-screen auto on iOS.

  return (
    <div
      className={`relative w-full rounded-lg overflow-hidden bg-black shadow-lg ${className}`}
      style={{ aspectRatio }}
    >
      {!isPlaying ? (
        <button
          type="button"
          ref={playButtonRef}
          className="group w-full h-full focus:outline-none"
          aria-label="Play Video"
          onClick={() => setIsPlaying(true)}
          style={{ position: "absolute", inset: 0 }}
        >
          {thumbSrc && (
            <Image
              src={thumbSrc}
              alt={title}
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 480px) 640px, 100vw"
              onError={() => handleThumbError(thumbSrc)}
            />
          )}
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="backdrop-blur p-3 rounded-full bg-white/90 shadow-lg">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="24" cy="24" r="23" fill="#fff" opacity="0.9" />
                <polygon points="20,16 34,24 20,32" fill="#DD3333" />
              </svg>
            </span>
          </div>
        </button>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false} // set to true if you want fullscreen
          className="w-full h-full"
        />
      )}
    </div>
  );
}
