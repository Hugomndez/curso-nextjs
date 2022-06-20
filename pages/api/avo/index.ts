import DB from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const allAvos = async (reg: NextApiRequest, res: NextApiResponse) => {
  const database = new DB();
  const allEntries = await database.getAll();
  const length = allEntries.length;

  res.status(200).json({ data: allEntries, length });
};

export default allAvos;
