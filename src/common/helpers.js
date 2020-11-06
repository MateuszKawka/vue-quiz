export const shuffleAnswers = answers => {
    return answers.sort(() => Math.random() - 0.5);
}