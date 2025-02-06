import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar
} from 'recharts';
import { revenueProjections, growthMetrics } from '../../data/presentationData';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { GrowthMetric } from '../../types';

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

interface MetricDetailProps {
  isOpen: boolean;
  onClose: () => void;
  metric: GrowthMetric;
}

const MetricDetail: React.FC<MetricDetailProps> = ({ isOpen, onClose, metric }) => {
  // Create data for the visual comparison
  const yearlyData = metric.yearByYear?.map(year => ({
    year: year.year,
    growth: parseFloat(year.growth.replace('%', '')),
    reason: year.reason
  })) || [];

  const comparisonData = [
    { name: 'Costa Rica Hotels', value: 12 },
    { name: 'Panama Tourism', value: 8.2 },
    { name: 'Our Growth', value: 41.4 }
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
                  {metric.title}
                </Dialog.Title>
                
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600 mb-4">{metric.description}</p>

                  {/* Simple CAGR Calculator */}
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">CAGR Calculator</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs text-gray-600">Starting Value</label>
                        <div className="font-medium">$420K</div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Years</label>
                        <div className="font-medium">4</div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Final Value</label>
                        <div className="font-medium">$1.68M</div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Formula: (1.68/0.42)^(1/4) - 1 = 41.4%
                    </div>
                  </div>

                  {/* Year by Year Growth Chart */}
                  {metric.yearByYear && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Growth Timeline</h4>
                      <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={yearlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis tickFormatter={(value) => `${value}%`} />
                            <Tooltip 
                              formatter={(value: number) => [`${value}%`, 'Growth']}
                              labelFormatter={(label) => `Year ${label}`}
                            />
                            <Bar dataKey="growth" fill="#0ea5e9" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {/* Industry Comparison */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Industry Comparison</h4>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={comparisonData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis tickFormatter={(value) => `${value}%`} />
                          <Tooltip formatter={(value: number) => [`${value}%`, 'Growth Rate']} />
                          <Bar dataKey="value" fill="#14b8a6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Breakdown</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {metric.breakdown.map((item, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded">
                          <div className="text-xs text-gray-600">{item.label}</div>
                          <div className="text-sm font-medium">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {metric.yearByYear && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Year by Year Growth</h4>
                      <div className="space-y-2">
                        {metric.yearByYear.map((year, i) => (
                          <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <div>
                              <div className="text-sm font-medium">{year.year}</div>
                              <div className="text-xs text-gray-600">{year.reason}</div>
                            </div>
                            <div className="text-sm font-bold text-primary-600">{year.growth}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Source</h4>
                    <p className="text-xs text-gray-600">{metric.source}</p>
                    <h4 className="text-sm font-semibold text-gray-800 mt-2 mb-1">Methodology</h4>
                    <p className="text-xs text-gray-600 whitespace-pre-line">{metric.methodology}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
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