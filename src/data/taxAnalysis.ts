import type { TaxAnalysis } from '../types';

export const taxAnalysis: TaxAnalysis = {
  reporting: {
    forms: {
      rentaJuridica: {
        sections: {
          ingresos: {
            hospedaje: 21305.86,
            alquiler: 0,
            otrosIngresos: 0
          },
          gastos: {
            salarios: 16166.84,
            prestaciones: 440.58,
            servicios: 300.00,
            mantenimiento: 27.00
          }
        }
      },
      itbms: {
        rate: 0.07
      }
    }
  },
  incentives: {
    tourism: {
      benefits: [
        'Property tax exemption',
        'Import duty exemption on materials',
        'Income tax exemption for first years'
      ],
      duration: '15 years from project completion'
    }
  },
  deductions: {
    documentation: [
      'Facturas fiscales',
      'Payroll records',
      'Bank statements',
      'Asset registry'
    ]
  }
}; 