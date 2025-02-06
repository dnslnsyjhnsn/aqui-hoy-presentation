import type { FC } from 'react';

export interface Slide {
  id: number;
  title: string;
  component: FC;
}

export interface MarketSegment {
  name: string;
  value: number;
  color: string;
  icon: string;
  description: string;
  keyFeatures: string[];
  metrics: Array<{ label: string; value: string }>;
  sources: Array<{
    name: string;
    year: number;
    keyFindings: string;
    url?: string;
  }>;
  details: {
    avgStayDays: number;
    avgSpendPerDay: number;
    topOrigins: string[];
  };
  strategy: {
    positioning: string;
    channels: string[];
    offerings: string[];
    pricing: {
      base: number;
      packages: Array<{
        name: string;
        duration: number;
        price: number;
        includes: string[];
      }>;
    };
  };
}

export interface RevenueProjection {
  year: string;
  revenue: number;
  visitors: number;
}

export interface MarketStat {
  title: string;
  value: string;
  description: string;
  source: string;
  methodology?: string;
  breakdown?: Array<{ label: string; value: string | number }>;
  trends?: Array<{ period: string; value: string | number }>;
  comparisonData?: Array<{ region: string; value: string | number }>;
  note?: string;
}

export interface AdditionalStats {
  repeatVisitors: number;
  directFlights: number;
  hotelRooms: number;
  sustainabilityScore: number;
}

export interface MarketStats {
  visitorGrowth: MarketStat;
  marketRevenue: MarketStat;
  averageStay: MarketStat;
  occupancyRate: MarketStat;
  additionalStats: AdditionalStats;
}

export interface VillaSize {
  interior: number;
  total: number;
}

export interface VillaPhase {
  year: string;
  count: number;
  status: 'Operational' | 'Planned';
}

export interface PropertyDetails {
  villas: {
    current: {
      count: number;
      size: VillaSize;
      features: string[];
    };
    planned: {
      phases: VillaPhase[];
    };
  };
  site: {
    features: string[];
    sustainability: string[];
  };
}

export interface CustomerJourney {
  segment: string;
  phases: {
    awareness: {
      channels: string[];
      metrics: { channel: string; cac: number; conversion: number }[];
      timeline: string;
    };
    consideration: {
      touchpoints: string[];
      content: string[];
      conversionTriggers: string[];
    };
    booking: {
      process: string[];
      averageTimeToBook: number;
      commonObstacles: string[];
    };
    experience: {
      checkIn: string[];
      stay: string[];
      activities: string[];
      support: string[];
    };
    retention: {
      followUp: string[];
      loyaltyProgram: string[];
      repeatRate: number;
    };
  };
  metrics: {
    acquisitionCost: number;
    lifetimeValue: number;
    repeatBookingRate: number;
  };
}

export interface GrowthMetric {
  title: string;
  value: string;
  description: string;
  source: string;
  methodology: string;
  breakdown: Array<{ label: string; value: string }>;
  yearByYear?: Array<{
    year: string;
    growth: string;
    reason: string;
  }>;
}

export interface GrowthMetrics {
  cagr: GrowthMetric;
  visitorGrowth: GrowthMetric;
  revenuePerVisitor: GrowthMetric;
}

export interface SeasonalPeriod {
  name: string;
  months: string[];
  occupancy: number;
  rate: number;
  notes: string;
  activities?: string[];
  weather?: {
    temp: { min: number; max: number };
    rainfall: number;
    humidity: number;
    conditions: string[];
  };
}

export interface Season {
  periods: SeasonalPeriod[];
  averageOccupancy: number;
  averageDailyRate: number;
  weatherConditions: string;
  targetMarkets: string[];
  source: string;
  marketing?: {
    channels: string[];
    promotions: string[];
    packages: Array<{
      name: string;
      price: number;
      duration: number;
      includes: string[];
    }>;
  };
  activities?: {
    recommended: string[];
    indoor: string[];
    outdoor: string[];
  };
}

export interface SeasonalAnalysis {
  highSeason: Season;
  shoulderSeason: Season;
  lowSeason: Season;
  revenueCalculation: {
    [key: string]: {
      days: number;
      revenue: number;
      visitors: number;
    };
  };
}

export interface StaffingAnalysis {
  current: {
    fullTime: {
      operations: number;
      description: string;
      responsibilities: string[];
      salary: {
        base: number;
        benefits: number;
        source: string;
      };
    };
    partTime: {
      cleaning: {
        count: number;
        hoursPerWeek: number;
        ratePerHour: number;
        annualCost: number;
        source: string;
      };
      maintenance: {
        count: number;
        hoursPerWeek: number;
        ratePerHour: number;
        annualCost: number;
        source: string;
      };
    };
    contractors: {
      [key: string]: {
        frequency: string;
        annualCost: number;
        scope: string[];
      };
    };
    totalAnnualCost: number;
    costPerVilla: number;
    industryBenchmark: {
      source: string;
      averageCostPerRoom: number;
      ourPerformance: string;
    };
  };
  futureNeeds: {
    [phase: string]: {
      additional: {
        [role: string]: {
          role?: string;
          salary?: number;
          timing: string;
          count?: number;
          annualCost?: number;
          justification?: string;
        };
      };
      projectedTotalCost: number;
      costPerVilla: number;
    };
  };
  training: {
    initial: {
      programs: string[];
      cost: number;
      duration: string;
      provider: string;
    };
    ongoing: {
      programs: string[];
      annualCost: number;
      frequency: string;
    };
    certifications: {
      required: string[];
      costs: {
        initial: number;
        renewal: number;
        frequency: string;
      };
    };
  };
  laborLaws: {
    source: string;
    keyRequirements: string[];
    compliance: {
      monitoring: string;
      reporting: string;
    };
  };
  industryComparison: {
    source: string;
    metrics: {
      staffPerRoom: {
        luxury: number;
        upscale: number;
        ourTarget: number;
        note: string;
      };
      turnoverRate: {
        industry: string;
        ourTarget: string;
        retention: string[];
      };
    };
  };
}

export interface TaxAnalysis {
  reporting: {
    forms: {
      rentaJuridica: {
        sections: {
          ingresos: {
            hospedaje: number;
            alquiler: number;
            otrosIngresos: number;
          };
          gastos: {
            salarios: number;
            prestaciones: number;
            servicios: number;
            mantenimiento: number;
          };
        };
      };
      itbms: {
        rate: number;
      };
    };
  };
  incentives: {
    tourism: {
      benefits: string[];
      duration: string;
    };
  };
  deductions: {
    documentation: string[];
  };
}