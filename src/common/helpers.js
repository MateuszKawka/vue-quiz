export const shuffleAnswers = (answers) => {
  return answers.sort(() => Math.random() - 0.5);
};

export const formatHighscoreDate = (timestamp) => {
  const ISODate = new Date(timestamp * 1000).toISOString();
  return ISODate.replace("Z", "")
    .replace("T", " ")
    .slice(0, 16);
};
