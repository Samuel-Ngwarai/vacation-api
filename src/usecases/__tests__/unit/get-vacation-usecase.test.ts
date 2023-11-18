import { GetVacationUsecase } from '../../get-vacation-usecase';

describe(__filename, () => {
  const simpleUsecase = new GetVacationUsecase();
  describe('execute', () => {
    it('should get vacation on request', async () => {
      const res = await simpleUsecase.execute();

      expect(res).toEqual({
        budget: '',
        country: '',
        description: '',
        image: '',
      });
    });
  });
});
