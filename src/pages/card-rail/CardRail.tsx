import { Card, CardProps } from "@@pages/card-rail/components/Card";
import { useMemo } from "react";

export const CardRail = () => {
  const cardData = useMemo<CardProps[]>(() => {
    return [
      {
        title: "Oracle Virtual Lap in Monza",
        tags: ["Virtual Lap"],
        timeToRead: "3 min read",
        backgroundImage: "perez",
        iconType: "video",
        cardUrl: "/card-rail/card-01",
      },
      {
        title: "Oracle Strategy Guide",
        tags: ["Oracle Strategy Guide"],
        timeToRead: "4 min",
        backgroundImage: "hannah",
        iconType: "video",
        cardUrl: "/card-rail/card-02",
      },
      {
        title: "Oracle Cloud Telemetry Data Checo",
        tags: ["Data"],
        timeToRead: "3 min read",
        backgroundImage: "stats",
        iconType: "data",
        cardUrl: "/card-rail/card-03",
      },
    ];
  }, []);

  return (
    <main className="bg-background flex h-full flex-col justify-between bg-cover bg-center bg-no-repeat px-6 py-10 lg:p-10">
      <h1 className="font-[FuturaPtBold] text-5xl text-white lg:text-[60px] lg:leading-[64px]">
        Oracle In Practice
      </h1>
      <section className="flex gap-4 overflow-x-auto overflow-y-hidden">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
    </main>
  );
};
