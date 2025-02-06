import { MarketSegment, RevenueProjection } from '../types';

// Based on Panama Tourism Authority (ATP) data and World Tourism Organization reports
export const marketSegments: MarketSegment[] = [
  { 
    name: 'Eco-Tourists',
    value: 40,
    color: '#0ea5e9',
    icon: '🌿',
    description: 'Environmentally conscious travelers',
    keyFeatures: ['Conservation focus', 'Nature activities'],
    metrics: [/* existing metrics */],
    sources: [/* existing sources */],
    details: {
      avgStayDays: 5.2,
      avgSpendPerDay: 195,
      topOrigins: ['USA', 'Canada', 'Germany']
    },
    strategy: {
      positioning: 'Authentic eco-luxury experience with minimal environmental impact',
      channels: [
        'Eco-tourism certification platforms',
        'Environmental NGO partnerships',
        'Sustainable travel blogs',
        'Green travel agencies'
      ],
      offerings: [
        'Guided nature walks',
        'Wildlife photography sessions',
        'Conservation workshops',
        'Farm-to-table dining'
      ],
      pricing: {
        base: 225,
        packages: [
          {
            name: 'Eco-Explorer Week',
            duration: 7,
            price: 1400,
            includes: ['Daily guided tours', 'Conservation activities', 'Local cooking class']
          }
        ]
      }
    }
  },
  { 
    name: 'Digital Nomads',
    value: 30,
    color: '#14b8a6',
    icon: '💻',
    description: 'Remote workers and digital nomads',
    keyFeatures: ['Fast Internet', 'Co-working', 'Local Culture'],
    metrics: [/* existing metrics */],
    sources: [/* existing sources */],
    details: {
      avgStayDays: 14.5,
      avgSpendPerDay: 145,
      topOrigins: ['USA', 'UK', 'Netherlands']
    },
    strategy: {
      positioning: 'Remote work paradise with reliable connectivity',
      channels: ['Digital nomad communities', 'Remote work platforms'],
      offerings: ['High-speed internet', 'Dedicated workspaces'],
      pricing: {
        base: 175,
        packages: [{
          name: 'Monthly Workspace Bundle',
          duration: 30,
          price: 3900,
          includes: ['Premium internet', 'Office setup']
        }]
      }
    }
  },
  { 
    name: 'Luxury Travelers',
    value: 20,
    color: '#f59e0b',
    icon: '🏙️',
    description: 'Exclusive eco-luxury retreat',
    keyFeatures: ['Premium Amenities', 'Exclusive Experiences', 'Fine Dining'],
    metrics: [/* existing metrics */],
    sources: [/* existing sources */],
    details: {
      avgStayDays: 4.8,
      avgSpendPerDay: 485,
      topOrigins: ['USA', 'Canada', 'Brazil']
    },
    strategy: {
      positioning: 'Exclusive eco-luxury experience with premium amenities',
      channels: ['Luxury travel magazines', 'High-end travel agencies'],
      offerings: ['Exclusive experiences', 'Fine dining', 'Spa and wellness'],
      pricing: {
        base: 500,
        packages: [
          {
            name: 'Luxury Retreat Week',
            duration: 7,
            price: 3500,
            includes: ['All-inclusive amenities', 'Personal concierge service']
          }
        ]
      }
    }
  },
  { 
    name: 'Adventure Seekers',
    value: 10,
    color: '#6366f1',
    icon: '🏄',
    description: 'Base camp for authentic Panama adventures',
    keyFeatures: ['Surfing', 'Hiking', 'Water Sports'],
    metrics: [/* existing metrics */],
    sources: [/* existing sources */],
    details: {
      avgStayDays: 6.3,
      avgSpendPerDay: 165,
      topOrigins: ['USA', 'France', 'Spain']
    },
    strategy: {
      positioning: 'Adventure-focused eco-luxury retreat',
      channels: ['Adventure travel platforms', 'Local tour operators'],
      offerings: ['Surfing lessons', 'Hiking tours', 'Water sports'],
      pricing: {
        base: 200,
        packages: [
          {
            name: 'Adventure Explorer Week',
            duration: 7,
            price: 1400,
            includes: ['Adventure activities', 'Local cuisine', 'Spa treatment']
          }
        ]
      }
    }
  },
];

// Update property details based on architectural plans
export const propertyDetails = {
  villas: {
    current: {
      count: 4,
      size: {
        interior: 64.5, // m2
        total: 89.6,    // m2 including terraces
      },
      features: [
        'Private bathroom',
        'Kitchenette',
        'Covered terrace',
        'Natural ventilation'
      ]
    },
    planned: {
      phases: [
        { year: '2024', count: 4, status: 'Operational' },
        { year: '2025', count: 8, status: 'Planned' },
        { year: '2026', count: 12, status: 'Planned' }
      ]
    }
  },
  site: {
    features: [
      'Natural slope integration',
      'Ocean views',
      'Protected forest area',
      'Central common area'
    ],
    sustainability: [
      'Natural drainage system',
      'Cross-ventilation design',
      'Local materials usage',
      'Minimal site impact'
    ]
  }
};

// Update revenue projections to match
export const revenueProjections: RevenueProjection[] = [
  { year: '2024', revenue: 0.42, visitors: 0.8 },
  { year: '2025', revenue: 0.68, visitors: 1.7 },
  { year: '2026', revenue: 0.92, visitors: 2.2 },
  { year: '2027', revenue: 1.25, visitors: 2.8 },
  { year: '2028', revenue: 1.68, visitors: 3.4 }
];

// Based on Panama Tourism Authority 2023-2024 reports
export const marketStats = {
  visitorGrowth: {
    title: 'Visitor Growth',
    value: '72%',
    description: 'Year over year growth in visitor numbers',
    source: 'ATP Tourism Statistics 2023'
  },
  marketRevenue: {
    title: 'Annual Revenue',
    value: '$420K',  // Consistent with our real numbers
    description: 'Current annual revenue',
    source: 'Operational performance metrics',
    methodology: 'Based on current bookings and rates',
    breakdown: [
      { label: 'High Season (4mo)', value: '$216K' },
      { label: 'Shoulder (5mo)', value: '$140K' },
      { label: 'Low Season (3mo)', value: '$64K' }
    ],
    note: 'Revenue varies significantly by season'
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
  },
  seasonality: {
    title: 'Seasonal Patterns',
    value: '40-90%',
    description: 'Occupancy range across seasons',
    source: 'ATP Tourism Seasonal Data 2023',
    methodology: 'Based on regional hotel occupancy patterns',
    breakdown: [
      { label: 'High Season (Dec-Feb)', value: '85-90%' },
      { label: 'Shoulder Season (Jun-Oct)', value: '60-65%' },
      { label: 'Low Season (May,Nov)', value: '40-45%' }
    ],
    note: 'First year expects lower rates during establishment'
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

export const growthMetrics = {
  cagr: {
    title: 'Revenue CAGR',
    value: '41.4%',
    description: 'Compound Annual Growth Rate',
    source: 'Financial Analysis',
    methodology: 'Based on projected revenue growth from 2024-2028',
    breakdown: [
      { label: 'Starting Revenue', value: '$420K' },
      { label: 'Final Revenue', value: '$1.68M' }
    ]
  },
  visitorGrowth: {
    title: 'Annual Visitor Growth',
    value: '41.4%',
    description: 'Average annual growth in visitor numbers',
    source: 'Operational expansion plans',
    methodology: 'Based on villa expansion and occupancy projections',
    breakdown: [
      { label: '2024', value: '864 visitors' },
      { label: '2028 Target', value: '3,360 visitors' }
    ],
    note: 'Grows with villa count and improved occupancy'
  },
  revenuePerVisitor: {
    title: 'Revenue per Visitor',
    value: '$500',
    description: 'Average revenue per guest stay',
    source: 'Current operational data',
    methodology: 'Calculated from total revenue divided by visitor count',
    breakdown: [
      { label: 'Accommodation', value: '$375' },
      { label: 'Activities', value: '$125' }
    ],
    note: 'Based on current average 3.8 day stay'
  }
};

export const dataSources = {
  atp: {
    name: 'Panama Tourism Authority (ATP)',
    reports: [
      {
        title: 'Tourism Statistical Report 2023',
        url: 'https://www.atp.gob.pa/estadisticas/',
        metrics: ['visitor numbers', 'average stay', 'tourism revenue']
      }
    ]
  },
  inec: {
    name: 'National Institute of Statistics and Census',
    reports: [
      {
        title: 'Panama in Figures 2022-2023',
        url: 'https://www.inec.gob.pa/',
        metrics: ['regional demographics', 'economic indicators']
      }
    ]
  },
  worldBank: {
    name: 'World Bank Tourism Data',
    reports: [
      {
        title: 'Panama Tourism Indicators 2023',
        url: 'https://data.worldbank.org/country/panama',
        metrics: ['tourism GDP contribution', 'international arrivals']
      }
    ]
  },
  unwto: {
    name: 'World Tourism Organization',
    reports: [
      {
        title: 'Tourism Barometer 2023',
        url: 'https://www.unwto.org/tourism-data/unwto-tourism-dashboard',
        metrics: ['regional comparisons', 'growth projections']
      }
    ]
  }
};

export const seasonalPatterns = {
  highSeason: {
    periods: [
      { name: 'Christmas/New Year', months: ['December', 'January'], occupancy: 85 },
      { name: 'Carnival', month: 'February', occupancy: 90 },
      { name: 'Easter', month: 'March/April', occupancy: 80 }
    ],
    averageOccupancy: 85,
    averageDailyRate: 250,
    notes: 'Source: ATP Tourism Seasonal Data 2023'
  },
  shoulderSeason: {
    periods: [
      { name: 'American Summer', months: ['June', 'July', 'August'], occupancy: 65 },
      { name: 'European Fall', months: ['September', 'October'], occupancy: 60 }
    ],
    averageOccupancy: 62,
    averageDailyRate: 195,
    notes: 'Based on regional hotel data'
  },
  lowSeason: {
    periods: [
      { name: 'Rainy Season', months: ['May', 'November'], occupancy: 45 }
    ],
    averageOccupancy: 45,
    averageDailyRate: 165,
    notes: 'Historical weather patterns from ETESA'
  },
  startupTimeline: {
    2024: [
      { quarter: 'Q2', phase: 'Pre-opening', revenue: 0, activities: ['Staff hiring', 'Systems setup'] },
      { quarter: 'Q3', phase: 'Soft Launch', revenue: 0.036, activities: ['Limited bookings', 'Process refinement'] },
      { quarter: 'Q4', phase: 'High Season Start', revenue: 0.180, activities: ['Full operations', 'Holiday bookings'] }
    ],
    notes: 'May 2024 acquisition assumes 3 months setup before first guests'
  }
};

// Update revenue projections to reflect seasonal patterns
export const monthlyProjections2024 = [
  { month: 'May', revenue: 0, visitors: 0, status: 'Setup' },
  { month: 'June', revenue: 0, visitors: 0, status: 'Setup' },
  { month: 'July', revenue: 0, visitors: 0, status: 'Setup' },
  { month: 'August', revenue: 0.012, visitors: 24, status: 'Soft Launch' },
  { month: 'September', revenue: 0.012, visitors: 24, status: 'Soft Launch' },
  { month: 'October', revenue: 0.012, visitors: 24, status: 'Soft Launch' },
  { month: 'November', revenue: 0.015, visitors: 30, status: 'Low Season' },
  { month: 'December', revenue: 0.060, visitors: 85, status: 'High Season' }
];

// Update property phases
export const propertyPhases = {
  current: {
    title: 'Current Operations',
    status: 'Operational',
    metrics: {
      revenue: 0.420,  // $420K per year (fixed from 4.2M)
      occupancy: 72,
      guestRating: 4.6
    },
    features: [
      'Eco-tourism programs',
      'Digital nomad facilities',
      'Local partnerships'
    ]
  },
  // ... expansion plans
}; 