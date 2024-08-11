import { useState } from 'react';
import Poll from './Poll';
import Result from './Result';
import {pollData} from './pollData'


const PollApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPollCompleted, setIsPollCompleted] = useState(false);
  const [storedAnswers, setStoredAnswers] = useState([]);
 

  // Get the current question to display
  const currentQuestion = pollData[currentPage - 1];

  const nextPage = () => {
    if (currentPage < pollData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
        setIsPollCompleted(true);
        retrieveStoredAnswers();
      
    }
  };
  const retrieveStoredAnswers = () => {
    const answers = [];
    for (let i = 1; i <= pollData.length; i++) {
      const item = sessionStorage.getItem(`question-${i}`);
      if (item) {
        answers.push(JSON.parse(item));
      }
    }
    setStoredAnswers(answers);
  };

  return (
    <div className="flex  flex-col items-center h-dvh py-3 justify-between ">
        <div>
            {currentPage} / {pollData.length}
        </div>
        {!isPollCompleted ? (
        <Poll question={currentQuestion} onAnswerSelected={nextPage} />
      ) : (
        <Result storedAnswers={storedAnswers} />
      )}
      
      <div className="mt-4 flex justify-between">
        {/* {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
        {currentPage < pollData.length && <button onClick={nextPage}>Next</button>} */}
      </div>
    </div>
  );
};

export default PollApp;
