import { DriverData } from "../useDriverData";
import { DriverStandingTableRow } from "./DriverStandingTableRow";

type DriverStandingTableProps = {
  driverData: DriverData[];
};

export const DriverStandingTable = ({
  driverData,
}: DriverStandingTableProps) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 text-start">Driver Position</th>
          <th className="px-4 text-start">Driver</th>
          <th className="px-4 text-start">Team</th>
          <th className="px-4 text-start">Points</th>
        </tr>
      </thead>
      <tbody>
        {driverData.map((driver, index) => (
          <DriverStandingTableRow
            position={index}
            driverData={driver}
            className="odd:bg-slate-200"
          />
        ))}
      </tbody>
    </table>
  );
};
