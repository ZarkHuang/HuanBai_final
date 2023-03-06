// whole wrapper for test
import React, { useContext } from 'react';
// 把quiz的內容引進來
import { QuizContext } from '../contexts/quiz';
import Question from "./Question";
import TestAnswerRowSave from "../conponents/TestAnswerRowSave"
import animalSeaParrot from "../img/pexels-hans-schoevers-5777987.jpg"
import animalPanda from "../img/1pexels-laura-the-explaura-3608263.jpg"
import animalLion from "../img/pexels-gareth-davies-1598377.jpg"
import animalWhale from "../img/pexels-pixabay-302271.jpg"

const Quiz = () => {
    // 把quiz裡的狀態引進來。State會更新，dispatch觸發action
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState)

    const appUrl = 'http://localhost:3000/psych';

    // return有兩種結果，顯示結果true or false。
    return (
        <div className='psychologicalTest'>
            {/* 如果要秀答案的話，答案內容 */}
            {/* 第一個結果，熊貓 */}
            {quizState.showResults && 8 >= quizState.correctAnswersCount && (
                <div>
                    <div className="container" id='panda'>
                        <div className="row rowContainer">
                            <div id="testImgPlace" className="col-md-12 col-lg-6 col-12 p-5 ">
                                <img src={animalPanda} alt="" className='answerImg' />
                            </div>
                            <div id="testAnswerWords" className="col-md-12 col-lg-6 col-12  mt-lg-5 p-5 col-ps-0">
                                <div id="title">
                                    <p id="animalName">大貓熊</p>
                                    <p id="animalHashtag">#我行我素環保人</p>
                                    <br />
                                    <br />
                                    <p id="animalDescription">
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        你非常關心地球上的環境和生態，熱愛大自然，喜歡身處在綠色、生態友好的環境中。你通常會積極參加各種環保活動，提倡環保理念，並且在自己的生活中也會儘量減少對環境的影響，例如垃圾分類、節約能源等。
                                        <br />
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        總之，熊貓屬性的你是熱愛生活、注重環保的可愛人士，你的環保意識和行動對社會和地球的可持續發展具有重要的推動作用。
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>


                    < TestAnswerRowSave />

                </div>
            )}
            {/* 第二個結果，海鸚鵡 */}
            {quizState.showResults && 10 >= quizState.correctAnswersCount && quizState.correctAnswersCount >= 9 && (
                <div>
                    <div className="container">
                        <div className="row rowContainer">
                            <div id="testImgPlace" className="col-md-12 col-lg-6 col-12 p-5 ">
                                <img src={animalSeaParrot} alt="" className='answerImg' />
                            </div>
                            <div id="testAnswerWords" className="col-md-12 col-lg-6 col-12  mt-lg-5 p-5 col-ps-0">
                                <div id="title">
                                    <p id="animalName">海鸚鵡</p>
                                    <p id="animalHashtag">#環保可愛吉祥物</p>
                                    <br />
                                    <p id="animalDescription">
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        你熱愛大自然，重視保護環境，並且會積極參與各種環保活動，例如參加海灘清潔活動、分類垃圾、節約能源等，以減少對環境的負擔。會關注動物的生存狀況，支持保護野生動物的活動，同時也會積極參與氣候行動，提倡綠色低碳生活方式。
                                        <br />
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        具有熱愛生活、重視環境保護的特點，你的環保意識和行動對社會和地球的可持續發展具有重要的推動作用。
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    < TestAnswerRowSave />
                </div>
            )}
            {/* 第三個結果，鯨魚 */}
            {quizState.showResults && 12 >= quizState.correctAnswersCount && quizState.correctAnswersCount >= 11 && (
                <div>
                    <div className="container">
                        <div className="row rowContainer">
                            <div id="testImgPlace" className="col-md-12 col-lg-6 col-12 p-5 ">
                                <img src={animalWhale} alt="" className='answerImg' />
                            </div>
                            <div id="testAnswerWords" className="col-md-12 col-lg-6 col-12  mt-lg-5 p-5 col-ps-0">
                                <div id="title">
                                    <p id="animalName">鯨魚</p>
                                    <p id="animalHashtag">#勇於追求環保未來</p>
                                    <br />
                                    <p id="animalDescription">

                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        你非常關注環境保護和永續發展等議題。對於環境的敏感度很高，非常重視人類對環境所造成的影響，並積極參與各種環保活動和倡議。
                                        <br />
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        此外，你也很關注社會正義和公平等問題，並會儘力為社會和環境做出貢獻。
                                        <br />
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        你是一個環保的人，牠的個性將會包括關注環境、關注社會和公義，以及積極參與行動等特點。
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    < TestAnswerRowSave />
                </div>
            )}
            {/* 第四個結果，獅子 */}
            {quizState.showResults && quizState.correctAnswersCount >= 13 && (
                <div>

                    <div className="container">
                        <div className="row rowContainer">
                            <div id="testImgPlace" className="col-md-12 col-lg-6 col-12 p-5 ">
                                <img src={animalLion} alt="" className='answerImg' />
                            </div>
                            <div id="testAnswerWords" className="col-md-12 col-lg-6 col-12  mt-lg-5 p-5 col-ps-0">
                                <div id="title">
                                    <p id="animalName">獅子</p>
                                    <p id="animalHashtag">#霸氣宣示環保理念</p>
                                    <br />
                                    <p id="animalDescription">
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        你的個性具有自信、勇敢和堅定的特質，並能將這些特質應用於環保事業中。你可能會成為領袖和倡導者，積極參與各種環保運動和活動，並且鼓勵其他人加入到環保行動中來。
                                        <br />
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        同時，你擁有的忠誠和社交特質，也讓你關注和照顧自己所屬的社區和環境，促進社區的可持續發展。
                                        <br />
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        你擁有自信、勇敢和堅定的個性，並將這些特質用於推動環保事業，為保護地球和人類未來的生存而努力。
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    < TestAnswerRowSave />
                </div>
            )}
            {/* 還沒到結果 */}
            {!quizState.showResults && (
                <div>
                    <div className='score' id='scoreId'>
                        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question />
                    <div className='test-next-button' id='test-next-button'
                        onClick={() => dispatch({ type: "NEXT-QUESTION" })}
                    >Next question</div>
                </div>
            )}

        </div>
    );
}


export default Quiz;