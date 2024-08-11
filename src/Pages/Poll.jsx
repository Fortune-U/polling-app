import { useState } from "react";

 export default function Poll ({ question, onAnswerSelected }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
         // Store the question and answer in session storage
    sessionStorage.setItem(`question-${question.id}`, JSON.stringify({ 
        question: question.question, 
        answer 
      }));
  
      // Trigger the onAnswerSelected callback to move to the next question
      onAnswerSelected();
      };

    return(
        <div>
            
            <div>
            <h3 className="font-semibold text-center text-3xl">{question.question}</h3>
      {question.answers.map((answer) => (
        <div key={answer} className="flex flex-col gap-4">
          <button
            key={answer}
            className={`py-2 px-4 w-[100%] mt-4 rounded-md text-white ${
              selectedAnswer === answer ? 'bg-blue-600' : 'bg-blue-400'
            } hover:bg-blue-500`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </button>
        </div>
      ))}
            </div>
            
        </div>
    )
 }

   