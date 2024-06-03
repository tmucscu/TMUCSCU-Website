import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

type Data = {
    imageIds: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return new Promise<void>((resolve) => {
    getImageIdsFromGFolder(process.env.GDRIVE_FOLDER_ID).then((imageIds) => {
      res.status(200).json({ imageIds: imageIds });
      resolve();
    }).catch((error) => {
      console.error(`ERROR: ${error}`)
      res.status(400).json({ imageIds: [] });
      resolve();
    })
  });
}

const getImageIdsFromGFolder = (folderId: string) => {
    const apiKey = process.env.GDRIVE_API_KEY;
    const url = "https://www.googleapis.com/drive/v3/files";
    const params = {
      q: `'${folderId}' in parents and trashed=false`,
      key: apiKey,
      fields: "files(id)",
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    };
    return axios
      .get(url, { params })
      .then((response) => {
        if (response.status === 200) {
          const files = response.data.files;
          const imageIds: string[] = [];
          files.forEach((file: { id: string }) => {
            imageIds.push(file.id);
          });

          return imageIds;
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