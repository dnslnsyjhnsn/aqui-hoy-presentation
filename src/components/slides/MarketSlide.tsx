import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { marketSegments, competitiveAnalysis } from '../../data/presentationData';
import type { MarketSegment } from '../../types';

// Add RADIAN constant at the top
const RADIAN = Math.PI / 180;

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: MarketSegment;
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload[0]) {
    const segment = marketSegments.find(seg => seg.name === payload[0].name);
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <h4 className="font-bold text-gray-900">{segment?.name}</h4>
        <p className="text-sm text-gray-600">Market Share: {segment?.value}%</p>
        <div className="mt-2">
          <p className="text-sm">Avg. Stay: {segment?.details.avgStayDays} days</p>
          <p className="text-sm">Daily Spend: ${segment?.details.avgSpendPerDay}</p>
          <div className="mt-1">
            <p className="text-xs font-semibold">Top Origins:</p>
            <p className="text-xs">{segment?.details.topOrigins.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  percent: number;
  name: string;
}

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name }: CustomLabelProps) => {
  const radius = outerRadius * 1.35; // Increased radius to push labels further out
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Calculate if label should be aligned left or right of the point
  const textAnchor = x > cx ? 'start' : 'end';

  return (
    <g>
      {/* Draw a line from pie to label */}
      <path
        d={`M${cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN)},${
          cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN)
        }L${x},${y}`}
        stroke="#666"
        strokeWidth={1}
        fill="none"
      />
      {/* Label text */}
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill="#666"
        dominantBaseline="middle"
        className="text-sm"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

export function MarketSlide() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Market Analysis
      </h2>
      
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Market Segments
          </h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketSegments}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120} // Reduced radius to make room for labels
                  label={renderCustomizedLabel}
                  labelLine={false}
                  onMouseEnter={(_, index) => setActiveSegment(marketSegments[index].name)}
                  onMouseLeave={() => setActiveSegment(null)}
                >
                  {marketSegments.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      opacity={activeSegment === null || activeSegment === entry.name ? 1 : 0.6}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Competitive Landscape
            </h3>
            <div className="space-y-4">
              {competitiveAnalysis.directCompetitors.map(competitor => (
                <div key={competitor.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{competitor.name}</span>
                  <div className="text-sm text-gray-600">
                    <span className="mr-4">Occupancy: {competitor.occupancyRate}%</span>
                    <span>Avg. Rate: ${competitor.avgRoomRate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Market Advantages
            </h3>
            <ul className="space-y-2">
              {competitiveAnalysis.marketAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 