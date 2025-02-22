"use client";

import "../../styles/globals.css";

import { useMemo, useState } from "react";

import EventCard from "../../components/events/eventCard";
import TextPage from "../../components/pages/textPage";
import { getEvents } from "../../components/events/utils";

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
  const [events, setEvents] = useState<EventsType>({ upcoming: [], past: [] });

  useMemo(() => {
    getEvents().then((events: EventsType) => {
      setEvents(events);
    });
  }, []);

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
