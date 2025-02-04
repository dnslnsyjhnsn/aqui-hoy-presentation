import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    description: string;
    details: string[];
    metrics?: { label: string; value: string }[];
    milestones?: { date: string; description: string }[];
  };
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, title, content }) => {
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-4">
                    {content.description}
                  </p>
                  
                  {content.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {content.metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-600">{metric.label}</div>
                          <div className="text-lg font-semibold text-primary-600">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2">
                    {content.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-primary-600 text-sm">•</span>
                        </span>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {content.milestones && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Milestones</h4>
                      <div className="space-y-2">
                        {content.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-start space-x-3 text-sm">
                            <span className="text-primary-600 font-medium">{milestone.date}</span>
                            <span className="text-gray-600">{milestone.description}</span>
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

const phaseDetails = {
  'Current Operations': {
    description: 'Existing resort operations and performance metrics',
    details: [
      'Currently operating at 72% occupancy',
      'Established eco-tourism programs',
      'Digital nomad facilities in place',
      'Local partnerships active'
    ],
    metrics: [
      { label: 'Current Revenue', value: '$4.2M/yr' },
      { label: 'Guest Rating', value: '4.6/5' }
    ],
    milestones: [
      { date: '2023', description: 'Eco-certification achieved' },
      { date: 'Present', description: 'Digital nomad hub launched' }
    ]
  },
  'Expansion Planning': {
    description: 'Planned expansion and enhancement initiatives',
    details: [
      'Additional villa development',
      'Wellness center expansion',
      'Sustainable energy upgrades',
      'New digital workspace facilities'
    ],
    metrics: [
      { label: 'Investment', value: '$8.5M' },
      { label: 'ROI Target', value: '22%' }
    ],
    milestones: [
      { date: 'Q2 2024', description: 'Begin villa construction' },
      { date: 'Q4 2024', description: 'Solar installation' }
    ]
  },
  'Market Growth': {
    description: 'Strategic market expansion and positioning',
    details: [
      'New market penetration',
      'Enhanced digital presence',
      'Luxury segment targeting',
      'Partnership development'
    ],
    metrics: [
      { label: 'Growth Target', value: '+45%' },
      { label: 'New Markets', value: '3' }
    ],
    milestones: [
      { date: 'Q1 2024', description: 'European marketing launch' },
      { date: 'Q3 2024', description: 'Luxury package rollout' }
    ]
  },
  'Sustainability Goals': {
    description: 'Environmental and community impact initiatives',
    details: [
      'Carbon neutrality program',
      'Local community integration',
      'Waste reduction targets',
      'Green certification expansion'
    ],
    metrics: [
      { label: 'Carbon Target', value: '-40%' },
      { label: 'Local Hiring', value: '85%' }
    ],
    milestones: [
      { date: '2024', description: 'Solar power transition' },
      { date: '2025', description: 'Zero-waste certification' }
    ]
  }
};

const riskDetails = {
  'Market Competition': {
    description: 'Analysis of competitive landscape and differentiation strategy',
    details: [
      'New luxury resorts in region',
      'Price competition from larger chains',
      'Emerging destination markets',
      'Changing traveler preferences'
    ],
    metrics: [
      { label: 'Competitive Position', value: 'Strong' },
      { label: 'Market Share', value: '12%' }
    ]
  },
  'Operational Scale': {
    description: 'Managing growth while maintaining quality',
    details: [
      'Staff training and retention',
      'Service consistency at scale',
      'Infrastructure capacity',
      'Local resource management'
    ],
    metrics: [
      { label: 'Current Staff', value: '85' },
      { label: 'Growth Need', value: '+40%' }
    ]
  },
  'Economic Factors': {
    description: 'External economic influences and mitigation plans',
    details: [
      'Global travel trends',
      'Currency fluctuations',
      'Regional economic changes',
      'Investment climate'
    ],
    metrics: [
      { label: 'Hedge Coverage', value: '60%' },
      { label: 'Reserve Fund', value: '$2.5M' }
    ]
  },
  'Environmental': {
    description: 'Climate and environmental considerations',
    details: [
      'Seasonal weather patterns',
      'Resource sustainability',
      'Environmental regulations',
      'Climate change impacts'
    ],
    metrics: [
      { label: 'Risk Level', value: 'Managed' },
      { label: 'Green Score', value: '85/100' }
    ]
  }
};

export function ImplementationSlide() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Current Status & Growth Plan
      </h2>
      
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Timeline
          </h3>
          <div className="space-y-4">
            {Object.entries(phaseDetails).map(([phase, _], index) => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className="w-full flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <div className="w-16 text-sm font-semibold text-primary-600">
                  Phase {index + 1}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-800">{phase}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Risk Analysis
          </h3>
          <div className="space-y-4">
            {Object.entries(riskDetails).map(([risk, details]) => (
              <button
                key={risk}
                onClick={() => setSelectedRisk(risk)}
                className="w-full p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors text-left"
              >
                <div className="font-medium text-gray-800 mb-1">{risk}</div>
                <div className="text-sm text-gray-600 line-clamp-1">{details.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedPhase && (
        <DetailModal
          isOpen={!!selectedPhase}
          onClose={() => setSelectedPhase(null)}
          title={`Phase Details: ${selectedPhase}`}
          content={phaseDetails[selectedPhase as keyof typeof phaseDetails]}
        />
      )}

      {selectedRisk && (
        <DetailModal
          isOpen={!!selectedRisk}
          onClose={() => setSelectedRisk(null)}
          title={`Risk Analysis: ${selectedRisk}`}
          content={riskDetails[selectedRisk as keyof typeof riskDetails]}
        />
      )}
    </div>
  );
} 