export enum EventStatus {
  UPCOMING = 'UPCOMING',
  PAST = 'PAST'
}

export type EventType = {
    id: string;
    name: string;
    date: string;
    startTime?: string;
    endTime: string;
    location?: string;
    imageId: string;
    details: string;
    signUpLink?: string;
    status: EventStatus;
  };
  
  export type EventsType = {
    upcoming: EventType[];
    past: EventType[];
  };