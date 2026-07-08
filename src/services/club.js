import { apiRequest } from "./http";

export async function getClubSummary() {
  await apiRequest("/club/summary");

  return {
    level: "Insider",
    points: 1680,
    nextLevelPoints: 2000
  };
}
