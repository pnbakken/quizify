import React, { useState } from 'react'
import "./_Question.scss"
import Answer from './Answer'

export default function Question({questionData, handleAnswer}) {
  let answersList = questionData.incorrect_answers ? questionData.incorrect_answers.concat(questionData.correct_answer) : [];

  function createRandom(arr) {
    let myArr = [...arr];
    let randomizedArr = [];
    
    while (myArr.length > 0) {
      let randomIndex = Math.floor(Math.random() * myArr.length);
      randomizedArr.push(myArr[randomIndex]);
      myArr.splice(randomIndex, 1);
    }

    return randomizedArr;
  }
  return (
    <div className="question-container">
        <div className="question-text">
            {questionData.question}
        </div>
        <div className="answers-container">
            {createRandom(answersList).map( (a, index) => <Answer text={a} key={index} id={index} correct={questionData.correct_answer} handleAnswer={handleAnswer}/>)}
        </div>
        answer is : {questionData.correct_answer}
    </div>
  )
}
