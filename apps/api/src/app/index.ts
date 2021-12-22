import { Todo } from '@nx-awesome-todos/shared-types';
import * as express from 'express';

const todos: Todo[] = [
  {
    id: 1,
    content: 'First todo',
    completed: false,
  },
  {
    id: 2,
    content: 'Second todo',
    completed: true,
  },
];

const app = express();

app.get('/api/todos', (req, res) => {
  res.send({ todos });
});

export default app;
