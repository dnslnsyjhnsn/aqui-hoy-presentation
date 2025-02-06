import { useState } from 'react';
import { staffingData } from '../../data/staffingData';

export function StatusSlide() {
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  const OperationalRiskModal = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-25" onClick={() => setSelectedRisk(null)} />
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative z-10">
        <h3 className="text-lg font-medium mb-2">Risk Analysis: Operational Scale</h3>
        <p className="text-sm text-gray-600 mb-6">Managing growth while maintaining quality</p>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Current Staff</div>
              <div className="text-blue-600 text-2xl">{staffingData.current.total}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Growth Need</div>
              <div className="text-blue-600 text-2xl">{staffingData.growthNeed.percentage}</div>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {staffingData.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-sm text-gray-600">{challenge}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setSelectedRisk(null)}
          className="w-full py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Current Status & Growth Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Timeline */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Timeline</h3>
          <div className="space-y-4">
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium">Phase 1</span> Current Operations
            </button>
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium">Phase 2</span> Expansion Planning
            </button>
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium">Phase 3</span> Market Growth
            </button>
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="font-medium">Phase 4</span> Sustainability Goals
            </button>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Analysis</h3>
          <div className="space-y-4">
            <button 
              onClick={() => setSelectedRisk('operational')}
              className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <h4 className="font-medium">Operational Scale</h4>
              <p className="text-sm text-gray-600">Managing growth while maintaining quality</p>
            </button>
            {/* ... other risk buttons ... */}
          </div>
        </div>
      </div>

      {selectedRisk === 'operational' && <OperationalRiskModal />}
    </div>
  );
} 