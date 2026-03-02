export type LakehouseDayKpi = {
  date: string;
  avgFarePerTrip: number;
};

export type LakehouseDemoSnapshot = {
  generatedAtUtc: string;
  runId: string;
  window: string;
  bronzeEventsCount: number;
  silverTripsCount: number;
  goldDailyFactRowCount: number;
  monthAvgFarePerTrip: number;
  topDays: LakehouseDayKpi[];
};

export const lakehouseDemo: LakehouseDemoSnapshot = {
  generatedAtUtc: "2026-03-02T12:34:44.029750+00:00",
  runId: "57babead-55a8-4a19-b77e-4fdfe75d8b1f",
  window: "2024-01",
  bronzeEventsCount: 2964606,
  silverTripsCount: 2926167,
  goldDailyFactRowCount: 85,
  monthAvgFarePerTrip: 18.64,
  topDays: [
    { date: "2024-01-01", avgFarePerTrip: 22.48 },
    { date: "2024-01-02", avgFarePerTrip: 21.57 },
    { date: "2024-01-03", avgFarePerTrip: 20.23 },
    { date: "2024-01-04", avgFarePerTrip: 18.92 },
    { date: "2024-01-05", avgFarePerTrip: 18.31 },
  ],
};
