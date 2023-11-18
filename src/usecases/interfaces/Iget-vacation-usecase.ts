import { Vacation } from '../../types/Vacation';

export interface IGetVacationUsecase {
  execute(): Promise<Vacation>;
}
