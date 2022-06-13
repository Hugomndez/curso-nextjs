import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';
import { request } from 'http';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const database = new DB();

  const id = request.query.id;

  const avo = await database.getById(id as string);

  response.status(200).json(avo);
};

export default allAvos;
