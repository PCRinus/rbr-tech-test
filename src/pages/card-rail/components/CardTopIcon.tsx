import { CardProps } from "@@pages/card-rail/components/Card";
import { ReactElement, useMemo } from "react";
import DataIcon from "@@assets/icons/data.svg?react";
import VideoIcon from "@@assets/icons/video.svg?react"

export const CardTopIcon = ({ iconType }: Pick<CardProps, "iconType">) => {
  const iconMap: Record<CardProps["iconType"], ReactElement> = useMemo(
    () => ({
      data: <DataIcon />,
      video: <VideoIcon />,
    }),
    [],
  );

  return <span>{iconMap[iconType]}</span>;
};
