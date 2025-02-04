import { useState } from 'react';
import { OverviewSlide } from './slides/OverviewSlide';
import { MarketSlide } from './slides/MarketSlide';
import { RevenueSlide } from './slides/RevenueSlide';
import { ImplementationSlide } from './slides/ImplementationSlide';
import { Slide } from '../types';

const slides: Slide[] = [
  { id: 1, title: 'Overview', component: OverviewSlide },
  { id: 2, title: 'Market Analysis', component: MarketSlide },
  { id: 3, title: 'Revenue Projections', component: RevenueSlide },
  { id: 4, title: 'Implementation', component: ImplementationSlide },
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <CurrentSlideComponent />
          
          <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4">
            <button
              onClick={previousSlide}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
            >
              Next
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 