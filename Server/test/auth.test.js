import request from 'supertest';
import express from 'express';

// Mock firebase auth functions
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn()
}));

// Mock auth object exported from firebaseUtils
jest.mock('../firebaseUtils.js', () => ({
  auth: {}
}));

import { signInWithEmailAndPassword } from 'firebase/auth';
import { authRoute } from '../routes/authentication.js';

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use('/auth', authRoute);
  return app;
};

describe('POST /auth/login', () => {
  it('returns 200 on successful login', async () => {
    signInWithEmailAndPassword.mockResolvedValue({ user: {} });

    const app = createApp();
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'pass' });

    expect(res.statusCode).toBe(200);
  });

  it('returns 500 on authentication failure', async () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error('fail'));

    const app = createApp();
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'wrong' });

    expect(res.statusCode).toBe(500);
  });
});
