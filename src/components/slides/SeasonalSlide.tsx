import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

export function SeasonalSlide() {
  const [selectedSeason, setSelectedSeason] = useState<'high' | 'shoulder' | 'low' | null>(null);

  // Create monthly data for visualization
  const monthlyData = [
    { month: 'Jan', occupancy: 85, rate: 250, rainfall: 45 },
    { month: 'Feb', occupancy: 90, rate: 265, rainfall: 32 },
    { month: 'Mar', occupancy: 80, rate: 235, rainfall: 48 },
    { month: 'Apr', occupancy: 80, rate: 235, rainfall: 85 },
    { month: 'May', occupancy: 45, rate: 165, rainfall: 264 },
    { month: 'Jun', occupancy: 65, rate: 195, rainfall: 256 },
    { month: 'Jul', occupancy: 65, rate: 195, rainfall: 272 },
    { month: 'Aug', occupancy: 65, rate: 195, rainfall: 265 },
    { month: 'Sep', occupancy: 60, rate: 185, rainfall: 282 },
    { month: 'Oct', occupancy: 60, rate: 185, rainfall: 310 },
    { month: 'Nov', occupancy: 45, rate: 165, rainfall: 315 },
    { month: 'Dec', occupancy: 85, rate: 250, rainfall: 135 }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Seasonal Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Occupancy & Rate Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Occupancy & Rate by Month
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#0ea5e9" />
                <YAxis yAxisId="right" orientation="right" stroke="#14b8a6" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="occupancy" stroke="#0ea5e9" name="Occupancy %" />
                <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#14b8a6" name="Rate $" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Season Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Seasonal Patterns
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => setSelectedSeason('high')}
              className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <h4 className="font-medium">High Season (Dec-Feb)</h4>
              <p className="text-sm text-gray-600">85-90% occupancy, $250-265 rate</p>
            </button>
            <button
              onClick={() => setSelectedSeason('shoulder')}
              className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <h4 className="font-medium">Shoulder Season (Jun-Oct)</h4>
              <p className="text-sm text-gray-600">60-65% occupancy, $185-195 rate</p>
            </button>
            <button
              onClick={() => setSelectedSeason('low')}
              className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <h4 className="font-medium">Low Season (May,Nov)</h4>
              <p className="text-sm text-gray-600">45% occupancy, $165 rate</p>
            </button>
          </div>
        </div>

        {/* Rainfall Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Rainfall (mm)
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="rainfall" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weather Patterns */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Weather Patterns
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Dry Season (Dec-Apr)</h4>
              <p className="text-sm text-gray-600">Low rainfall, ideal for outdoor activities</p>
            </div>
            <div>
              <h4 className="font-medium">Rainy Season (May-Nov)</h4>
              <p className="text-sm text-gray-600">Higher precipitation, morning activities recommended</p>
            </div>
          </div>
        </div>
      </div>

      {selectedSeason && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {selectedSeason === 'high' && 'High Season Details'}
              {selectedSeason === 'shoulder' && 'Shoulder Season Details'}
              {selectedSeason === 'low' && 'Low Season Details'}
            </h3>
            <button 
              onClick={() => setSelectedSeason(null)}
              className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 