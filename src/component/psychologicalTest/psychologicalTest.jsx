import React, { Component } from 'react';

import ReactDOM from 'react-dom';
// import Quiz from '../components/psychologicalTestPage/conponents/Quiz';
// import { QuizProvider } from '../components/psychologicalTestPage/contexts/quiz';
import Quiz from "./conponents/Quiz"
import { QuizProvider } from './contexts/quiz';
import "./psychologicalTest.css"
import "bootstrap/dist/css/bootstrap.css"


const PsychologicalTestcm = () => {

    return (
        <div>
            <QuizProvider>
                < Quiz />
            </QuizProvider >

        </div>
    );
}


export default PsychologicalTestcm;