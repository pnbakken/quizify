import React, { useState } from 'react'
import "./_Answer.scss"

function Answer({text, id, correct, handleAnswer}) {

  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleClick = () => {
    if (id === correct) {
      setIsCorrect(true);
    } else setIsIncorrect(true);
    setTimeout(() => {
      handleAnswer(id)
      setIsCorrect(false);
      setIsIncorrect(false);
    }, 500)
    
  }
  return (
    <button className={`answer-btn ${ isCorrect? "correct" : ""} ${isIncorrect ? "incorrect" : ""}`} data-index={id} value={text}
     onClick={() => {
        handleClick();
    }}>{text} {id}</button>
  )
}

export default Answer