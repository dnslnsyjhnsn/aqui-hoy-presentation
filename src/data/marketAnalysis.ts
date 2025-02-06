export const regionalComparison = {
  panama: {
    currency: {
      name: 'US Dollar',
      advantages: [
        'No exchange rate risk',
        'Simplified accounting',
        'Attractive to US investors',
        'Lower transaction costs'
      ],
      source: 'Panama Banking Association, 2023'
    },
    tourism: {
      visitors2023: 1.8, // million
      growth: 12.4, // percentage
      avgSpend: 1200, // USD per visitor
      source: 'ATP Tourism Statistical Bulletin 2023'
    },
    infrastructure: {
      internetSpeed: 138.95, // Mbps
      airConnectivity: 35, // direct flight destinations
      source: 'Ookla Global Index 2023, Tocumen Airport Data'
    }
  },
  costaRica: {
    currency: {
      name: 'Costa Rican Colón',
      exchangeRate: 535, // CRC to USD
      volatility: 'Medium',
      source: 'Central Bank of Costa Rica, 2023'
    },
    tourism: {
      visitors2023: 2.4, // million
      growth: 8.2, // percentage
      avgSpend: 1350, // USD per visitor
      source: 'ICT Costa Rica Tourism Board 2023'
    },
    comparableProperties: [
      {
        name: 'Nayara Springs',
        location: 'Arenal',
        rooms: 35,
        adr: 850, // USD
        occupancy: 82,
        source: 'Public Financial Reports 2023'
      },
      {
        name: 'Lapa Rios Lodge',
        location: 'Osa Peninsula',
        rooms: 17,
        adr: 450,
        occupancy: 75,
        source: 'Industry Analysis 2023'
      }
    ]
  },
  colombia: {
    currency: {
      name: 'Colombian Peso',
      exchangeRate: 3950, // COP to USD
      volatility: 'High',
      source: 'Banco de la República, 2023'
    },
    tourism: {
      visitors2023: 4.6, // million
      growth: 15.1, // percentage
      avgSpend: 1150, // USD per visitor
      source: 'ProColombia Tourism Report 2023'
    },
    comparableProperties: [
      {
        name: 'Las Islas',
        location: 'Barú',
        rooms: 24,
        adr: 550, // USD
        occupancy: 71,
        source: 'Industry Analysis 2023'
      }
    ]
  },
  competitiveAdvantages: {
    panama: [
      {
        advantage: 'USD Economy',
        impact: 'Financial stability and simplified operations',
        source: 'World Bank Economic Analysis 2023'
      },
      {
        advantage: 'Strategic Location',
        impact: 'Accessible from major US/EU cities',
        source: 'Tocumen Airport Statistics 2023'
      },
      {
        advantage: 'Banking Infrastructure',
        impact: 'International banking center with 75+ banks',
        source: 'Panama Banking Association 2023'
      },
      {
        advantage: 'Tax Benefits',
        impact: 'Territorial tax system',
        source: 'PwC Tax Guide 2023'
      }
    ],
    marketGaps: [
      {
        gap: 'Luxury Eco-Resorts',
        evidence: 'Only 3 comparable properties in Pacific region',
        opportunity: 'Underserved luxury eco-tourism market',
        source: 'ATP Market Analysis 2023'
      },
      {
        gap: 'Digital Nomad Facilities',
        evidence: '15% annual growth in remote worker visas',
        opportunity: 'Limited high-end workation options',
        source: 'Migration Department Statistics 2023'
      }
    ]
  },
  economicIndicators: {
    // All data from World Bank 2023 unless noted
    gdpGrowth: {
      panama: 4.8,
      costaRica: 3.4,
      colombia: 3.1
    },
    inflation: {
      panama: 2.1,  // USD economy advantage
      costaRica: 7.4,
      colombia: 9.2
    },
    foreignInvestment: {
      panama: 4.2, // Billion USD
      costaRica: 3.1,
      colombia: 8.4
    }
  }
}; 