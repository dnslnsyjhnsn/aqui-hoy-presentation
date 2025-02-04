import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { marketStats } from '../../data/presentationData';

interface StatDetailProps {
  isOpen: boolean;
  onClose: () => void;
  stat: MarketStat | AdditionalStats;
}

const StatDetail: React.FC<StatDetailProps> = ({ isOpen, onClose, stat }) => {
  if (!isMarketStat(stat)) {
    return null; // or handle AdditionalStats differently
  }

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {stat.title}
                </Dialog.Title>
                
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {stat.description}
                  </p>
                  
                  {stat.breakdown && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Breakdown</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {stat.breakdown.map((item, index) => (
                          <div key={index} className="bg-gray-50 p-2 rounded">
                            <div className="text-xs text-gray-600">{item.label}</div>
                            <div className="text-sm font-medium">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {stat.trends && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Historical Trend</h4>
                      <div className="space-y-2">
                        {stat.trends.map((trend, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{trend.period}</span>
                            <span className="font-medium">{trend.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {stat.comparisonData && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Regional Comparison</h4>
                      <div className="space-y-2">
                        {stat.comparisonData.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.region}</span>
                            <span className="font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Source</h4>
                    <p className="text-xs text-gray-600">{stat.source}</p>
                    {stat.methodology && (
                      <>
                        <h4 className="text-sm font-semibold text-gray-800 mt-2 mb-1">Methodology</h4>
                        <p className="text-xs text-gray-600">{stat.methodology}</p>
                      </>
                    )}
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

export function OverviewSlide() {
  const [selectedStat, setSelectedStat] = useState<keyof Omit<MarketStats, 'additionalStats'> | null>(null);

  const isMarketStat = (stat: MarketStat | AdditionalStats): stat is MarketStat => {
    return 'title' in stat;
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Aqui Hoy Resort Investment
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Investment Highlights
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                📈
              </span>
              <span>Premium location in growing market</span>
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                🌿
              </span>
              <span>Sustainable eco-tourism focus</span>
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                💻
              </span>
              <span>Digital nomad friendly facilities</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedStat('visitorGrowth')}
              className="text-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div className="text-3xl font-bold text-primary-600">
                {marketStats.visitorGrowth.value}
              </div>
              <div className="text-sm text-gray-600">Visitor Growth</div>
            </button>
            <button
              onClick={() => setSelectedStat('marketRevenue')}
              className="text-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div className="text-3xl font-bold text-primary-600">
                {marketStats.marketRevenue.value}
              </div>
              <div className="text-sm text-gray-600">Market Revenue</div>
            </button>
            <button
              onClick={() => setSelectedStat('averageStay')}
              className="text-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div className="text-3xl font-bold text-primary-600">
                {marketStats.averageStay.value}
              </div>
              <div className="text-sm text-gray-600">Avg. Stay (Days)</div>
            </button>
            <button
              onClick={() => setSelectedStat('occupancyRate')}
              className="text-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <div className="text-3xl font-bold text-primary-600">
                {marketStats.occupancyRate.value}
              </div>
              <div className="text-sm text-gray-600">Occupancy Rate</div>
            </button>
          </div>
        </div>
      </div>

      {selectedStat && (
        <StatDetail
          isOpen={!!selectedStat}
          onClose={() => setSelectedStat(null)}
          stat={marketStats[selectedStat]}
        />
      )}
    </div>
  );
} 