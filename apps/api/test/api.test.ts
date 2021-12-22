import * as supertest from 'supertest';
import app from '../src/app';

const requestWithSupertest = supertest(app);

describe('Example describe', () => {
  test('Example test', () => {
    expect(1).toBe(1);
  });
});

describe('Generic endpoints', () => {
  test('GET /api/todos', async () => {
    const res = await requestWithSupertest.get('/api/todos');
    expect(res.status).toEqual(200);
  });
});
