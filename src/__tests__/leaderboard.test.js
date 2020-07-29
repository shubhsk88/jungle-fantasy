import { getScores, storeScore } from '../leaderboard';

global.fetch = jest.fn(() => ({
  json: () => Promise.resolve({
    result: [
      { user: 'Player1', score: '120' },
      { user: 'Player2', score: '240' },
      { user: 'Player3', score: '1500' },
    ],
  }),
}));

describe('The score should be written and read from  the api', () => {
  it('Should post the score', () => {
    storeScore('sam', 1).then((data) => expect(data.result).toEqual([
      { score: '120', user: 'Player1' },
      { score: '240', user: 'Player2' },
      { score: '1500', user: 'Player3' },
    ]));
  });
  it('Should fetch the data from api', () => {
    getScores().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });
});
