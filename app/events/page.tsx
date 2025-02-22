"use client";

import "../../styles/globals.css";

import { ClipLoader } from "react-spinners";
import EventCard from "../../components/events/eventCard";
import TextPage from "../../components/pages/textPage";
import { getEvents } from "../../components/events/utils";
import { useQuery } from "@tanstack/react-query";

export type EventType = {
  name: string;
  date: string;
  startTime?: string;
  endTime: string;
  location?: string;
  imageId: string;
  details: string;
  signUpLink?: string;
};

export type EventsType = {
  upcoming: EventType[];
  past: EventType[];
};

const Events = () => {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (isLoading || error || !events) {
    return (
      <TextPage>
        {isLoading && (
          <ClipLoader
            size={50}
            color={"#095790"}
            speedMultiplier={0.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && !events && <p>Please try again.</p>}
      </TextPage>
    );
  }

  const hasUpcomingEvents = events.upcoming.length > 0;

  return (
    <TextPage>
      {hasUpcomingEvents ? (
        <div>
          <h1 className="pb-[21px]">Upcoming Events</h1>
          {events.upcoming.map((event, index) => {
            return (
              <EventCard
                key={event.name}
                event={event}
                inverted={index % 2 !== 0}
              />
            );
          })}
        </div>
      ) : null}
      <h1 className="pb-[21px]">Past Events</h1>
      {events.past.map((event, index) => {
        delete event.signUpLink;

        return (
          <EventCard
            key={event.name}
            event={event}
            inverted={(index + events.upcoming.length) % 2 !== 0}
          />
        );
      })}
    </TextPage>
  );
};

export default Events;
