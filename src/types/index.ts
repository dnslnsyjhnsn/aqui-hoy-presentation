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
}

export interface RevenueProjection {
  year: string;
  revenue: number;
} 