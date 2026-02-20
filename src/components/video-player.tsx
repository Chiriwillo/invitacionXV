'use client';

export function VideoPlayer() {
  // Asegúrate de que este nombre de archivo coincida con el video que subiste a la carpeta `public`
  const videoSrc = "/quince-video.mp4";

  return (
    <div className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
      <div className="p-1">
        <div className="flex aspect-video items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-background shadow-lg">
          <video
            src={videoSrc}
            controls
            className="w-full h-full object-contain"
            preload="metadata"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </div>
  );
}
