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

// Update revenue projections to realistic small luxury eco-resort numbers
export const revenueProjections: RevenueProjection[] = [
  { year: '2024', revenue: 0.2, visitors: 0.4 },  // Soft launch phase
  { year: '2025', revenue: 0.8, visitors: 1.2 },  // First full year
  { year: '2026', revenue: 1.2, visitors: 1.8 },  // Growth phase
  { year: '2027', revenue: 1.5, visitors: 2.2 },  // Stabilization
  { year: '2028', revenue: 1.8, visitors: 2.5 }   // Mature operations
];

// Based on Panama Tourism Authority 2023-2024 reports
export const marketStats = {
  visitorGrowth: {
    title: 'Projected Growth',
    value: '8.6%',
    description: 'Current operations with planned expansion',
    source: 'Internal data and regional market analysis',
    methodology: 'Based on current bookings and market response',
    breakdown: [
      { label: 'Current', value: 'Limited Operations' },
      { label: 'Year 1', value: 'Full Operations' }
    ],
    note: 'Growth projections based on current booking trends'
  },
  marketRevenue: {
    title: 'Annual Revenue',
    value: '$0.2M',
    description: 'Current annual revenue with growth plans',
    source: 'Current operations and expansion plans',
    methodology: 'Based on current rates and occupancy',
    breakdown: [
      { label: 'Current', value: '$0.2M' },
      { label: 'Year 1 Target', value: '$0.8M' }
    ],
    note: 'Expansion planned for 2025'
  },
  averageStay: {
    title: 'Target Stay Duration',
    value: '4.5 days',
    description: 'Expected average guest stay duration',
    source: 'Regional tourism statistics and target market analysis',
    breakdown: [
      { label: 'Short Stay', value: '2-3 days' },
      { label: 'Extended Stay', value: '7+ days' }
    ],
    note: 'Based on comparable properties and target market preferences'
  },
  occupancyRate: {
    title: 'Target Occupancy',
    value: '72%',
    description: 'Projected stabilized occupancy rate',
    source: 'Industry benchmarks for luxury eco-resorts',
    breakdown: [
      { label: 'Year 1 Target', value: '55%' },
      { label: 'Stabilized', value: '72%' }
    ],
    comparisonData: [
      { region: 'Regional Average', value: '65%' }
    ],
    note: 'Projections for stabilized operations (Year 3+)'
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