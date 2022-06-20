import DB from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const database = new DB();

  const id = request.query.id;

  const avo = await database.getById(id as string);

  response.status(200).json(avo);
};

export default allAvos;
