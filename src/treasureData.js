// TODO \\ replace static objects with dynamic fetches
// TODO \\ gems & art objects tables
const iTreasureC0_4 = [
  {
    d100: "0130",
    CP: "5d6 (17)",
    SP: "",
    EP: "",
    GP: "",
    PP: "",
  },
  {
    d100: "3160",
    CP: "",
    SP: "4d6 (14)",
    EP: "",
    GP: "",
    PP: "",
  },
  {
    d100: "6170",
    CP: "",
    SP: "",
    EP: "3d6 (10)",
    GP: "",
    PP: "",
  },
  {
    d100: "7195",
    CP: "",
    SP: "",
    EP: "",
    GP: "3d6 (10)",
    PP: "",
  },
  {
    d100: "96100",
    CP: "",
    SP: "",
    EP: "",
    GP: "",
    PP: "1d6 (3)",
  },
];

const iTreasureC5_10 = [
  {
    d100: "0130",
    CP: "4d6 x 100 (1,400)",
    SP: "",
    EP: "1d6 x 10 (35)",
    GP: "",
    PP: "",
  },
  {
    d100: "3160",
    CP: "",
    SP: "6d6 x 10 (210)",
    EP: "",
    GP: "2d6 x 10 (70)",
    PP: "",
  },
  {
    d100: "6170",
    CP: "",
    SP: "",
    EP: "1d6 x 100 (350)",
    GP: "2d6 x 10 (70)",
    PP: "",
  },
  {
    d100: "7195",
    CP: "",
    SP: "",
    EP: "",
    GP: "4d6 x 10 (140)",
    PP: "",
  },
  {
    d100: "96100",
    CP: "",
    SP: "",
    EP: "",
    GP: "2d6 x 10 (70)",
    PP: "3d6 (10)",
  },
];

const iTreasureC11_16 = [
  {
    d100: "0120",
    CP: "",
    SP: "4d6 x 100 (1,400)",
    EP: "",
    GP: "1d6 x 100 (35)",
    PP: "",
  },
  {
    d100: "2135",
    CP: "",
    SP: "",
    EP: "1d6 x 100 (350)",
    GP: "1d6 x 100 (350)",
    PP: "",
  },
  {
    d100: "3675",
    CP: "",
    SP: "",
    EP: "",
    GP: "2d6 x 100 (700)",
    PP: "1d6 x 10 (35)",
  },
  {
    d100: "76100",
    CP: "",
    SP: "",
    EP: "",
    GP: "2d6 x 100 (700)",
    PP: "2d6 x 10 (70)",
  },
];

const iTreasureC17 = [
  {
    d100: "0115",
    CP: "",
    SP: "",
    EP: "2d6 x 1000 (7000)",
    GP: "8d6 x 100 (2800)",
    PP: "",
  },
  {
    d100: "1655",
    CP: "",
    SP: "",
    EP: "",
    GP: "1d6 x 1000 (3500)",
    PP: "1d6 x 100 (350)",
  },
  {
    d100: "5600",
    CP: "",
    SP: "",
    EP: "",
    GP: "1d6 x 1000 (3500)",
    PP: "2d6 x 100 (700)",
  },
];

const hoardTreasure0_4 = [
  {
    d100: "0106",
    preciousItems: "",
    magicItems: "",
  },
  {
    d100: "0716",
    preciousItems: "2d6 (7) l0 gp gems",
    magicItems: "",
  },
  {
    d100: "1726",
    preciousItems: "2d4 (5) 25 gp art objects",
    magicItems: "",
  },
  {
    d100: "2736",
    preciousItems: "2d6 (7) 50 gp gems",
    magicItems: "",
  },
  {
    d100: "3744",
    preciousItems: "2d6 (7) 10 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "4552",
    preciousItems: "2d4 (5) 25 gp art objects",
    magicItems: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "5360",
    preciousItems: "2d6 (7) 50 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "6165",
    preciousItems: "2d6 (7) 10 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table B.",
  },
  {
    d100: "6670",
    preciousItems: "2d4 (5) 25 gp art objects",
    magicItems: "Roll 1d6 times on Magic Item Table B.",
  },
  {
    d100: "7175",
    preciousItems: "2d6 (7) 50 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table B.",
  },
  {
    d100: "7678",
    preciousItems: "2d6 (7) 10 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "7980",
    preciousItems: "2d4 (5) 25 gp art objects",
    magicItems: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "8185",
    preciousItems: "2d6 (7) 50 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "8692",
    preciousItems: "2d4 (5) 25 gp art objects",
    magicItems: "Roll 1d6 times on Magic Item Table F.",
  },
  {
    d100: "9397",
    preciousItems: "2d6 (7) 50 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table F.",
  },
  {
    d100: "9899",
    preciousItems: "2d4 (5) 25 gp art objects",
    magicItems: "Roll 1d6 times on Magic Item Table G.",
  },
  {
    d100: "100",
    preciousItems: "2d6 (7) 50 gp gems",
    magicItems: "Roll 1d6 times on Magic Item Table G.",
  },
];

const hoardTreasure5_10 = [
  {
    d100: "0104",
    precious_objects: "",
    magic_items: "",
  },
  {
    d100: "0510",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "",
  },
  {
    d100: "1116",
    precious_objects: "3d6 (10) 50 gp gem",
    magic_items: "",
  },
  {
    d100: "1722",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "",
  },
  {
    d100: "2328",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "",
  },
  {
    d100: "2932",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "3336",
    precious_objects: "3d6 ( 10) 50 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "3740",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "4144",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table A.",
  },
  {
    d100: "4549",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table B.",
  },
  {
    d100: "5054",
    precious_objects: "3d6 (10) 50 gp g ems",
    magic_items: "Roll 1d4 times on Magic Item Table B.",
  },
  {
    d100: "5559",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table B.",
  },
  {
    d100: "6063",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table B.",
  },
  {
    d100: "6466",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table C.",
  },
  {
    d100: "6769",
    precious_objects: "3d6 (l 0) 50 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table C.",
  },
  {
    d100: "7072",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table C.",
  },
  {
    d100: "7374",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table C.",
  },
  {
    d100: "7576",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "Roll once on Magic Item Table D.",
  },
  {
    d100: "7778",
    precious_objects: "3d6 (10) 50 gp gems",
    magic_items: "Roll once on Magic Item Table D.",
  },
  {
    d100: "79",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll once on Magic Item Table D.",
  },
  {
    d100: "80",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll once on Magic Item Table D.",
  },
  {
    d100: "8184",
    precious_objects: "2d4 (5) 25 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table F.",
  },
  {
    d100: "8588",
    precious_objects: "3d6 (10) 50 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table F.",
  },
  {
    d100: "8991",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table F.",
  },
  {
    d100: "9294",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table F.",
  },
  {
    d100: "9596",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table G.",
  },
  {
    d100: "9798",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table G.",
  },
  {
    d100: "99",
    precious_objects: "3d6 (10) 100 gp gems",
    magic_items: "Roll once on Magic Item Table H.",
  },
  {
    d100: "100",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll once on Magic Item Table H.",
  },
];

const hoardTreasure11_16 = [
  {
    d100: "0103",
    precious_objects: "",
    magic_items: "",
  },
  {
    d100: "0406",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "",
  },
  {
    d100: "0710",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items: "",
  },
  {
    d100: "1112",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items: "",
  },
  {
    d100: "1315",
    precious_objects: "3d6 (1 0) 1,000 gp gems",
    magic_items: "",
  },
  {
    d100: "1619",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items:
      "Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.",
  },
  {
    d100: "2023",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items:
      "Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.",
  },
  {
    d100: "2426",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items:
      "Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.",
  },
  {
    d100: "2729",
    precious_objects: "3d6 (1 0) 1,000 gp gems",
    magic_items:
      "Roll 1d4 times on Magic Item Table A and 1d6 times on Magic Item Table B.",
  },
  {
    d100: "3035",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "3640",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "4145",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "4650",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table C.",
  },
  {
    d100: "5154",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table D",
  },
  {
    d100: "5558",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table D.",
  },
  {
    d100: "5962",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table D.",
  },
  {
    d100: "6366",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table D.",
  },
  {
    d100: "6768",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll once on Magic Item Table E.",
  },
  {
    d100: "6970",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items: "Roll once on Magic Item Table E.",
  },
  {
    d100: "7172",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items: "Roll once on Magic Item Table E.",
  },
  {
    d100: "7374",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll once on Magic Item Table E.",
  },
  {
    d100: "7576",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items:
      "Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.",
  },
  {
    d100: "7778",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items:
      "Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.",
  },
  {
    d100: "7980",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items:
      "Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.",
  },
  {
    d100: "8182",
    precious_objects: "3d6 (1 0) 1,000 gp gems",
    magic_items:
      "Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.",
  },
  {
    d100: "8385",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll1d4 times on Magic Item Table H.",
  },
  {
    d100: "8688",
    precious_objects: "2d4 (5) 750 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "8990",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "9192",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "9394",
    precious_objects: "2d4 (5) 250 gp art objects",
    magic_items: "Roll once on Magic Item Table I.",
  },
  {
    d100: "9596",
    precious_objects: "3d6 (10) 500 gp gems",
    magic_items: "Roll once on Magic Item Table I.",
  },
  {
    d100: "9798",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll once on Magic Item Table I.",
  },
  {
    d100: "9900",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll once on Magic Item Table I.",
  },
];

const hoardTreasure17 = [
  {
    d100: "0102",
    precious_objects: "",
    magic_items: "",
  },
  {
    d100: "0305",
    precious_objects: "3d6 (1 0) 1, 000 gp gems",
    magic_items: "Roll 1d8 times on Magic Item Table C.",
  },
  {
    d100: "0608",
    precious_objects: "1d10 (5) 2,500 gp art objects",
    magic_items: "Roll 1d8 times on Magic Item Table C.",
  },
  {
    d100: "0911",
    precious_objects: "1d4 (2) 7,500 gp art objects",
    magic_items: "Roll 1d8 times on Magic Item Table C.",
  },
  {
    d100: "1214",
    precious_objects: "1d8 (4) 5,000 gp gems",
    magic_items: "Roll 1d8 times on Magic Item Table C.",
  },
  {
    d100: "1522",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table D.",
  },
  {
    d100: "2330",
    precious_objects: "1dl0 (5) 2,500 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table D.",
  },
  {
    d100: "3138",
    precious_objects: "1d4 (2) 7, 500 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table D.",
  },
  {
    d100: "3946",
    precious_objects: "1d8 (4) 5,000 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table D",
  },
  {
    d100: "4752",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table E.",
  },
  {
    d100: "5358",
    precious_objects: "1d10 (5) 2,500 gp art objects",
    magic_items: "Roll1d6 times on Magic Item Table E.",
  },
  {
    d100: "5963",
    precious_objects: "1d4 (2) 7,500 gp art objects",
    magic_items: "Roll 1d6 times on Magic Item Table E.",
  },
  {
    d100: "6468",
    precious_objects: "1d8 (4) 5, 000 gp gems",
    magic_items: "Roll 1d6 times on Magic Item Table E.",
  },
  {
    d100: "69",
    precious_objects: "3d6 (1 0) 1,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table G.",
  },
  {
    d100: "70",
    precious_objects: "1d10 (5) 2,500 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table G.",
  },
  {
    d100: "71",
    precious_objects: "1d4 (2) 7,500 gp art objects",
    magic_items: "Roll1d4 times on Magic Item Table G.",
  },
  {
    d100: "72",
    precious_objects: "1d8 (4) 5,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table G.",
  },
  {
    d100: "7374",
    precious_objects: "3d6 (1 0) 1,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "7576",
    precious_objects: "ld10 (5) 2,500 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "7778",
    precious_objects: "1d4 (2) 7,500 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "7980",
    precious_objects: "1d8 (4) 5,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table H.",
  },
  {
    d100: "8185",
    precious_objects: "3d6 (10) 1,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table I.",
  },
  {
    d100: "8690",
    precious_objects: "1d10 (5) 2,500 gp art objects",
    magic_items: "Roll 1d4 times on Magic Item Table I.",
  },
  {
    d100: "9195",
    precious_objects: "ld4 (2) 7,500 gp art objects",
    magic_items:
      "Roll once on Magic Item Table F and 1d4 times on Magic Item Table G.",
  },
  {
    d100: "96100",
    precious_objects: "1d8 (4) 5,000 gp gems",
    magic_items: "Roll 1d4 times on Magic Item Table I.",
  },
];



const coinHoard = {
  coins0_4: [
    {
      CP: "6d6 X 100 (2100)",
      SP: "3d6 X 100 (1050)",
      EP: "",
      GP: "2d6 X 10 (70)",
      PP: "",
    },
  ],
  coins5_10: [
    {
      CP: "2d6 X 100 (700)",
      SP: "2d6 X 1000 (7000)",
      EP: "",
      GP: "6d6 X 100 (2100)",
      PP: "3d6 x 10 (105)",
    },
  ],
  coins11_16: [
    {
      CP: "",
      SP: "",
      EP: "",
      GP: "4d6 X 1000 (1400)",
      PP: "5d6 x 100 (1750)",
    },
  ],
  coins17: [
    {
      CP: "",
      SP: "",
      EP: "",
      GP: "12d6 X 1000 (42000)",
      PP: "8d6 x 1000 (28000)",
    },
  ],
};

export const individualTreasureTables = {
  iTreasureC0_4, iTreasureC5_10, iTreasureC11_16, iTreasureC17
};

export const hoardTreasureTables = {
  hoardTreasure0_4, hoardTreasure5_10, hoardTreasure11_16, hoardTreasure17
};

export const hoardCoinsTables = {
  coinHoard
};