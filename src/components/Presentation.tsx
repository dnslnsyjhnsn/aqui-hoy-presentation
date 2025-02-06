import { useState } from 'react';
import { OverviewSlide } from './slides/OverviewSlide';
import { MarketSlide } from './slides/MarketSlide';
import { RevenueSlide } from './slides/RevenueSlide';
import { EquipmentSlide } from './slides/EquipmentSlide';
import { TaxSlide } from './slides/TaxSlide';
import { ImplementationSlide } from './slides/ImplementationSlide';
import { SeasonalSlide } from './slides/SeasonalSlide';
import { MarketingSlide } from './slides/MarketingSlide';
import type { Slide } from '../types';

const slides: Slide[] = [
  { id: 1, title: 'Overview', component: OverviewSlide },
  { id: 2, title: 'Market Analysis', component: MarketSlide },
  { id: 3, title: 'Revenue Projections', component: RevenueSlide },
  { id: 4, title: 'Equipment', component: EquipmentSlide },
  { id: 5, title: 'Tax Analysis', component: TaxSlide },
  { id: 6, title: 'Seasonal Analysis', component: SeasonalSlide },
  { id: 7, title: 'Implementation', component: ImplementationSlide },
  { id: 8, title: 'Marketing Plan', component: MarketingSlide }
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <CurrentSlideComponent />
        
        <div className="fixed bottom-8 right-8 flex space-x-4">
          <button
            onClick={previousSlide}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
} 