import { promises as fs } from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function readTrackList(req: NextApiRequest, res: NextApiResponse) {
  const tracksDirectory = path.join(process.cwd(), 'public', 'tracks');
  const trackFiles = await fs.readdir(tracksDirectory);
  const trackList = trackFiles.map(trackFile => trackFile.split('.mp3')[0]);

  res.status(200).json({
    data: trackList,
  });
}
