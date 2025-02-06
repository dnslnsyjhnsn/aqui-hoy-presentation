export const equipment = {
  kitchen: {
    refrigeration: [
      { 
        item: 'Samsung Refrigerator',
        quantity: 2,
        details: 'Commercial grade',
        model: 'RB38A7B6BB1',
        warranty: '3 years commercial',
        vendor: 'Rodelag Panama',
        maintenance: {
          schedule: 'Quarterly',
          tasks: ['Coil cleaning', 'Temperature check', 'Seal inspection'],
          annualCost: 240
        },
        depreciation: {
          cost: 2800,
          lifespan: 7,
          annualRate: 400
        },
        replacement: '2031'
      },
      // ... similar details for other items
    ],
    cooking: [
      {
        item: 'Char-Broil BBQ',
        quantity: 1,
        details: 'Outdoor grilling station',
        model: 'Commercial TRU-Infrared',
        warranty: '2 years parts',
        vendor: 'Do It Center',
        maintenance: {
          schedule: 'Monthly',
          tasks: ['Deep clean', 'Burner check', 'Gas line inspection'],
          annualCost: 180
        },
        depreciation: {
          cost: 1200,
          lifespan: 5,
          annualRate: 240
        },
        replacement: '2029'
      }
      // ... other items
    ]
  },
  maintenanceSchedule: {
    daily: [
      'Equipment cleaning',
      'Operation checks',
      'Safety inspections'
    ],
    weekly: [
      'Deep cleaning rotation',
      'Performance testing',
      'Minor maintenance'
    ],
    monthly: [
      'Preventive maintenance',
      'Parts inspection',
      'Safety certification review'
    ],
    quarterly: [
      'Professional servicing',
      'Compliance checks',
      'Major component inspection'
    ]
  },
  vendors: {
    primary: {
      name: 'Rodelag Panama',
      contact: '+507 123-4567',
      email: 'service@rodelag.com',
      response: '24h',
      services: ['Installation', 'Maintenance', 'Emergency Repairs']
    },
    backup: {
      name: 'Do It Center',
      contact: '+507 234-5678',
      email: 'commercial@doitcenter.com.pa',
      response: '48h',
      services: ['Parts', 'Replacements', 'General Repairs']
    }
  },
  replacementTimeline: [
    {
      year: 2024,
      items: ['Routine maintenance only'],
      budget: 3600
    },
    {
      year: 2025,
      items: ['Air conditioner filters', 'Kitchen small appliances'],
      budget: 5200
    },
    {
      year: 2026,
      items: ['Washing machines', 'Water heaters'],
      budget: 8400
    },
    {
      year: 2027,
      items: ['Refrigerators', 'BBQ grills'],
      budget: 12000
    }
  ],
  depreciationSummary: {
    method: 'Straight-line',
    totalValue: 42500,
    annualDepreciation: 6071,
    schedule: {
      kitchen: {
        value: 24500,
        years: 7,
        annual: 3500
      },
      laundry: {
        value: 8000,
        years: 5,
        annual: 1600
      },
      climate: {
        value: 6000,
        years: 8,
        annual: 750
      },
      other: {
        value: 4000,
        years: 5,
        annual: 800
      }
    }
  }
}; 