import { Express, Request, Response } from 'express';
import { VacationController } from '../controllers/vacation-controller';
import { appContainer } from '../containers/inversify.config';

import { IRoute } from './routes-i';

export class Routes implements IRoute {
  constructor() {}

  public register(app: Express, _?: VacationController): void {
    const vacationController = appContainer().vacationController;

    app.get('/', async (_: Request, res: Response) => {
      res.status(404).send('Unknown route called.');
    });

    app.get('/readyz', async (_: Request, res: Response) => {
      res.json({ ready: true });
    });

    app.get('/healthz', async (_: Request, res: Response) => {
      res.json({ healthy: true });
    });

    /**
     * @swagger
     *
     * /vacation:
     *   get:
     *     description: Returns random Vacation Destination with image and description 
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successfull Response
     */
    app.get('/vacation', vacationController.getVacation.bind(vacationController));

    app.get('*',function (_: Request, res: Response) {
      res.status(404).send('Uknown route called.');
    });
  }
}
