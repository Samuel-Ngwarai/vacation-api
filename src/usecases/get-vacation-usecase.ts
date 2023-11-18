
import { injectable } from 'inversify';
import { IGetVacationUsecase } from './interfaces/Iget-vacation-usecase';
import { Vacation } from '../types/Vacation';
import { getRandomInt } from '../utils/random';

import vacations from './vacation-data.json';

// const vacations: Vacation[] = [
//   {
//     name: 'Santorini',
//     image: 'https://some-image-link',
//     country: 'Greece',
//     description: 'Island in the Aegean Sea with beatiful white houses built on a slope overlooking the water',
//     budget: '$3000',
//     thingsToDo: 'surf, eat food',
//     timeToVisit: 'May - June',
//   }
// ];

@injectable()
export class GetVacationUsecase implements IGetVacationUsecase {
  public async execute(): Promise<Vacation> {
    const pos = getRandomInt(vacations.length);
    return vacations[pos];
  }
}