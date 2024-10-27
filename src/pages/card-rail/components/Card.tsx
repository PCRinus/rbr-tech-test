import { CardTopIcon } from "@@pages/card-rail/components/CardTopIcon";
import { Tag } from "@@pages/card-rail/components/Tag";
import { cn } from "@@utils/cn";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export type CardProps = {
  title: string;
  tags: string[];
  timeToRead: string;
  backgroundImage: "perez" | "hannah" | "stats";
  iconType: "video" | "data";
  cardUrl: string;
};

export const Card = ({
  title,
  tags,
  timeToRead,
  backgroundImage,
  iconType,
  cardUrl,
}: CardProps) => {
  const backgroundImageClassName = useMemo(
    () => `${backgroundImage}Card`,
    [backgroundImage],
  );

  return (
    <Link
      to={cardUrl}
      className={cn(
        `bg-${backgroundImageClassName} bg-cover bg-center bg-no-repeat`,
        "flex h-[412px] min-w-[310px] max-w-[310px] flex-1 flex-col justify-between rounded-xl p-6 text-white hover:cursor-pointer",
      )}
    >
      <div className="flex justify-end">
        <CardTopIcon iconType={iconType} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">{title}</h1>
        <div className="flex items-center justify-between">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
          <span className="font-[FuturaPtLight] text-sm">{timeToRead}</span>
        </div>
      </div>
    </Link>
  );
};
