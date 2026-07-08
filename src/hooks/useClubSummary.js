import { useEffect, useState } from "react";
import { getClubSummary } from "../services/club";

export function useClubSummary() {
  const [summary, setSummary] = useState({
    level: "Insider",
    points: 0,
    nextLevelPoints: 2000
  });

  useEffect(() => {
    let mounted = true;

    getClubSummary().then((data) => {
      if (mounted) setSummary(data);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return summary;
}
