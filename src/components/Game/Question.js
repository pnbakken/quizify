import React from 'react'
import "./_Question.scss"
import Answer from './Answer'

export default function Question({questionData, handleAnswer}) {
  return (
    <div className="question-container">
        <div className="question-text">
            {questionData.text}
        </div>
        <div className="answers-container">
            {questionData.answers.map( (a, index) => <Answer text={a} key={index} id={index} correct={questionData.correctAnswerIndex} handleAnswer={handleAnswer}/>)}
        </div>
        answer is : {questionData.correctAnswerIndex}
    </div>
  )
}
