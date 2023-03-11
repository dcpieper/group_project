import { useState, useEffect } from "react";
import QuizForm from "../components /QuizForm";

const QuizContainer = () => {
  const [quizResult, setQuizResult] = useState(0);

  const getQuizResult = (result) => {
    setQuizResult(result);
  };

  console.log(quizResult);

  return (
    <div>
      <QuizForm getQuizResult={getQuizResult} />
      {quizResult ? (
        <h2>
          Your result is {quizResult}. This is similair to COUNTRY INFO
          COMPONENT.
        </h2>
      ) : null}
    </div>
  );
};

export default QuizContainer;
