
import { injectable } from 'inversify';
import { IGetVacationUsecase } from './interfaces/Iget-vacation-usecase';
import { Vacation } from '../types/Vacation';
import { getRandomInt } from '../utils/random';

const vacations: Vacation[] = [
  {
    image: '',
    country: '',
    description: '',
    budget: ''
  }
];

@injectable()
export class GetVacationUsecase implements IGetVacationUsecase {
  public async execute(): Promise<Vacation> {
    const pos = getRandomInt(vacations.length);
    return vacations[pos];
  }
}