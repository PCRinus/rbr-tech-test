import useSWR, { Fetcher } from "swr";

export type DriverData = {
  driver_country_code: string;
  driver_fastest_laps: number;
  driver_podiums: number;
  driver_poles: number;
  driver_uuid: string;
  driver_wins: number;
  first_name: string;
  last_name: string;
  season_points: number;
  season_team_name: string;
  team_uuid: string;
};

const fetcher: Fetcher<DriverData[]> = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_TECH_TEST_01_API_KEY,
    },
  });

  const data = await response.json();

  return data;
};

export const useDriverData = (year: number) => {
  const url = `${import.meta.env.VITE_TECH_TEST_01_API_URL}/api/stats/drivers`;

  const { data, ...rest } = useSWR(`${url}/${year}`, fetcher);

  return {
    data,
    ...rest,
  };
};
