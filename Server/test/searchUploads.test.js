import request from 'supertest';
import express from 'express';

jest.mock('../dbSchemas/upload.js', () => ({
  find: jest.fn()
}));

import Upload from '../dbSchemas/upload.js';
import { searchUploads } from '../routes/searchUploads.js';

const createApp = () => {
  const app = express();
  app.use('/searchuploads', searchUploads);
  return app;
};

describe('GET /searchuploads', () => {
  it('returns results on success', async () => {
    Upload.find.mockResolvedValue([{ Title: 'song' }]);
    const app = createApp();
    const res = await request(app).get('/searchuploads').query({ title: 'song' });
    expect(Upload.find).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ Title: 'song' }]);
  });

  it('returns 500 on error', async () => {
    Upload.find.mockRejectedValue(new Error('fail'));
    const app = createApp();
    const res = await request(app).get('/searchuploads').query({ title: 'bad' });
    expect(res.statusCode).toBe(500);
  });
});
