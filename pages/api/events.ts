import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

type Data = {
    events: string[][];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise<void>((resolve) => {
    getEvents("Current").then((imageIds) => {
      res.status(200).json({ events: imageIds });
      resolve();
    }).catch((error) => {
      console.error(`ERROR: ${error}`)
      res.status(400).json({ events: [] });
      resolve();
    })
  });
}

const getEvents = (rangeTitle: string) => {
    const apiKey = process.env.GDRIVE_API_KEY;
    const sheetID = process.env.GDRIVE_SHEET_ID;    

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${rangeTitle}!A2:H30?key=${apiKey}`;

    return axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
            return response.data.values;
        } else {
          console.error(
            `Error: ${response.status} - ${response.data.error.message}`
          );
          return [];
        }
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
        return [];
      });
  };