export const seasonalPatterns = {
  highSeason: {
    periods: [
      { 
        name: 'Christmas/New Year',
        months: ['December', 'January'],
        occupancy: 85,
        rate: 250,
        notes: 'Peak international travel, holiday celebrations'
      },
      { 
        name: 'Carnival',
        months: ['February'],
        occupancy: 90,
        rate: 265,
        notes: 'Major cultural events, perfect weather'
      },
      { 
        name: 'Easter/Spring Break',
        months: ['March', 'April'],
        occupancy: 80,
        rate: 235,
        notes: 'Family travel, university breaks'
      }
    ],
    averageOccupancy: 85,
    averageDailyRate: 250,
    weatherConditions: 'Dry season, low humidity, 28-32°C',
    targetMarkets: ['US Winter Escape', 'European Holiday', 'LATAM Festivals'],
    source: 'ATP Tourism Seasonal Data 2023'
  },
  shoulderSeason: {
    periods: [
      {
        name: 'American Summer',
        months: ['June', 'July', 'August'],
        occupancy: 65,
        rate: 195,
        notes: 'US/EU long vacations, digital nomads'
      },
      {
        name: 'Fall Travel',
        months: ['September', 'October'],
        occupancy: 60,
        rate: 185,
        notes: 'Business + remote work travel'
      }
    ],
    averageOccupancy: 62,
    averageDailyRate: 195,
    weatherConditions: 'Mixed sun/rain, 26-30°C, afternoon showers',
    targetMarkets: ['Digital Nomads', 'Extended Stay', 'Business Travel'],
    source: 'Regional Hotel Performance Data 2023'
  },
  lowSeason: {
    periods: [
      {
        name: 'Green Season',
        months: ['May', 'November'],
        occupancy: 45,
        rate: 165,
        notes: 'Lush landscapes, fewer tourists'
      }
    ],
    averageOccupancy: 45,
    averageDailyRate: 165,
    weatherConditions: 'Regular rainfall, 25-28°C, high humidity',
    opportunities: [
      'Eco-tourism focus (peak biodiversity)',
      'Photography workshops',
      'Local market promotions',
      'Digital nomad packages'
    ],
    source: 'ETESA Weather Patterns 2023'
  },
  revenueCalculation: {
    highSeason: {
      days: 120,
      revenue: 0.216, // 4 villas × $250 × 0.85 × 120 days
      visitors: 408   // Based on average stay of 5 days
    },
    shoulderSeason: {
      days: 150,
      revenue: 0.140, // 4 villas × $195 × 0.62 × 150 days
      visitors: 336   // Based on average stay of 7 days (longer in shoulder)
    },
    lowSeason: {
      days: 95,
      revenue: 0.064, // 4 villas × $165 × 0.45 × 95 days
      visitors: 120   // Based on average stay of 6 days
    }
  }
}; 