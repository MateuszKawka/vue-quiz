export const shuffleAnswers = (answers) => {
  return answers.sort(() => Math.random() - 0.5);
};

export const formatHighscoreDate = (timestamp) => {
  const ISODate = new Date(timestamp).toISOString();
  return ISODate.replace("Z", "")
    .replace("T", " ")
    .slice(0, 16);
};
