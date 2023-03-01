import React from 'react';

const Answer = ({
  answerText,
  onSelectAnswer,
  currentAnswer,
}) => {

  // && 回傳第一個是falsy的值，若全部皆為truthy，則回傳最後一個值
  const isCorrectAnswer = currentAnswer === answerText;
  // console.log("currentAnswer", currentAnswer)
  // console.log("answerText",answerText)
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";

  return (
    <div
      className={`answer ${correctAnswerClass}`}
      id='voteAnswer' onClick={() => {
        onSelectAnswer(answerText);
      }}
      >
      <div className="anawer-text" >{answerText}</div>
    </div >
  );
}


export default Answer;