import { useState, useEffect } from "react";
import QuizForm from "../components /QuizForm";
import { getCountries } from "../services/CountryServices";
import { getFacts } from "../services/FactServices";

const QuizContainer = () => {
  const [quizResult, setQuizResult] = useState(0);
  const [countries, setCountries] = useState([]);
  const [facts, setFacts] = useState([])
  const [header, setHeader] = useState(null);
  const [fact, setFact] = useState(null);
  

  useEffect(() => {
    getCountries().
    then(res => setCountries(res))
    getFacts().
    then(res => setFacts(res))
  }, [])



  const countryScore = countries.filter((country) => {
  return country.score === quizResult;
    
  })


  const findFact = function(){
    if (quizResult > 0 && quizResult <= 5){
      setHeader(facts[0].header);
      setFact(facts[0].fact)
    } else if (quizResult >= 6 && quizResult <= 10) {
      setHeader(facts[1].header);
      setFact(facts[1].fact)
    }else if (quizResult >= 11 && quizResult <= 15) {
      setHeader(facts[2].header);
      setFact(facts[2].fact)
    }else if (quizResult >= 16 && quizResult <= 20) {
      setHeader(facts[3].header);
      setFact(facts[3].fact)
    } else if (quizResult >= 21 && quizResult <= 25) {
      setHeader(facts[4].header);
      setFact(facts[4].fact)
    }
  }


  const getQuizResult = (result) => {
    setQuizResult(result);
  };
  
  console.log(quizResult);

  return (
    <div className="quiz-container">
    <div className="quiz-form">
      <QuizForm getQuizResult={getQuizResult} findFact={findFact}/>
      {quizResult ? (
        <h2>
          Your result is {quizResult}. 
          {header}
          {fact}
          Your emissions are the equivalent of the average person in {countryScore[0].name}. <a href="/countries" >See where {countryScore[0].name} ranks compared to other countries.</a>
        </h2>
      ) : null}
      </div>
    </div>
  );
};

export default QuizContainer;
