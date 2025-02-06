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
  details: {
    avgStayDays: number;
    avgSpendPerDay: number;
    topOrigins: string[];
    interests: string[];
  };
  strategy: {
    positioning: string;
    channels: string[];
    offerings: string[];
    pricing: {
      base: number;  // Base rate per night
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
  explanation?: string[];
  yearByYear?: Array<{
    year: string;
    growth: string;
    reason: string;
  }>;
  note: string;
}

export interface GrowthMetrics {
  cagr: GrowthMetric;
  visitorGrowth: GrowthMetric;
  revenuePerVisitor: GrowthMetric;
}