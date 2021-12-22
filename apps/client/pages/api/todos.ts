// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '@nx-awesome-todos/shared-types';

type Data = Todo[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch('http://localhost:3333/api/todos');
  const todos: Todo[] = await response.json();
  res.status(200).json(todos);
}
