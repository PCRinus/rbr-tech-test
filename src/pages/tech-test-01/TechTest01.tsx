import { DriverStandingTable } from "./components/DriverStandingTable";
import { useDriverData } from "./useDriverData";

export const TechTest01 = () => {
  const { data, error, isLoading } = useDriverData(2023);

  return (
    <>
      <h1 className="mb-4 text-xl text-rbrBlue">Driver standings for 2023</h1>
      <div className="overflow-y-hidden">
        {isLoading && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}

        {data && <DriverStandingTable driverData={data} />}
      </div>
    </>
  );
};
