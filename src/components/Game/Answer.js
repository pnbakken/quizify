import React, { useState } from 'react'
import "./_Answer.scss"

function Answer({text, id, correct, handleAnswer}) {

  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleClick = () => {
    if (text === correct) {
      setIsCorrect(true);
    } else setIsIncorrect(true);
    setTimeout(() => {
      handleAnswer(text)
      setIsCorrect(false);
      setIsIncorrect(false);
    }, 600)
    
  }
  return (
    <button className={`answer-btn ${ isCorrect? "correct" : ""} ${isIncorrect ? "incorrect" : ""}`} data-index={id} value={text}
     onClick={() => {
        handleClick();
    }}
    dangerouslySetInnerHTML={{__html:text}}/>
  )
}

export default Answer