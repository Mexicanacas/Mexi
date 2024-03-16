'use client';

import YouTube from 'react-youtube';

export const PromoVideo = () => (
  <div className="flex justify-center p-8">
    <YouTube
      videoId="yVEZrKK9HZU"
      className="[&>iframe]:h-auto [&>iframe]:max-w-full [&>iframe]:aspect-video"
    />
  </div>
);
