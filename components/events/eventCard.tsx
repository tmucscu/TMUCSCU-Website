"use client";

import { EventType } from "../../app/events/page";
import PrimaryRoundButton from "../button/primaryRoundButton";
import SecondaryRoundButton from "../button/secondaryRoundButton";
import TextButton from "../button/textButton";
import clsx from "clsx";
import { formatDateAndLocation } from "./utils";
import { useState } from "react";

const EventCard = ({
  event,
  inverted = false,
}: {
  event: EventType;
  inverted: boolean;
}) => {
  const [opened, setOpened] = useState(false);

  const RoundButton = inverted ? SecondaryRoundButton : PrimaryRoundButton;
  const formattedDateAndLocation = formatDateAndLocation({
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
  });

  return (
    <div
      className={clsx(
        "grid grid-cols-10 bg-opacity-40 rounded-2xl p-10 gap-10 mb-10",
        inverted
          ? "border-[1px] border-black dark:border-white"
          : "bg-active dark:bg-activeDark dark:bg-opacity-20"
      )}
    >
      <div className="col-span-7">
        <h2 className="font-bold">{event.name}</h2>
        <p className="font-kulim">{formattedDateAndLocation}</p>
        <br />

        <p className={clsx("whitespace-pre-wrap", !opened && "line-clamp-5")}>
          {event.details}
        </p>

        <div className="flex justify-end pt-2">
          <TextButton
            text={opened ? "Read Less ▲" : "Read More ▼"}
            onClick={() => {
              setOpened(!opened);
            }}
          />
        </div>

        <div className="mt-12">
          <RoundButton
            text={"Sign Up"}
            onClick={() => {
              const win = window.open(event.signUpLink, "_blank");
              win?.focus();
            }}
          />
        </div>
      </div>

      <div className="col-span-3 flex justify-center">
        <img className="h-64 rounded-xl" src={event.imageUrl} />
      </div>
    </div>
  );
};

export default EventCard;
