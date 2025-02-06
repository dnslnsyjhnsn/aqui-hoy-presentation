export const competitiveLandscape = {
  competitors: {
    costaRica: {
      occupancy: 68,
      avgRate: 245,
      source: 'Costa Rica Tourism Board Annual Report 2023',
      details: {
        highSeason: { occupancy: 82, rate: 295 },
        lowSeason: { occupancy: 54, rate: 195 }
      },
      marketShare: {
        luxury: '35%',
        ecotourism: '42%',
        digitalNomads: '23%'
      }
    },
    colombia: {
      occupancy: 65,
      avgRate: 195,
      source: 'ProColombia Tourism Statistics 2023',
      details: {
        highSeason: { occupancy: 78, rate: 245 },
        lowSeason: { occupancy: 52, rate: 145 }
      },
      marketShare: {
        luxury: '28%',
        ecotourism: '35%',
        digitalNomads: '37%'
      }
    },
    mexico: {
      occupancy: 71,
      avgRate: 285,
      source: 'SECTUR Tourism Data 2023',
      details: {
        highSeason: { occupancy: 85, rate: 345 },
        lowSeason: { occupancy: 57, rate: 225 }
      },
      marketShare: {
        luxury: '45%',
        ecotourism: '25%',
        digitalNomads: '30%'
      }
    }
  },
  marketAdvantages: {
    location: {
      advantage: 'Strategic location between two oceans',
      source: 'Panama Tourism Authority Geographic Analysis',
      metrics: {
        intlAirports: 2,
        flightTime: {
          fromMiami: '2.5 hours',
          fromNYC: '5 hours',
          fromLA: '6.5 hours'
        },
        accessibility: '35 minutes from Tocumen International'
      }
    },
    climate: {
      advantage: 'Year-round tropical climate',
      source: 'ETESA Weather Data 2023',
      metrics: {
        avgTemp: '27°C',
        sunnyDays: 280,
        rainySeason: 'May-November',
        drySeason: 'December-April'
      }
    },
    infrastructure: {
      advantage: 'Modern infrastructure',
      source: 'World Economic Forum Infrastructure Report',
      metrics: {
        internetSpeed: '150+ Mbps',
        powerGrid: '99.9% reliability',
        roadAccess: 'Recently upgraded highway',
        waterQuality: 'Treated municipal supply'
      }
    },
    connectivity: {
      advantage: 'Strong digital connectivity',
      source: 'Ookla Speedtest Global Index 2023',
      metrics: {
        fiberOptic: true,
        backupSystems: true,
        fiveGCoverage: '95% of area',
        avgDownload: '150 Mbps'
      }
    },
    investment: {
      advantage: 'Favorable investment climate',
      source: 'World Bank Doing Business Report 2023',
      metrics: {
        foreignOwnership: '100% allowed',
        taxIncentives: true,
        repatriation: 'No restrictions',
        visaPrograms: ['Friendly Nations', 'Digital Nomad', 'Pensionado']
      }
    }
  },
  sources: {
    tourism: {
      name: 'ATP Tourism Statistics',
      url: 'https://www.atp.gob.pa/estadisticas/',
      lastUpdated: '2023'
    },
    economic: {
      name: 'World Bank Panama Data',
      url: 'https://data.worldbank.org/country/panama',
      lastUpdated: '2023'
    },
    infrastructure: {
      name: 'WEF Global Competitiveness Report',
      url: 'https://www.weforum.org/reports/',
      lastUpdated: '2023'
    }
  }
}; 