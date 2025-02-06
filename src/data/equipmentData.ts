interface Equipment {
  name: string;
  quantity: number;
  details?: string;  // Make details optional
}

export const equipmentData = {
  kitchen: {
    appliances: [
      { name: "Samsung Refrigerator", quantity: 2 },
      { name: "Sankey Freezer", quantity: 2 },
      { name: "Char:Broil BBQ", quantity: 1 },
      { name: "Russel Hobbs Gas Griddle", quantity: 2 },
      { name: "Samsung Microwave Oven", quantity: 1 },
      { name: "Delonghi Coffee Machine", quantity: 1 },
      { name: "Black + Decker Juice Mixer", quantity: 1 },
      { name: "Black + Decker Electronic Whisk", quantity: 1 },
      { name: "Black + Decker Toaster", quantity: 2 },
      { name: "Miestia Sandwich Maker", quantity: 1 },
      { name: "Hamilton Rice Cooker", quantity: 1 }
    ] as Equipment[]
  },
  laundry: {
    appliances: [
      { name: "Sankey Washing Machine", quantity: 2 },
      { name: "Whirlpool Dryer", quantity: 1 }
    ]
  },
  climate: {
    appliances: [
      { name: "Mounted Fans", quantity: 15 },
      { name: "Vic Floor Fan", quantity: 8 },
      { name: "Air Conditioner", quantity: 1 }
    ]
  },
  other: {
    appliances: [
      { name: "Decakila Water Fountain", quantity: 1 },
      { name: "Premier TV (32 inch)", quantity: 1 },
      { name: "Sankey TV (48 inch)", quantity: 1 },
      { name: "Hikvison Security Camera System", quantity: 1, details: "11 cameras" }
    ]
  },
  value: {
    total: 42500,
    annualDepreciation: 6071
  },
  maintenance: {
    daily: [
      "Equipment cleaning",
      "Operation checks",
      "Safety inspections"
    ],
    weekly: [
      "Deep cleaning rotation",
      "Performance testing",
      "Minor maintenance"
    ],
    monthly: [
      "Preventive maintenance",
      "Parts inspection",
      "Safety certification review"
    ],
    quarterly: [
      "Professional servicing",
      "Compliance checks",
      "Major component inspection"
    ]
  }
}; 