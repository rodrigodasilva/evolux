const data = [ 
  {
    "id": "1574076904000",
    "value": "+55 71 93212-9009",
    "monthyPrice": 1978.48,
    "setupPrice": 137.63,
    "currency": "R$"
  },
  {
    "id": "1568598563000",
    "value": "+55 77 91234-1111",
    "monthyPrice": 1309.08,
    "setupPrice": 1977.9,
    "currency": "R$"
  },
  {
    "id": "1576014890000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 811.28,
    "setupPrice": 1749.25,
    "currency": "R$"
  },
  {
    "id": "1582165006000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 147.54,
    "setupPrice": 807.53,
    "currency": "$"
  },
  {
    "id": "1566889133000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 1329.06,
    "setupPrice": 1764.8,
    "currency": "$"
  },
  {
    "id": "1585961556000",
    "value": "+55 11 92222-2222",
    "monthyPrice": 734.91,
    "setupPrice": 666.36,
    "currency": "U$"
  },
  {
    "id": "1568334939000",
    "value": "+55 84 91234-4321",
    "monthyPrice": 598.83,
    "setupPrice": 182.78,
    "currency": "R$"
  },
]


// A mock function to mimic making an async request for data
export function didNumberAPI(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data }), 1000)
  );
}
