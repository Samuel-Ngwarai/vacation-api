import { GetVacationUsecase } from '../../get-vacation-usecase';

describe(__filename, () => {
  const simpleUsecase = new GetVacationUsecase();
  describe('execute', () => {
    it('should get vacation on request', async () => {
      const res = await simpleUsecase.execute();

      expect(res).toEqual({
        name: 'Santorini',
        image: 'https://some-image-link',
        country: 'Greece',
        description: 'Island in the Aegean Sea with beatiful white houses built on a slope overlooking the water',
        budget: '$3000',
        thingsToDo: 'surf, eat food',
        timeToVisit: 'May - June',
      });
    });
  });
});
