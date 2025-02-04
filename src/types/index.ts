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