const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {
  it('GET / should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Welcome to Simple Express App!');
  });

  it('GET /api should return JSON', async () => {
    const res = await request(app).get('/api');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from API!' });
  });
});