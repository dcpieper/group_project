import { useState, useEffect } from "react";
import QuizForm from "../components /QuizForm";
import { getCountries } from "../services/CountryServices";
import { getFacts } from "../services/FactServices";

const QuizContainer = () => {
  const [quizResult, setQuizResult] = useState(0);
  const [countries, setCountries] = useState([]);
  const [facts, setFacts] = useState([])
  const [result, setResult] = useState({});


  useEffect(() => {
    getCountries().
    then(res => setCountries(res))
    getFacts().
    then(res => setFacts(res))
    findFact()
  }, [])



  const countryScore = countries.filter((country) => {
  return country.score === quizResult;
    
  })
  console.log(result);
  console.log(countryScore)
  console.log(facts)
  console.log(facts[0])

  const findFact = function(){
    if (quizResult > 0 && quizResult <= 5){
      setResult(facts[0]);
    } else if (quizResult >= 6 && quizResult <= 10) {
      setResult(facts[1]);
    }else if (quizResult >= 11 && quizResult <= 15) {
      setResult(facts[2]);
    }else if (quizResult >= 16 && quizResult <= 20) {
      setResult(facts[3]);
    } else if (quizResult >= 21 && quizResult <= 25) {
      setResult(facts[4]);
    }
  }


  const getQuizResult = (result) => {
    setQuizResult(result);
  };

  console.log(quizResult);

  return (
    <div>
      <QuizForm getQuizResult={getQuizResult} />
      {quizResult ? (
        <h2>
          Your result is {quizResult}. 
          {result.header}
          Your emissions are the equivalent of the average person in {countryScore[0].name}. <a href="/countries" >See where {countryScore[0].name} ranks compared to other countries. </a>
        </h2>
      ) : null}
    </div>
  );
};

export default QuizContainer;
