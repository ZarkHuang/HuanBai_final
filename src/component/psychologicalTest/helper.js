export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
      question.answer1,
      question.answer2,
      question.answer3,
      question.answer4,
    ];
    return unshuffledAnswers
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)    //sort，回傳整齊的東西，a-z，1-9
      .map((a) => a.value);
  };
  