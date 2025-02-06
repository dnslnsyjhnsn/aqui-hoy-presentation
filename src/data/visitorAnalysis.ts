export const visitorAnalysis = {
  visitor: {
    description: 'Year over year visitor growth rate',
    source: 'ATP Tourism Statistics 2023',
    methodology: 'Based on historical visitor data and regional tourism trends',
    growthProjections: {
      monthly: [
        { month: 'Jan', visitors: 1200 },
        { month: 'Feb', visitors: 1350 },
        { month: 'Mar', visitors: 1500 },
        { month: 'Apr', visitors: 1400 },
        { month: 'May', visitors: 1300 },
        { month: 'Jun', visitors: 1450 },
        { month: 'Jul', visitors: 1600 },
        { month: 'Aug', visitors: 1550 },
        { month: 'Sep', visitors: 1400 },
        { month: 'Oct', visitors: 1500 },
        { month: 'Nov', visitors: 1650 },
        { month: 'Dec', visitors: 1800 }
      ]
    },
    supportingData: {
      regional: {
        source: 'UNWTO Tourism Barometer 2023',
        findings: 'Central America seeing 14.2% average growth'
      },
      domestic: {
        source: 'Panama Tourism Authority',
        findings: 'Domestic tourism up 18.5% year over year'
      }
    }
  },
  revenue: {
    description: 'Projected annual revenue based on current trends',
    source: 'Financial Analysis 2023',
    methodology: 'Based on average daily rates and occupancy projections',
    projections: [
      { year: '2024', revenue: 420000 },
      { year: '2025', revenue: 680000 },
      { year: '2026', revenue: 920000 },
      { year: '2027', revenue: 1250000 },
      { year: '2028', revenue: 1680000 }
    ],
    supportingData: {
      rates: {
        source: 'Market Rate Analysis',
        findings: 'Premium rates sustainable due to unique positioning'
      },
      competition: {
        source: 'Competitive Analysis',
        findings: 'Limited luxury eco-tourism options in region'
      }
    }
  },
  stay: {
    description: 'Average length of stay per guest',
    source: 'Booking Data Analysis',
    methodology: 'Rolling average of last 12 months',
    historical: [
      { month: 'Jan', avgStay: 3.2 },
      { month: 'Feb', avgStay: 3.5 },
      { month: 'Mar', avgStay: 3.8 },
      { month: 'Apr', avgStay: 3.6 },
      { month: 'May', avgStay: 3.4 },
      { month: 'Jun', avgStay: 3.9 },
      { month: 'Jul', avgStay: 4.2 },
      { month: 'Aug', avgStay: 4.0 },
      { month: 'Sep', avgStay: 3.7 },
      { month: 'Oct', avgStay: 3.8 },
      { month: 'Nov', avgStay: 4.1 },
      { month: 'Dec', avgStay: 4.3 }
    ],
    supportingData: {
      segments: {
        source: 'Guest Segment Analysis',
        findings: 'Digital nomads averaging 7.2 days per stay'
      }
    }
  },
  occupancy: {
    description: 'Room occupancy rate',
    source: 'Property Management System',
    methodology: 'Total occupied room nights / Total available room nights',
    seasonal: [
      { month: 'Jan', occupancy: 52 },
      { month: 'Feb', occupancy: 58 },
      { month: 'Mar', occupancy: 55 },
      { month: 'Apr', occupancy: 42 },
      { month: 'May', occupancy: 38 },
      { month: 'Jun', occupancy: 45 },
      { month: 'Jul', occupancy: 48 },
      { month: 'Aug', occupancy: 46 },
      { month: 'Sep', occupancy: 40 },
      { month: 'Oct', occupancy: 43 },
      { month: 'Nov', occupancy: 47 },
      { month: 'Dec', occupancy: 54 }
    ],
    supportingData: {
      seasonality: {
        source: 'Seasonal Analysis',
        findings: 'Peak season (Dec-Mar) averaging 55% occupancy'
      },
      growth: {
        source: 'Growth Projections',
        findings: 'Expected to reach 65% by 2025'
      }
    }
  }
}; 