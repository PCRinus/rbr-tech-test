import CalendarIcon from "@@assets/icons/calendar.svg?react";
import MonacoIcon from "@@assets/icons/monaco.svg?react";
import { cn } from "@@utils/cn";

type DetailsCardProps = {
  date: string;
  location: string;
  className?: string;
};

export const DetailsCard = ({
  date,
  location,
  className,
}: DetailsCardProps) => {
  return (
    <div className={cn("flex flex-col gap-5 text-3xl", className)}>
      <div className="flex items-center gap-2">
        <CalendarIcon className="" />
        <p className="uppercase">{date}</p>
      </div>
      <div className="flex items-center gap-1">
        <MonacoIcon className="scale-75" />
        <p>{location}</p>
      </div>
    </div>
  );
};
