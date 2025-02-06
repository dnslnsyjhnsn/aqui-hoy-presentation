export const growthMetrics = {
  cagr: {
    title: 'Revenue CAGR',
    value: '41.4%',
    description: 'Compound Annual Growth Rate (Average yearly growth rate)',
    source: 'Financial projections based on current operations',
    methodology: 'CAGR = (Final Value/Initial Value)^(1/4) - 1',
    breakdown: [
      { label: 'Starting Revenue (2024)', value: '$420K' },
      { label: 'Final Revenue (2028)', value: '$1.68M' }
    ]
  },
  visitorGrowth: {
    title: 'Visitor Growth',
    value: '14.4%',
    description: 'Annual visitor growth rate',
    source: 'ATP Tourism Statistics 2023',
    methodology: 'Based on regional tourism growth patterns',
    breakdown: [
      { label: 'Current Annual Visitors', value: '864' },
      { label: 'Target 2028', value: '3,360' }
    ],
    supportingData: {
      regionalGrowth: {
        source: 'Panama Tourism Authority 2023',
        value: '12.4%',
        note: 'Pacific region tourism growth'
      },
      marketResearch: {
        source: 'UNWTO Tourism Barometer 2023',
        value: '15.2%',
        note: 'Central America luxury segment growth'
      },
      historicalData: {
        source: 'ATP Historical Data 2019-2023',
        trend: 'Consistent 13-16% annual growth in luxury eco-tourism'
      }
    }
  },
  revenuePerVisitor: {
    title: 'Revenue per Visitor',
    value: '+5.2%',
    description: 'Year over Year growth in average revenue per visitor',
    source: 'Current operational data & industry benchmarks',
    methodology: 'Based on rate optimization and added services',
    breakdown: [
      { label: 'Current Average', value: '$486/stay' },
      { label: 'Target 2028', value: '$595/stay' }
    ]
  }
}; 