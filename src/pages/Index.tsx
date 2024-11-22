import { SearchBar } from '@/components/SearchBar';
import { WeatherCalendarClock } from '@/components/WeatherCalendarClock';
import { MediaPlayer } from '@/components/MediaPlayer';
import { SettingsPanel } from '@/components/SettingsPanel';
import { MediaTab } from '@/components/MediaTab';
import { FavoritesList } from '@/components/FavoritesList';
import { YouTubeIntegration } from '@/components/YouTubeIntegration';
import { getSettings } from '@/lib/localStorage';
import { useState, useEffect } from 'react';
import { DraggableWidget } from '@/components/layout/DraggableWidget';
import { LayoutManager } from '@/components/layout/LayoutManager';

const Index = () => {
  const settings = getSettings();
  const [isMediaPlaying, setIsMediaPlaying] = useState(false);

  useEffect(() => {
    const handleMediaUpdate = () => {
      setIsMediaPlaying(true);
    };

    window.addEventListener('mediaUpdate', handleMediaUpdate);
    return () => {
      window.removeEventListener('mediaUpdate', handleMediaUpdate);
    };
  }, []);

  const renderWidgets = () => {
    const baseWidgets = [
      <DraggableWidget id="weather" title="Weather & Calendar" key="weather">
        <WeatherCalendarClock className="h-full min-h-[600px]" />
      </DraggableWidget>,
      <div key="search" className="w-full">
        <SearchBar />
      </div>,
      <DraggableWidget id="youtube" title="YouTube" key="youtube">
        <YouTubeIntegration />
      </DraggableWidget>,
      <DraggableWidget id="media" title="Media Queue" key="media">
        <MediaTab />
      </DraggableWidget>,
      <div key="favorites" className="w-full">
        <FavoritesList />
      </div>
    ];

    if (settings.showMusic) {
      const musicWidget = (
        <DraggableWidget id="music" title="Music" key="music">
          <MediaPlayer />
        </DraggableWidget>
      );
      baseWidgets.splice(2, 0, musicWidget);
    }

    if (isMediaPlaying) {
      const mediaPlayerWidget = (
        <DraggableWidget id="media-player" title="Media Player" key="media-player">
          <MediaPlayer />
        </DraggableWidget>
      );
      baseWidgets.splice(0, 0, mediaPlayerWidget);
    }

    return baseWidgets;
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <LayoutManager>
          {renderWidgets()}
        </LayoutManager>
      </div>
      <SettingsPanel />
    </div>
  );
};

export default Index;
