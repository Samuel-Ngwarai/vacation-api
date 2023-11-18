import { NextFunction, Request, Response } from 'express';
import { VacationController } from '../../vacation-controller';

describe(__filename, () => {
  const vacationController = new VacationController();
  vacationController['getVacationUsecase'] = {
    execute: jest.fn().mockResolvedValueOnce({
      budget: '',
      country: '',
      description: '',
      image: '',
    })
  };


  describe('getVacation', () => {
    it('should get vacation on request', async () => {
      const res = {
        json: jest.fn(),
      } as any as Response;
      jest.spyOn(res, 'json');
      await vacationController.getVacation({} as Request, res, (() => {}) as NextFunction);

      expect(res.json).toHaveBeenCalledWith({
        budget: '',
        country: '',
        description: '',
        image: '',
      });
    });


    it('should properly handle errors', async () => {
      vacationController['getVacationUsecase'].execute = jest.fn().mockImplementationOnce(() => {
        throw new Error ('Something bad happened');
      });

      const res = {
        json: jest.fn(),
      } as any as Response;
      const next = jest.fn();
      jest.spyOn(res, 'json');
      await vacationController.getVacation({} as Request, res, next);

      expect(next).toHaveBeenCalledWith(new Error('Something bad happened'));
    });
  });
});
