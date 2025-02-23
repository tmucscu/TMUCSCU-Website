import { EventStatus, EventType, EventsType } from "../../types/events";

import { doesWindowExist } from "../../app/utils";

type FormatDateAndLocationType = {
    date: string;
    startTime?: string;
    endTime: string;
    location?: string;
}

export const formatDateAndLocation = ({date, startTime, endTime, location}: FormatDateAndLocationType) => {
    let formattedText = date + " | "
    if (startTime) 
        formattedText += startTime + "-"
    formattedText += endTime
    if (location)
        formattedText += " | " + location

    return formattedText
}

export const getEvents = async () : Promise<EventsType> => {
    if (!doesWindowExist) {
        return {upcoming: [], past: []};
    }

    const response = await fetch("/api/events");
    const { events } = await response.json();

    return {
        upcoming: events.filter((event: EventType) => event.status === EventStatus.UPCOMING),
        past: events.filter((event: EventType) => event.status === EventStatus.PAST)
    }
}