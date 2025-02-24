import type { NextApiRequest, NextApiResponse } from 'next';
import { auth, firestore } from '../../../firebaseAdmin';

import { createTimestamp } from './utils';

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
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const decodedToken = await auth.verifyIdToken(token);
    console.log("Authenticated user:", decodedToken.uid);

    const data = req.body;

    if (!data.id) {
      return res.status(401).json({ error: "Unauthorized: No ID provided" });
    }

    const timestamp = createTimestamp(data.date, data.endTime);

    const docRef = await firestore.collection("events").doc(data.id);
    await docRef.update({...data, timestamp})

    return res.status(200).json({ id: docRef.id });
  } catch (error) {
    console.error("Error uploading to Firestore:", error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
  }
}