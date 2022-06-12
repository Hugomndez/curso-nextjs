import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const allAvos = async (reg: NextApiRequest, res: NextApiResponse) => {
  const database = new DB();
  const allEntries = await database.getAll();
  const length = allEntries.length;

  res.status(200).json({ data: allEntries, length });
};

export default allAvos;
