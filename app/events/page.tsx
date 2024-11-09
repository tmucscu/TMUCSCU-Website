"use client";

import "../../styles/globals.css";

import EventCard from "../../components/events/eventCard";
import TextPage from "../../components/pages/textPage";
import eventData from "./events.json";

export type EventType = {
  name: string;
  date: string;
  startTime?: string;
  endTime: string;
  location?: string;
  imageUrl: string;
  details: string;
  signUpLink?: string;
};

type EventsType = {
  upcoming: EventType[];
  past: EventType[];
};
const Events = () => {
  const events: EventsType = eventData;

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
            inverted={index % 2 !== 0}
          />
        );
      })}
    </TextPage>
  );
};

export default Events;
