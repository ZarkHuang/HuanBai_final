import React, { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import Answer from "./Answer";

const Question = () => {
    // quizState，把'../contexts/quiz'的東西叫出來用。
    const [quizState, dispatch] = useContext(QuizContext);
    // quizState.questions，會是4個object。
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    return (
        <div>
            <div className='question'>
                {currentQuestion.question}
            </div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer
                        answerText={answer}
                        key={index}
                        currentAnswer={quizState.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        onSelectAnswer={(answerText) =>
                            dispatch({ type: "SELECT_ANSWER", payload: answerText })
                            // payload，因為是新增待辦事項，所以物件裡總得有放新的待辦事項的地方，通常送給 Reducer 執行事件時的參數，都會放在 payload 屬性中，
                        } />
                ))}
            </div>
        </div>
    );
}


export default Question;