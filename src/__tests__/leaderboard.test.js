import { getScores, storeScore } from '../leaderboard';

describe('The score should be written and read from  the api', () => {
  it('Should post the score', () => {
    storeScore('sam', 20).then((data) =>
      expect(data).toBe('Leaderboard score created correctly.')
    );
  });
  it('Should fetch the data from api', () => {
    getScores().then((data) => {
      expect(Array.isArray(data).toBe(true));
      expect(data.result).toContainEqual('user');
    });
  });
});
