import 'regenerator-runtime';

const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OIM149NVoJbrVcsCvIac/scores';

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
  const response = await fetch(url, data);
  const result = await response.json();
  return result;
};

const getScores = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  return scores.result;
};

export { getScores, storeScore };
