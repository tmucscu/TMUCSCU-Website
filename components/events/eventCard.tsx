"use client";

import { useContext, useState } from "react";

import { EventType } from "../../types/events";
import PrimaryRoundButton from "../button/primaryRoundButton";
import SecondaryRoundButton from "../button/secondaryRoundButton";
import TextButton from "../button/textButton";
import { WidthContext } from "../../app/context/WidthContext.tsx";
import clsx from "clsx";
import { doesWindowExist } from "../../app/utils";
import { formatDateAndLocation } from "./utils";

const EventCard = ({
  event,
  inverted = false,
}: {
  event: EventType;
  inverted: boolean;
}) => {
  const width = useContext(WidthContext);
  const [opened, setOpened] = useState(false);

  const showLargeImage = width < 1536;

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
        "grid 2xl:grid-cols-10 bg-opacity-40 rounded-2xl p-10 gap-10 mb-10",
        inverted
          ? "border-[1px] border-black dark:border-white"
          : "bg-active dark:bg-activeDark dark:bg-opacity-20"
      )}
    >
      <div className="2xl:col-span-7">
        <h2 className="font-bold">{event.name}</h2>
        <p className="font-kulim tracking-normal">{formattedDateAndLocation}</p>
        <br />

        {showLargeImage ? (
          <img
            className=" rounded-2xl h-64 2xl:hidden mb-6"
            src={`https://drive.google.com/thumbnail?id=${event.imageId}&sz=w1000`}
            alt="Event Image"
          />
        ) : null}

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

        {event.signUpLink ? (
          <div className="mt-12">
            <RoundButton
              text={"Sign Up"}
              onClick={() => {
                if (doesWindowExist) {
                  const win = window.open(event.signUpLink, "_blank");
                  win?.focus();
                }
              }}
            />
          </div>
        ) : null}
      </div>

      {!showLargeImage ? (
        <div className="flex justify-center 2xl:col-span-3 aspect-square">
          <img
            className=" rounded-2xl hidden 2xl:block"
            src={`https://drive.google.com/thumbnail?id=${event.imageId}&sz=w1000`}
            alt="Event Image"
          />
        </div>
      ) : null}
    </div>
  );
};

export default EventCard;
