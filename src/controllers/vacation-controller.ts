import { injectable, inject } from 'inversify';
import { Request, Response, NextFunction } from 'express';

import { logger } from '../utils/logger';
import { TYPES } from '../containers/types';
import { IGetVacationUsecase } from '../usecases/interfaces/Iget-vacation-usecase';

@injectable()
export class VacationController {
  @inject(TYPES.IGetVacationUsecase) private getVacationUsecase: IGetVacationUsecase;

  private loggerPrefix = 'VacationController';
  constructor() {}

  public async getVacation(_: Request, res: Response, next: NextFunction): Promise<void> {
    logger.debug(`${this.loggerPrefix}::getVacation`);
    try {
      const response = await this.getVacationUsecase.execute();
      res.json(response);
    } catch (error) {
      logger.error(`${this.loggerPrefix}::getVacation, error occurred error: ${error}`);
      next(error);
    }
  }
}
