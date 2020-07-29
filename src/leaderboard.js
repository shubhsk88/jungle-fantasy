import 'regenerator-runtime';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8aJTsXq3TQlamxhhGpX1/scores';

const storeScore = async (user, score) => {
  const body = JSON.stringify({ user, score });
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };
  try {
    const response = await fetch(url, data);
    const result = await response.json();
    return result;
  } catch (err) {
    return { err };
  }
};

const getScores = async () => {
  try {
    const response = await fetch(url);
    const scores = await response.json();
    return scores.result;
  } catch (err) {
    return { err };
  }
};

export { getScores, storeScore };
