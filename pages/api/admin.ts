import type { NextApiRequest, NextApiResponse } from 'next';
import { auth, firestore } from '../../firebaseAdmin';

import { Timestamp } from "firebase-admin/firestore";
import { parse } from "date-fns";

type Data = {
    id?: string;
    error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
      console.error("bad token")
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const decodedToken = await auth.verifyIdToken(token);
    console.log("Authenticated user:", decodedToken.uid);

    const data = req.body;

    const timestamp = createTimestamp(data.date, data.endTime);

    console.log("writing to Firestore:", {...data, timestamp});

    const docRef = await firestore.collection("events").add({...data, timestamp});

    console.log("Firestore Write Success:", docRef.id);

    return res.status(200).json({ id: docRef.id });
  } catch (error) {
    console.error("Error uploading to Firestore:", error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
  }
}

const createTimestamp = (date: string, endTime: string) => {
    if (!endTime.includes(":")) {
        endTime = endTime.slice(0, -2) + ":00" + endTime.slice(-2);
    }

    const dateString = date + " " + endTime

    const dateParsed = parse(
        dateString,
        "MMMM d, yyyy h:mma",
        new Date()
    );

    if (isNaN(dateParsed.getTime())) {
        throw new Error(`Invalid date format: "${dateString}". Expected formats: "September 23, 2002 8PM" or "September 23, 2002 8:30PM".`);
    }

    return Timestamp.fromDate(dateParsed);
}