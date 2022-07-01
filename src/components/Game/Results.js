import React from 'react'
import "./_Results.scss"

function Results({score, length}) {

    const reward = () => {
        console.log("Final score is: " + score)
        const base = `You got ${score} correct. `;
        
        
            if (score === 0) {
                return `${base}You didn't get a single right answer. Not one. That's almost impressive!`;
            } else if (score < 3 && score > 0) {
                return `${base}Why did you even bother?`;
            } else if (score >= 3 && score < 6) {
                return `${base}Not bad, keep trying!`;
            } else if (score >= 6 && score <= 9) {
                return `${base}You're pretty good at this!`;
            } else if (score === length) {
                return `${base}You got everything correct! You're amazing! I worship you!`;
            } else return "You didn't get a score?";
           
        }
    
  return (
    <div className="result-screen">
        <div className="final-score">
            <p className="final-points">{ score + " / " + length}</p>
            <p>Final Score</p>
        </div>
        <div className="reward-container">
            {reward()}
        </div>
    </div>
  )
}

export default Results