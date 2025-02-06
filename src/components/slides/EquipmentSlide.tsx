import { equipmentData } from '../../data/equipmentData';

export function EquipmentSlide() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Equipment & Infrastructure
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Kitchen Equipment */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Kitchen Equipment
          </h3>
          <div className="space-y-2">
            {equipmentData.kitchen.appliances.map((item, index) => (
              <button
                key={index}
                className="w-full flex justify-between items-center p-2 hover:bg-gray-50 rounded transition-colors text-left"
              >
                <span>{item.quantity}x {item.name}</span>
                {item.details && <span className="text-gray-600 text-sm">{item.details}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Value */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Equipment Value
          </h3>
          <div className="space-y-4">
            <button 
              className="w-full bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition-colors text-left"
            >
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-primary-600">${equipmentData.value.total.toLocaleString()}</p>
            </button>
            <button 
              className="w-full bg-primary-50 p-4 rounded-lg hover:bg-primary-100 transition-colors text-left"
            >
              <p className="text-sm text-gray-600">Annual Depreciation</p>
              <p className="text-2xl font-bold text-primary-600">${equipmentData.value.annualDepreciation.toLocaleString()}</p>
            </button>
          </div>
        </div>

        {/* Support Equipment */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Support Equipment
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Laundry</h4>
              {equipmentData.laundry.appliances.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left text-sm mb-1 p-2 hover:bg-gray-50 rounded transition-colors"
                >
                  {item.quantity}x {item.name}
                </button>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-2">Climate</h4>
              {equipmentData.climate.appliances.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left text-sm mb-1 p-2 hover:bg-gray-50 rounded transition-colors"
                >
                  {item.quantity}x {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Other</h4>
            {equipmentData.other.appliances.map((item, index) => (
              <button
                key={index}
                className="w-full text-left text-sm mb-1 p-2 hover:bg-gray-50 rounded transition-colors"
              >
                {item.quantity}x {item.name} {item.details && `(${item.details})`}
              </button>
            ))}
          </div>
        </div>

        {/* Maintenance Overview */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Maintenance Overview
          </h3>
          <div className="space-y-4">
            {Object.entries(equipmentData.maintenance).map(([period, tasks]) => (
              <button
                key={period}
                className="w-full text-left p-3 hover:bg-gray-50 rounded transition-colors"
              >
                <h4 className="font-medium capitalize mb-2">{period}</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 