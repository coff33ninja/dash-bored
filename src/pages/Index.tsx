import { SearchBar } from '@/components/SearchBar';
import { MediaPlayer } from '@/components/MediaPlayer';
import { SettingsPanel } from '@/components/SettingsPanel';
import { MediaTab } from '@/components/MediaTab';
import { FavoritesList } from '@/components/FavoritesList';
import { YouTubeIntegration } from '@/components/YouTubeIntegration';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TimeWeatherPanel } from '@/components/TimeWeatherPanel';

const Index = () => {
  const [isMediaPlaying, setIsMediaPlaying] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const handleMediaUpdate = () => {
      setIsMediaPlaying(true);
    };

    window.addEventListener('mediaUpdate', handleMediaUpdate);
    return () => {
      window.removeEventListener('mediaUpdate', handleMediaUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="w-full">
        <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowFavorites(!showFavorites)}
            className="rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <Star className="w-6 h-6" />
          </Button>
        </div>
        {showFavorites && (
          <div className="fixed right-6 top-24 z-50 w-96">
            <FavoritesList />
          </div>
        )}
        <div className="w-full">
          <div key="search" className="w-full fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-xl px-4">
            <SearchBar />
          </div>
          <div className="flex gap-6 mt-24 w-full max-w-[1920px] mx-auto px-4" key="main-content">
            <div className="w-[70%] h-[calc(100vh-8rem)] overflow-auto">
              <div className="space-y-6">
                <div className="bg-dark-card rounded-lg p-4">
                  <h2 className="text-xl font-semibold mb-4">Media Player</h2>
                  <MediaPlayer />
                  <YouTubeIntegration />
                </div>
              </div>
            </div>
            <div className="w-[30%] h-[calc(100vh-8rem)] overflow-auto">
              <div className="bg-dark-card rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Media Queue</h2>
                <MediaTab />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimeWeatherPanel />
      <SettingsPanel />
    </div>
  );
};

export default Index;