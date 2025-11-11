import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "../ui/button";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title?: string;
  description?: string;
}

export function VideoDemo({ 
  videoUrl, 
  posterUrl,
  title = "Watch Our Demo",
  description = "See Student Companion AI in action"
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="demo-video" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4 text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative group max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 bg-gradient-to-br from-blue-900/80 to-purple-900/80 aspect-video">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={posterUrl}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay (when not playing) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 group-hover:bg-black/30">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                  aria-label="Play video"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </button>
              </div>
            )}

            {/* Video Controls (when playing) */}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>

                  {/* Mute/Unmute */}
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6" />
                    ) : (
                      <Volume2 className="w-6 h-6" />
                    )}
                  </button>

                  <div className="flex-1"></div>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Watch how Student Companion AI helps students get instant support
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
              onClick={() => window.open('https://poe.com/alu_sc', '_blank')}
            >
              Try It Live
            </Button>
            <Button
              variant="outline"
              className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Full Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
