import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { revenueProjections, growthMetrics } from '../../data/presentationData';
import { useState } from 'react';

const formatCurrency = (value: number) => `$${value.toFixed(1)}B`;
const formatVisitors = (value: number) => `${value.toFixed(1)}M`;

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    name: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">Year {label}</h4>
        <p className="text-sm text-primary-600">
          Revenue: {formatCurrency(payload[0].value)}
        </p>
        <p className="text-sm text-secondary-600">
          Visitors: {formatVisitors(payload[1].value)}
        </p>
      </div>
    );
  }
  return null;
};

export function RevenueSlide() {
  const [selectedMetric, setSelectedMetric] = useState<keyof typeof growthMetrics | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Revenue Projections
      </h2>
      
      <div className="w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Projected Growth 2024-2028
          </h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueProjections}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#4b5563' }}
                  tickLine={{ stroke: '#4b5563' }}
                />
                <YAxis 
                  yAxisId="revenue"
                  tickFormatter={formatCurrency}
                  tick={{ fill: '#4b5563' }}
                  tickLine={{ stroke: '#4b5563' }}
                  label={{ 
                    value: 'Revenue (Billions USD)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { fill: '#4b5563' }
                  }}
                />
                <YAxis 
                  yAxisId="visitors"
                  orientation="right"
                  tickFormatter={formatVisitors}
                  tick={{ fill: '#4b5563' }}
                  tickLine={{ stroke: '#4b5563' }}
                  label={{ 
                    value: 'Visitors (Millions)', 
                    angle: 90, 
                    position: 'insideRight',
                    style: { fill: '#4b5563' }
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  yAxisId="revenue"
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  dot={{ fill: '#0ea5e9', r: 6 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="visitors"
                  type="monotone"
                  dataKey="visitors"
                  name="Visitors"
                  stroke="#14b8a6"
                  strokeWidth={3}
                  dot={{ fill: '#14b8a6', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Growth Metrics
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setSelectedMetric('cagr')}
                  className="w-full text-left flex items-center text-gray-700 hover:bg-gray-50 p-2 rounded"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    📈
                  </span>
                  <span>Revenue CAGR: {growthMetrics.cagr.value}</span>
                </button>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  👥
                </span>
                <span>Visitor Growth: 14.4% annually</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  💰
                </span>
                <span>Revenue per Visitor: +5.2% YoY</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Growth Drivers
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  🌟
                </span>
                <span>Premium pricing strategy</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  🎯
                </span>
                <span>Focus on high-value segments</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  📱
                </span>
                <span>Digital marketing optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {selectedMetric && (
        <MetricDetail
          isOpen={!!selectedMetric}
          onClose={() => setSelectedMetric(null)}
          metric={growthMetrics[selectedMetric]}
        />
      )}
    </div>
  );
} 