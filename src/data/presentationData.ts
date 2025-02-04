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

// Update projections to show monthly visitors and revenue
export const revenueProjections: RevenueProjection[] = [
  { year: '2024', revenue: 0.216, visitors: 0.432 },  // Current: $18K/mo, ~36 guests/mo
  { year: '2025', revenue: 0.480, visitors: 0.960 },  // Phase 2: 8 villas
  { year: '2026', revenue: 0.720, visitors: 1.440 },  // Phase 3: 12 villas
  { year: '2027', revenue: 0.960, visitors: 1.920 },  // Full capacity
  { year: '2028', revenue: 1.080, visitors: 2.160 }   // Optimized operations
];

// Based on Panama Tourism Authority 2023-2024 reports
export const marketStats = {
  visitorGrowth: {
    title: 'Current Growth',
    value: '12%',
    description: 'Month-over-month booking growth',
    source: 'Current booking data',
    methodology: 'Based on confirmed reservations',
    breakdown: [
      { label: 'Last Month', value: '32 guests' },
      { label: 'This Month', value: '36 guests' }
    ],
    note: 'Early operations phase with growing bookings'
  },
  marketRevenue: {
    title: 'Monthly Revenue',
    value: '$18K',
    description: 'Average monthly revenue from operations',
    source: 'Current operational data',
    methodology: 'Based on actual bookings and services',
    breakdown: [
      { label: 'Accommodations', value: '$12K' },
      { label: 'Services & Activities', value: '$6K' }
    ],
    note: 'Current operations at 4 eco-villas'
  },
  averageStay: {
    title: 'Average Stay',
    value: '3.8 days',
    description: 'Current average guest duration',
    source: 'Booking data from current operations',
    breakdown: [
      { label: 'Weekend Stays', value: '2-3 days' },
      { label: 'Extended Stays', value: '5+ days' }
    ],
    note: 'Based on actual guest data'
  },
  occupancyRate: {
    title: 'Current Occupancy',
    value: '45%',
    description: 'Average occupancy rate',
    source: 'Current booking data',
    breakdown: [
      { label: 'Weekday', value: '35%' },
      { label: 'Weekend', value: '65%' }
    ],
    comparisonData: [
      { region: 'Local Average', value: '42%' }
    ],
    note: 'Early phase operations with 4 villas'
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