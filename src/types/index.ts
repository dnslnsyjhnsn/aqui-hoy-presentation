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
  breakdown?: { label: string; value: string | number }[];
  trends?: { period: string; value: string | number }[];
  comparisonData?: { region: string; value: string | number }[];
  note?: string;
}