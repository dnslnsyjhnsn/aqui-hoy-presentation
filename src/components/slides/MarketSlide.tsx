import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { marketSegments } from '../../data/marketSegments';
import { competitiveLandscape } from '../../data/competitiveLandscape';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import type { MarketSegment } from '../../types';
import React from 'react';

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

interface MarketSegmentDetailProps {
  isOpen: boolean;
  onClose: () => void;
  segment: typeof marketSegments[number];
}

const MarketSegmentDetail: React.FC<MarketSegmentDetailProps> = ({ isOpen, onClose, segment }) => {
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
                  {segment.name}
                </Dialog.Title>
                
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">{segment.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {segment.keyFeatures.map((feature, i) => (
                          <li key={i} className="text-gray-600">{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Metrics</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {segment.metrics.map((metric, i) => (
                          <div key={i} className="bg-gray-50 p-2 rounded">
                            <div className="text-xs text-gray-600">{metric.label}</div>
                            <div className="text-sm font-medium">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Sources</h4>
                      {segment.sources.map((source: { name: string; year: number; keyFindings: string; url?: string }, i) => (
                        <div key={i} className="mb-3">
                          <p className="text-sm font-medium text-gray-900">{source.name} ({source.year})</p>
                          <p className="text-sm text-gray-600">{source.keyFindings}</p>
                          {source.url && (
                            <a 
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700"
                            >
                              View Source
                            </a>
                          )}
                        </div>
                      ))}
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

interface CompetitorDetailProps {
  isOpen: boolean;
  onClose: () => void;
  competitor: typeof competitiveLandscape.competitors[keyof typeof competitiveLandscape.competitors];
  country: string;
}

const CompetitorDetail: React.FC<CompetitorDetailProps> = ({ isOpen, onClose, competitor, country }) => {
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-2xl font-bold mb-4">
                  {country}
                </Dialog.Title>
                
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">{competitor.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {competitor.keyFeatures.map((feature, i) => (
                          <li key={i} className="text-gray-600">{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Metrics</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {competitor.metrics.map((metric, i) => (
                          <div key={i} className="bg-gray-50 p-2 rounded">
                            <div className="text-xs text-gray-600">{metric.label}</div>
                            <div className="text-sm font-medium">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Sources</h4>
                      {competitor.sources.map((source: { name: string; year: number; keyFindings: string; url?: string }, i) => (
                        <div key={i} className="mb-3">
                          <p className="text-sm font-medium text-gray-900">{source.name} ({source.year})</p>
                          <p className="text-sm text-gray-600">{source.keyFindings}</p>
                          {source.url && (
                            <a 
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700"
                            >
                              View Source
                            </a>
                          )}
                        </div>
                      ))}
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export function MarketSlide() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Market Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Market Segments */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Market Segments
          </h3>
          <div className="space-y-4">
            {marketSegments.map((segment) => (
              <button
                key={segment.name}
                onClick={() => setSelectedSegment(segment.name)}
                className="w-full flex items-center justify-between text-gray-700 hover:bg-gray-50 p-3 rounded transition-colors"
              >
                <div className="flex items-center">
                  <span 
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: segment.color + '20', color: segment.color }}
                  >
                    {segment.icon}
                  </span>
                  <span>{segment.name}</span>
                </div>
                <span className="font-medium">{segment.value}%</span>
              </button>
            ))}
          </div>

          {/* Pie Chart with Labels */}
          <div className="h-[300px] mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketSegments}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={renderCustomizedLabel}
                  labelLine={true}
                >
                  {marketSegments.map((segment, index) => (
                    <Cell key={`cell-${index}`} fill={segment.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Competitive Landscape */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Competitive Landscape
          </h3>
          <div className="space-y-4">
            {Object.entries(competitiveLandscape.competitors).map(([country, data]) => (
              <button
                key={country}
                onClick={() => setSelectedCompetitor(country)}
                className="w-full text-left hover:bg-gray-50 p-4 rounded transition-colors"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    {country === 'costaRica' ? 'Costa Rica' :
                     country === 'panama' ? 'Panama' :
                     country === 'colombia' ? 'Colombia' :
                     'Mexico'}
                  </span>
                  <span className="text-primary-600">${data.avgRate}/night</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Occupancy: {data.occupancy}%</span>
                  <span>RevPAR: ${(data.avgRate * (data.occupancy/100)).toFixed(2)}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="h-[200px] mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={Object.entries(competitiveLandscape.competitors).map(([country, data]) => ({
                  name: country === 'costaRica' ? 'Costa Rica' :
                        country === 'panama' ? 'Panama' :
                        country === 'colombia' ? 'Colombia' :
                        'Mexico',
                  occupancy: data.occupancy,
                  rate: data.avgRate
                }))}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#0ea5e9" label={{ value: 'Occupancy %', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#14b8a6" label={{ value: 'Avg. Rate $', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Bar yAxisId="left" dataKey="occupancy" fill="#0ea5e9" name="Occupancy %" />
                <Bar yAxisId="right" dataKey="rate" fill="#14b8a6" name="Avg. Rate $" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detail Modals */}
      {selectedSegment && (
        <MarketSegmentDetail
          segment={marketSegments.find(s => s.name === selectedSegment)!}
          isOpen={!!selectedSegment}
          onClose={() => setSelectedSegment(null)}
        />
      )}

      {selectedCompetitor && (
        <CompetitorDetail
          competitor={competitiveLandscape.competitors[selectedCompetitor as keyof typeof competitiveLandscape.competitors]}
          country={selectedCompetitor}
          isOpen={!!selectedCompetitor}
          onClose={() => setSelectedCompetitor(null)}
        />
      )}
    </div>
  );
} 