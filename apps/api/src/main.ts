import * as cors from 'cors';
import app from './app';

const port = process.env.port || 3333;

app.use(cors());

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
