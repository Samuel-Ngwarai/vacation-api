import { Express } from 'express';
import request from 'supertest';

import App from '../../../main';

describe(__filename, () => {
  let app: App;
  let expressServer: Express;

  beforeAll(async () => {
    app = new App(false);
    await app.init();

    expressServer = app.expressServer;
  });

  describe('GET', () => {

    describe('/vacation', () => {
      it('/should return vacation destination', async () => {

        const res = await request(expressServer).get('/vacation');

        expect(res.body).toStrictEqual({
          name: expect.any(String),
          image: expect.any(String),
          country: expect.any(String),
          description: expect.any(String),
          budget: expect.any(String),
          thingsToDo: expect.any(String),
          timeToVisit: expect.any(String),
        });
        expect(res.statusCode).toEqual(200);
      });
    });
  });
});
