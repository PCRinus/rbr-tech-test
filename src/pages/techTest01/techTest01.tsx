import { DriverStandingTable } from "./components/DriverStandingTable";
import { useDriverData } from "./useDriverData";

export const TechTest01 = () => {
  const { data, error, isLoading } = useDriverData(2023);

  return (
    <div>
      <h1 className="text-rbrBlue text-xl mb-4">Driver standings for 2023</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {data && <DriverStandingTable driverData={data} />}
    </div>
  );
};
