import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { visitorAnalysis } from '../../data/visitorAnalysis';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Bar,
  BarChart
} from 'recharts';

interface StatDetailProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  value: string;
  data: any;
  type: 'visitor' | 'revenue' | 'stay' | 'occupancy';
}

const StatDetail: React.FC<StatDetailProps> = ({ isOpen, onClose, title, value, data, type }) => {
  const renderChart = () => {
    switch (type) {
      case 'visitor':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={visitorAnalysis.visitor.growthProjections.monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="visitors" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'revenue':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.projections}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#14b8a6" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'stay':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.historical}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgStay" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'occupancy':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.seasonal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="occupancy" stroke="#0ea5e9" />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

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
                  {title}
                </Dialog.Title>
                
                <div className="mt-4">
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-primary-600">{value}</p>
                    <p className="text-sm text-gray-600 mt-1">{data.description}</p>
                  </div>

                  <div className="mb-6">
                    {renderChart()}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Source</h4>
                      <p className="text-sm text-gray-600">{data.source}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Methodology</h4>
                      <p className="text-sm text-gray-600">{data.methodology}</p>
                    </div>

                    {data.supportingData && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">Supporting Data</h4>
                        {Object.entries(data.supportingData).map(([key, value]: [string, any]) => (
                          <div key={key} className="mb-2">
                            <p className="text-sm font-medium">{value.source}</p>
                            <p className="text-sm text-gray-600">{value.findings}</p>
                          </div>
                        ))}
                      </div>
                    )}
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

export function OverviewSlide() {
  const [selectedStat, setSelectedStat] = useState<'visitor' | 'revenue' | 'stay' | 'occupancy' | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Aqui Hoy Resort Investment
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Investment Highlights */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Investment Highlights
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                📍
              </span>
              <span>Premium location in growing market</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                🌿
              </span>
              <span>Sustainable eco-tourism focus</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                💻
              </span>
              <span>Digital nomad friendly facilities</span>
            </li>
          </ul>
        </div>

        {/* Key Statistics */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Key Statistics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedStat('visitor')}
              className="bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <p className="text-sm text-gray-600">Visitor Growth</p>
              <p className="text-2xl font-bold text-primary-600">72%</p>
              <p className="text-xs text-gray-500 mt-1">Source: ATP Tourism Statistics 2023</p>
            </button>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Market Revenue</p>
              <p className="text-2xl font-bold text-primary-600">$420K</p>
              <p className="text-xs text-gray-500 mt-1">Annual Projected</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Avg. Stay</p>
              <p className="text-2xl font-bold text-primary-600">3.8 days</p>
              <p className="text-xs text-gray-500 mt-1">Current Average</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Occupancy Rate</p>
              <p className="text-2xl font-bold text-primary-600">45%</p>
              <p className="text-xs text-gray-500 mt-1">Current Average</p>
            </div>
          </div>
        </div>
      </div>

      {selectedStat && (
        <StatDetail
          isOpen={!!selectedStat}
          onClose={() => setSelectedStat(null)}
          title={
            selectedStat === 'visitor' ? 'Visitor Growth' :
            selectedStat === 'revenue' ? 'Market Revenue' :
            selectedStat === 'stay' ? 'Average Stay' :
            'Occupancy Rate'
          }
          value={
            selectedStat === 'visitor' ? '72%' :
            selectedStat === 'revenue' ? '$420K' :
            selectedStat === 'stay' ? '3.8 days' :
            '45%'
          }
          data={visitorAnalysis[selectedStat]}
          type={selectedStat}
        />
      )}
    </div>
  );
} 