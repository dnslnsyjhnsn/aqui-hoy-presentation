export const staffing = {
  current: {
    fullTime: {
      operations: 1,  // Property manager/host
      description: 'Handles guest relations, booking management, and day-to-day operations',
      responsibilities: [
        'Guest check-in/check-out',
        'Booking management',
        'Vendor coordination',
        'Property maintenance oversight'
      ]
    },
    partTime: {
      cleaning: 2,    // Cleaning staff (as needed)
      maintenance: 1  // Maintenance (on call)
    },
    contractors: {
      accounting: 'Monthly',
      landscaping: 'Weekly',
      security: 'Nightly patrol'
    }
  },
  futureNeeds: {
    phase2: {  // 8 villas
      additional: {
        operations: 1,  // Assistant manager
        cleaning: 2    // Additional cleaning staff
      },
      timing: 'Q2 2025'
    },
    phase3: {  // 12 villas
      additional: {
        operations: 1,  // Activities coordinator
        maintenance: 1  // Full-time maintenance
      },
      timing: 'Q1 2026'
    }
  },
  training: {
    initial: [
      'Guest service standards',
      'Eco-property procedures',
      'Emergency protocols',
      'Booking system usage'
    ],
    ongoing: [
      'Sustainability practices',
      'Local area knowledge',
      'First aid certification',
      'Language skills'
    ]
  }
}; 