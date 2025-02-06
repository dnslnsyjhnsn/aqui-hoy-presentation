import { taxAnalysis } from '../../data/taxAnalysis';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export function TaxSlide() {
  const expenseData = [
    { name: 'Salaries', value: taxAnalysis.reporting.forms.rentaJuridica.sections.gastos.salarios },
    { name: 'Benefits', value: taxAnalysis.reporting.forms.rentaJuridica.sections.gastos.prestaciones },
    { name: 'Services', value: taxAnalysis.reporting.forms.rentaJuridica.sections.gastos.servicios },
    { name: 'Maintenance', value: taxAnalysis.reporting.forms.rentaJuridica.sections.gastos.mantenimiento }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Tax Analysis & Incentives
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Revenue & Expenses
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [
                    `$${typeof value === 'number' ? value.toFixed(2) : value}`,
                    'Amount'
                  ]}
                />
                <Bar dataKey="value" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Tourism Incentives
          </h3>
          <ul className="space-y-3">
            {taxAnalysis.incentives.tourism.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Duration: {taxAnalysis.incentives.tourism.duration}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Required Documentation
          </h3>
          <ul className="space-y-2">
            {taxAnalysis.deductions.documentation.map((doc, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <span className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center mr-2 text-xs">
                  📄
                </span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Key Metrics
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-primary-600">
                ${taxAnalysis.reporting.forms.rentaJuridica.sections.ingresos.hospedaje.toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">ITBMS Rate</p>
              <p className="text-2xl font-bold text-primary-600">
                {(taxAnalysis.reporting.forms.itbms.rate * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 