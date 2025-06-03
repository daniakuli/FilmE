import mongoose from 'mongoose';
import { connectToMongo } from '../dbUtils.js';

jest.mock('mongoose', () => ({
  connect: jest.fn()
}));

describe('connectToMongo', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('logs success message when connection succeeds', async () => {
    mongoose.connect.mockResolvedValue();
    connectToMongo();
    await new Promise(setImmediate);
    expect(mongoose.connect).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('mongodb connection open!');
  });

  test('logs error message when connection fails', async () => {
    mongoose.connect.mockRejectedValue(new Error('fail'));
    connectToMongo();
    await new Promise(setImmediate);
    expect(mongoose.connect).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('error connecting to mongodb');
  });
});
