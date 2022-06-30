import React, { useState } from 'react'
import "./_Main.scss"
import Question from '../Game/Question'
import Results from '../Game/Results';
function Main({questionSet}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const handleAnswerClick = (answerOption, selection) => {
        console.log("Current score: " + currentScore)
        console.log("Answer is: " + answerOption + ". Correct answer is: " + questionSet[currentQuestion].correct_answer);
        if (answerOption === questionSet[currentQuestion].correct_answer) {
            console.log("answer correct");
            setCurrentScore(currentScore+1);
        }
        setCurrentQuestion(currentQuestion+1);
    }
  return (
    <main className="app-main">
        <div className="game-window">
            <div className="game-header">
                {currentQuestion < questionSet.length ? <div className="game-position">
                    Question: {(currentQuestion+1) + " / " + questionSet.length}
                </div>
                : ""}
                
            </div>
            {console.log(questionSet)}
            { (questionSet[currentQuestion]) ?
            <Question questionData={questionSet[currentQuestion]} handleAnswer={handleAnswerClick} />
            : <Results score={currentScore} length={questionSet.length} />
            }
        </div>
    </main>
  )
}

export default Main