import { useState, useEffect } from "react";
import QuizForm from "../components /QuizForm";
import { getCountries } from "../services/CountryServices";

const QuizContainer = () => {
  const [quizResult, setQuizResult] = useState(0);
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    getCountries().
    then(res => setCountries(res))
  }, [])

  const countryScore = countries.filter((country) => {
  return country.score === quizResult;
    
  })
  console.log(countryScore)


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
      <div>
        Your emissions are the equivalent of the average person in {countryScore[0].name}. <a href="/countries" >See where {countryScore[0].name} ranks compared to other countries. </a>
      </div>
    </div>
  );
};

export default QuizContainer;
