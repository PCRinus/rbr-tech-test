import { DriverData } from "../useDriverData";
import { DriverStandingTableRow } from "./DriverStandingTableRow";

type DriverStandingTableProps = {
  driverData: DriverData[];
};

export const DriverStandingTable = ({
  driverData,
}: DriverStandingTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Driver Position</th>
          <th>Driver</th>
          <th>Team</th>
          <th>Points</th>
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
