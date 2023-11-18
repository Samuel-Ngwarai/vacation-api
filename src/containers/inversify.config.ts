import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { IGetVacationUsecase } from '../usecases/interfaces/Iget-vacation-usecase';
import { GetVacationUsecase } from '../usecases/get-vacation-usecase';
import { VacationController } from '../controllers/vacation-controller';


let _appContainer: Container;

const initializeAppContainer = () => {

  if(_appContainer) {
    throw new Error('AppContainer already initialized');
  }
  _appContainer = new Container();

  _appContainer.bind<IGetVacationUsecase>(TYPES.IGetVacationUsecase).to(GetVacationUsecase);
  _appContainer.bind<VacationController>(TYPES.VacationController).to(VacationController).inSingletonScope();
};

const appContainer = () => {
  if (!_appContainer) {
    throw new Error('AppContainer not initialized yet. Call initialize function first.');
  }

  return {
    vacationController: _appContainer.get<VacationController>(TYPES.VacationController),
    vacationUsecase: _appContainer.get<IGetVacationUsecase>(TYPES.IGetVacationUsecase),
  };
};

export { initializeAppContainer, appContainer };
