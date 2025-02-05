import type { CustomerJourney } from '../types';

export const customerJourneys: Record<string, CustomerJourney> = {
  ecoTourist: {
    segment: 'Eco-Tourists',
    phases: {
      awareness: {
        channels: [
          'Environmental NGO partnerships',
          'Sustainable travel blogs',
          'Instagram nature content',
          'Conservation events'
        ],
        metrics: [
          { channel: 'NGO Partnerships', cac: 85, conversion: 4.2 },
          { channel: 'Content Marketing', cac: 65, conversion: 3.8 }
        ],
        timeline: '60-90 days'
      },
      consideration: {
        touchpoints: [
          'Sustainability practices showcase',
          'Wildlife viewing opportunities',
          'Local community impact'
        ],
        content: [
          'Environmental impact reports',
          'Conservation success stories',
          'Behind-the-scenes sustainability'
        ],
        conversionTriggers: [
          'Carbon offset programs',
          'Local conservation projects',
          'Sustainable amenities'
        ]
      },
      booking: {
        process: ['Online booking', 'Email confirmation'],
        averageTimeToBook: 5,
        commonObstacles: ['Price comparison', 'Date availability']
      },
      experience: {
        checkIn: ['Digital check-in'],
        stay: ['Daily cleaning'],
        activities: ['Guided tours'],
        support: ['24/7 concierge']
      },
      retention: {
        followUp: ['Thank you email'],
        loyaltyProgram: ['Points system'],
        repeatRate: 28
      }
    },
    metrics: {
      acquisitionCost: 120,
      lifetimeValue: 2400,
      repeatBookingRate: 0.28
    }
  },
  // ... similar detailed journeys for other segments
};

export const fiveYearProjections = {
  revenue: {
    2024: { 
      total: 0.420,
      breakdown: {
        accommodation: 0.315,
        activities: 0.084,
        food: 0.021
      },
      segments: {
        ecoTourist: 0.168,
        digitalNomad: 0.126,
        luxuryTraveler: 0.084,
        adventureSeeker: 0.042
      }
    },
    // ... continue for each year with detailed breakdowns
  },
  occupancy: {
    2024: {
      average: 72,
      seasonal: {
        high: 85,
        shoulder: 65,
        low: 45
      }
    },
    // ... continue for each year
  },
  // ... other metrics
}; 