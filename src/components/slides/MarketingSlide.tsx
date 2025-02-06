import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  LineChart, Line
} from 'recharts';

const marketingData = {
  budget: {
    total: 24000,
    allocation: [
      { channel: 'Digital Marketing', percentage: 45, amount: 10800 },
      { channel: 'Content Creation', percentage: 30, amount: 7200 },
      { channel: 'PR & Partnerships', percentage: 25, amount: 6000 }
    ]
  },
  channels: {
    digital: {
      description: 'Targeted digital presence for key segments',
      platforms: [
        { name: 'Remote Work Platforms', budget: 4800, focus: 'NomadList, RemoteOK, WorkFrom' },
        { name: 'Social Media', budget: 3000, focus: 'Instagram, LinkedIn for professionals' },
        { name: 'SEO/SEM', budget: 2000, focus: 'Location-specific keywords' },
        { name: 'Email Marketing', budget: 1000, focus: 'Newsletter for past guests' }
      ]
    },
    content: {
      description: 'High-quality visual content and workspace documentation',
      items: [
        { name: 'Professional Photography', budget: 3000 },
        { name: 'Virtual Tours', budget: 2000 },
        { name: 'Workspace Documentation', budget: 1200 },
        { name: 'Blog & Case Studies', budget: 1000 }
      ]
    },
    partnerships: {
      description: 'Strategic partnerships for workspace and events',
      activities: [
        { name: 'Remote Work Communities', budget: 2500 },
        { name: 'Local Business Events', budget: 2000 },
        { name: 'Corporate Retreats', budget: 1500 }
      ]
    }
  },
  packages: {
    digitalNomad: {
      name: 'Digital Nomad Hub',
      investment: 15000,
      features: [
        'Dedicated high-speed fiber internet (500Mbps+)',
        'Individual workstations with ergonomic chairs',
        'Meeting/call booths',
        'Backup power system',
        '24/7 workspace access'
      ],
      pricing: {
        daily: 25,
        weekly: 150,
        monthly: 500
      },
      roi: {
        assumptions: [
          '50% average workspace occupancy',
          '6 workstations available',
          'Mix of daily/weekly/monthly users'
        ],
        monthlyRevenue: 3000,
        paybackPeriod: '5 months'
      }
    },
    fullBuyout: {
      name: 'Complete Property Buyout',
      features: [
        'Exclusive access to all 4 cabanas',
        'Private chef options',
        'Customized experiences',
        'Dedicated concierge'
      ],
      pricing: {
        base: 600,
        withServices: 800
      },
      targetMarket: [
        'Small corporate retreats',
        'Family reunions',
        'Intimate weddings',
        'Yoga/wellness retreats'
      ]
    }
  },
  campaigns: {
    q1: [
      { name: 'Remote Work Launch', budget: 3000, duration: '4 weeks' },
      { name: 'Corporate Retreat Promo', budget: 2000, duration: '6 weeks' }
    ],
    q2: [
      { name: 'Digital Nomad Special', budget: 2500, duration: '8 weeks' },
      { name: 'Summer Buyout Package', budget: 2000, duration: '6 weeks' }
    ],
    q3: [
      { name: 'Workspace Membership', budget: 2500, duration: '4 weeks' },
      { name: 'Fall Retreat Package', budget: 2000, duration: '6 weeks' }
    ],
    q4: [
      { name: 'Holiday Buyout', budget: 2500, duration: '8 weeks' },
      { name: 'New Year Retreat', budget: 1500, duration: '4 weeks' }
    ]
  },
  expansion: {
    phases: [
      {
        name: 'Phase 1: Workspace Hub',
        timeline: 'Q1 2024',
        investment: 15000,
        roi: '6-8 months'
      },
      {
        name: 'Phase 2: Additional Cabanas',
        timeline: 'Q4 2024',
        investment: 120000,
        units: 4,
        roi: '24-30 months'
      }
    ]
  }
};

interface Metrics {
  averageROI: string;
  costPerBooking: string;
  conversionRate: string;
}

interface ROIContent {
  projections: Array<{
    month: string;
    spend: number;
    revenue: number;
  }>;
  metrics: Metrics;
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: any;
  type: 'channel' | 'campaign' | 'roi';
}

const COLORS = ['#0ea5e9', '#14b8a6', '#f59e0b', '#6366f1', '#ec4899'];

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, title, content, type }) => {
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
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  {title}
                </Dialog.Title>
                
                <div className="mt-2">
                  {type === 'channel' && (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">{content.description}</p>
                      {content.platforms && content.platforms.map((platform: any, index: number) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{platform.name}</span>
                            <span className="text-primary-600">${platform.budget.toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-gray-600">{platform.focus}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {type === 'campaign' && (
                    <div className="space-y-4">
                      {Object.entries(content).map(([quarter, campaigns]: [string, any]) => (
                        <div key={quarter} className="space-y-2">
                          <h4 className="font-medium">Q{quarter.slice(1)}</h4>
                          {campaigns.map((campaign: any, index: number) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex justify-between mb-1">
                                <span>{campaign.name}</span>
                                <span className="text-primary-600">${campaign.budget.toLocaleString()}</span>
                              </div>
                              <p className="text-sm text-gray-600">Duration: {campaign.duration}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {type === 'roi' && (
                    <div className="space-y-4">
                      <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={content.projections}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" name="Revenue" />
                            <Line type="monotone" dataKey="spend" stroke="#f59e0b" name="Spend" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries((content as ROIContent).metrics).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-sm text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </div>
                            <div className="font-medium">{value}</div>
                          </div>
                        ))}
                      </div>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export function MarketingSlide() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<'channels' | 'campaigns' | 'packages' | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Marketing Plan & Budget
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Budget Allocation */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Budget Allocation
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketingData.budget.allocation}
                  dataKey="percentage"
                  nameKey="channel"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {marketingData.budget.allocation.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-4">
            <div className="text-sm text-gray-600">Total Budget</div>
            <div className="text-2xl font-bold text-primary-600">
              ${marketingData.budget.total.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Marketing Channels */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Marketing Channels
          </h3>
          <div className="space-y-4">
            {Object.entries(marketingData.channels).map(([key, channel]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedChannel(key);
                  setSelectedSection('channels');
                }}
                className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium capitalize">{key}</h4>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </div>
                  <span className="text-primary-600">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Digital Nomad Hub */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Digital Nomad Hub
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Initial Investment</span>
                <span className="text-primary-600">${marketingData.packages.digitalNomad.investment.toLocaleString()}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                {marketingData.packages.digitalNomad.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Daily Rate</div>
                <div className="font-medium">${marketingData.packages.digitalNomad.pricing.daily}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Weekly Rate</div>
                <div className="font-medium">${marketingData.packages.digitalNomad.pricing.weekly}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Monthly Rate</div>
                <div className="font-medium">${marketingData.packages.digitalNomad.pricing.monthly}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Property Buyout */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Full Property Buyout
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-600">Base Rate</div>
                  <div className="font-medium">${marketingData.packages.fullBuyout.pricing.base}/night</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">With Services</div>
                  <div className="font-medium">${marketingData.packages.fullBuyout.pricing.withServices}/night</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                {marketingData.packages.fullBuyout.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium mb-2">Target Markets</div>
              <div className="text-sm text-gray-600 space-y-1">
                {marketingData.packages.fullBuyout.targetMarket.map((market, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {market}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modals */}
      {selectedChannel && (
        <DetailModal
          isOpen={!!selectedChannel}
          onClose={() => setSelectedChannel(null)}
          title={`${selectedChannel.charAt(0).toUpperCase() + selectedChannel.slice(1)} Marketing`}
          content={marketingData.channels[selectedChannel as keyof typeof marketingData.channels]}
          type="channel"
        />
      )}

      {selectedSection === 'campaigns' && (
        <DetailModal
          isOpen={true}
          onClose={() => setSelectedSection(null)}
          title="Campaign Timeline"
          content={marketingData.campaigns}
          type="campaign"
        />
      )}
    </div>
  );
} 