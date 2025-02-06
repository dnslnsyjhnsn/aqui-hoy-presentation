export const marketSegments = [
  {
    name: 'Eco-Tourists',
    value: 40,
    color: '#0ea5e9',
    icon: '🌿',
    description: 'Environmentally conscious travelers seeking sustainable experiences',
    keyFeatures: [
      'Interest in conservation',
      'Higher spending on experiences',
      'Longer average stays',
      'Strong repeat booking rates'
    ],
    metrics: [
      { label: 'Average Stay', value: '5.2 days' },
      { label: 'Daily Spend', value: '$195' },
      { label: 'Repeat Rate', value: '45%' }
    ],
    sources: [
      {
        name: 'ATP Eco-Tourism Report',
        year: 2023,
        keyFindings: 'Growing segment with 15% YoY increase',
        url: 'https://www.atp.gob.pa/estadisticas/'
      }
    ],
    details: {
      avgStayDays: 5.2,
      avgSpendPerDay: 195,
      topOrigins: ['USA', 'Canada', 'Germany']
    }
  },
  {
    name: 'Digital Nomads',
    value: 35,
    color: '#14b8a6',
    icon: '💻',
    description: 'Remote workers seeking long-term stays with reliable connectivity',
    keyFeatures: [
      'Extended stays',
      'Need for workspace',
      'Value connectivity',
      'Community focused'
    ],
    metrics: [
      { label: 'Average Stay', value: '14.5 days' },
      { label: 'Daily Spend', value: '$145' },
      { label: 'Workspace Usage', value: '85%' }
    ],
    sources: [
      {
        name: 'Digital Nomad Visa Data',
        year: 2023,
        keyFindings: 'Panama among top 10 destinations in LATAM'
      }
    ],
    details: {
      avgStayDays: 14.5,
      avgSpendPerDay: 145,
      topOrigins: ['USA', 'UK', 'Netherlands']
    }
  },
  {
    name: 'Luxury Travelers',
    value: 25,
    color: '#f59e0b',
    icon: '✨',
    description: 'High-end travelers seeking premium experiences',
    keyFeatures: [
      'Premium amenities',
      'Personalized service',
      'Exclusive experiences',
      'High daily spend'
    ],
    metrics: [
      { label: 'Average Stay', value: '4.8 days' },
      { label: 'Daily Spend', value: '$485' },
      { label: 'Service Rating', value: '4.8/5' }
    ],
    sources: [
      {
        name: 'Luxury Travel Market Analysis',
        year: 2023,
        keyFindings: 'Growing demand for eco-luxury experiences'
      }
    ],
    details: {
      avgStayDays: 4.8,
      avgSpendPerDay: 485,
      topOrigins: ['USA', 'Canada', 'Brazil']
    }
  }
]; 