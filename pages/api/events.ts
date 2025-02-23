import { EventStatus, EventType } from '../../types/events';
import type { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "../../firebase";

type Data = {
    events: EventType[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise<void>((resolve) => {
    getEvents().then((events) => {
      res.status(200).json({ events: events });
      resolve();
    }).catch((error) => {
      console.error(`ERROR: ${error}`)
      res.status(400).json({ events: [] });
      resolve();
    })
  });
}

const getEvents = async (): Promise<EventType[]> => {
  try {
    const eventsRef = collection(db, "events");
    const q = query(eventsRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);
    const now = new Date()
    
    const events: EventType[] = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
      id: doc.id,
      ...data,
      details: data.details.replace(/\\n/g, "\n"),
      status: data.timestamp.toDate() < now ?  EventStatus.PAST : EventStatus.UPCOMING
    } as EventType });
    
    return events;
    
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}