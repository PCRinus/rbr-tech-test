import classNames from "classnames";
import { DriverData } from "../useDriverData";

type DriverStandingTableRow = {
  position: number;
  driverData: Pick<
    DriverData,
    | "driver_uuid"
    | "first_name"
    | "last_name"
    | "season_team_name"
    | "season_points"
  >;
};

export const DriverStandingTableRow = ({
  position,
  driverData,
  className,
}: DriverStandingTableRow & { className?: string }) => {
  const {
    driver_uuid,
    first_name,
    last_name,
    season_team_name,
    season_points,
  } = driverData;

  return (
    <tr className={classNames(className)} key={driver_uuid}>
      <td className="px-4">{position + 1}</td>
      <td className="px-4">
        {first_name} {last_name}
      </td>
      <td className="px-4">{season_team_name}</td>
      <td className="px-4">{season_points}</td>
    </tr>
  );
};