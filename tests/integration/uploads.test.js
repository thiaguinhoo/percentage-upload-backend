const supertest = require('supertest');
const { StatusCodes } = require('http-status-codes');

const application = require('../../src/application');

const request = supertest(application);

describe('ROUTES /uploads', () => {
  it('should return status code [(401) - UNAUTHORIZED]', async () => {
    const response = await request.post('/uploads');
    expect(response.status).toEqual(StatusCodes.UNAUTHORIZED);
  });
});
