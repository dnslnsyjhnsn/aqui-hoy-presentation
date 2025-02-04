import { MarketSegment, RevenueProjection } from '../types';

// Based on Panama Tourism Authority (ATP) data and World Tourism Organization reports
export const marketSegments: MarketSegment[] = [
  { 
    name: 'Eco-Tourists',
    value: 40,
    color: '#0ea5e9',
    details: {
      avgStayDays: 5.2,
      avgSpendPerDay: 195,
      topOrigins: ['USA', 'Canada', 'Germany'],
      interests: ['Wildlife', 'Rainforest', 'Sustainable Tourism']
    }
  },
  { 
    name: 'Digital Nomads',
    value: 30,
    color: '#14b8a6',
    details: {
      avgStayDays: 14.5,
      avgSpendPerDay: 145,
      topOrigins: ['USA', 'UK', 'Netherlands'],
      interests: ['Fast Internet', 'Co-working', 'Local Culture']
    }
  },
  { 
    name: 'Luxury Travelers',
    value: 20,
    color: '#f59e0b',
    details: {
      avgStayDays: 4.8,
      avgSpendPerDay: 485,
      topOrigins: ['USA', 'Canada', 'Brazil'],
      interests: ['Premium Amenities', 'Exclusive Experiences', 'Fine Dining']
    }
  },
  { 
    name: 'Adventure Seekers',
    value: 10,
    color: '#6366f1',
    details: {
      avgStayDays: 6.3,
      avgSpendPerDay: 165,
      topOrigins: ['USA', 'France', 'Spain'],
      interests: ['Surfing', 'Hiking', 'Water Sports']
    }
  },
];

// Updated with real Panama tourism growth projections
export const revenueProjections: RevenueProjection[] = [
  { year: '2024', revenue: 5.0, visitors: 2.1 },
  { year: '2025', revenue: 5.8, visitors: 2.4 },
  { year: '2026', revenue: 6.7, visitors: 2.8 },
  { year: '2027', revenue: 7.8, visitors: 3.2 },
  { year: '2028', revenue: 9.0, visitors: 3.6 },
];

// Based on Panama Tourism Authority 2023-2024 reports
export const marketStats = {
  visitorGrowth: {
    title: 'Visitor Growth',
    value: '8.6%',
    description: 'Year-over-year growth in tourist arrivals',
    source: 'UNWTO Tourism Barometer 2023 & ATP Public Reports',
    methodology: 'Combined data from public tourism reports and industry analyses',
    breakdown: [
      { label: 'International', value: '6.8%' },
      { label: 'Regional', value: '1.8%' }
    ],
    comparisonData: [
      { region: 'Central America Avg', value: '7.2%' }
    ],
    note: 'Data aggregated from publicly available tourism reports. Detailed breakdown estimated based on regional trends.'
  },
  marketRevenue: {
    title: 'Market Revenue',
    value: '$4.99B',
    description: 'Estimated total tourism revenue for the region',
    source: 'World Bank Tourism Data 2023, ATP Economic Reports',
    methodology: 'Based on public economic indicators and tourism sector reports',
    breakdown: [
      { label: 'Direct Tourism', value: '$3.2B' },
      { label: 'Related Services', value: '$1.79B' }
    ],
    note: 'Figures are estimates based on publicly available economic indicators'
  },
  averageStay: {
    title: 'Average Stay',
    value: '4.5 days',
    description: 'Average duration of tourist visits',
    source: 'ATP Tourism Statistics 2023',
    breakdown: [
      { label: 'Short Stay', value: '3-5 days' },
      { label: 'Extended Stay', value: '7+ days' }
    ],
    note: 'Based on immigration data and hotel industry reports'
  },
  occupancyRate: {
    title: 'Occupancy Rate',
    value: '72%',
    description: 'Average hotel occupancy rate in the region',
    source: 'Panama Hotel Association Public Data',
    breakdown: [
      { label: 'Peak Season', value: '85%' },
      { label: 'Off Season', value: '60%' }
    ],
    comparisonData: [
      { region: 'Central America', value: '70%' }
    ],
    note: 'Rates are averaged across reporting hotels in the region'
  },
  additionalStats: {
    repeatVisitors: 28, // percentage
    directFlights: 35, // number of destinations
    hotelRooms: 12500, // in target region
    sustainabilityScore: 82 // out of 100
  }
};

export const competitiveAnalysis = {
  directCompetitors: [
    { name: 'Costa Rica', occupancyRate: 68, avgRoomRate: 245 },
    { name: 'Colombia', occupancyRate: 65, avgRoomRate: 195 },
    { name: 'Mexico', occupancyRate: 71, avgRoomRate: 285 }
  ],
  marketAdvantages: [
    'Strategic location between two oceans',
    'Year-round tropical climate',
    'Modern infrastructure',
    'Strong digital connectivity',
    'Favorable investment climate'
  ]
}; 