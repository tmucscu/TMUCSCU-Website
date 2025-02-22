import { EventType, EventsType } from "../../app/events/page";

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

const createEventObject = (event: string[]): EventType => {
    return {
        "name": event[0],
        "date": event[1],
        "startTime": event[2],
        "endTime": event[3],
        "location": event[4],
        "imageId": event[5],
        "details": event[6],
        "signUpLink": event[7],
      } as EventType
}

const formatEvents = (events: string[][]) : EventsType => {
    const upcoming: EventType[] = [];
    const past: EventType[] = [];

    events.slice().reverse().forEach((event: string[]) => {
        const eventObj = createEventObject(event);
        if (datePassed(eventObj.date, eventObj.endTime)) {
            past.push(eventObj)
        } else {
            console.log(eventObj)
            upcoming.push(eventObj)
        }
    })

    return {upcoming: upcoming, past: past}
}

const datePassed = (date: string, endTime: string) => {
    const dateStr = date + " " + endTime
    const formattedStr = dateStr.replace(/(\d+):?(\d+)?(AM|PM)/i, (_match, hour, minutes = "00", meridian) => {
        let h = parseInt(hour, 10);
        if (meridian.toUpperCase() === 'PM' && h !== 12) h += 12;
        if (meridian.toUpperCase() === 'AM' && h === 12) h = 0;
        return `${h}:${minutes}`;
      });
  
    return new Date(formattedStr) < new Date();
}

export const getEvents = async () : Promise<EventsType> => {
    if (!doesWindowExist) {
        return {upcoming: [], past: []};
    }

    const response = await fetch("/api/events");
    const { events } = await response.json();
    
    return formatEvents(events)

}