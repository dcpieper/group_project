import React, { useState } from "react";
import { postResult } from "../services/ResultServices";

const QuizForm = ({ getQuizResult, findFact }) => {
  const [name, setName] = useState(null);
  const [country, setCountry] = useState(null);
  const [detailsFormComplete, setDetailsFormComplete] = useState(false);
  const [questionOneScore, setQuestionOneScore] = useState(0);
  const [questionTwoScore, setQuestionTwoScore] = useState(0);
  const [questionThreeScore, setQuestionThreeScore] = useState(5);
  const [questionFourScore, setQuestionFourScore] = useState(0);
  const [questionFiveScore, setQuestionFiveScore] = useState(5);
  const [totalScore, setTotalScore] = useState(0);
  const [quizFormComplete, setQuizFormComplete] = useState(false);
  const [glass, setGlass] = useState(false);
  const [paper, setPaper] = useState(false);
  const [food, setFood] = useState(false);
  const [tins, setTins] = useState(false);
  const [plastic, setPlastic] = useState(false);
  const [double, setDouble] = useState(false);
  const [lightbulbs, setLightbulbs] = useState(false);
  const [loft, setLoft] = useState(false);
  const [solar, setSolar] = useState(false);
  const [boiler, setBoiler] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    score: 0,
    country: "",
  });

  const handleUserNameChange = (event) => {
    setName(event.target.value);
  };
  const handleUserCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleUserDetailsSubmit = (event) => {
    event.preventDefault();
    setDetailsFormComplete(true);
  };

  const handleQuestionOne = (event) => {
    setQuestionOneScore(parseInt(event.target.value));
  };
  const handleQuestionTwo = (event) => {
    setQuestionTwoScore(parseInt(event.target.value));
  };
  const handleQuestionFour = (event) => {
    setQuestionFourScore(parseInt(event.target.value));
  };

  const setResultData = () => {
    formData.name = name;
    formData.country = country;
    formData.score = totalScore;
    setFormData(formData);
    postResult(formData);
    setFormData( {
      name: "",
      score: 0,
      country: ""
});
  }

  const handleQuizFormSubmit = (event) => {
    event.preventDefault();
    setTotalScore(
      questionOneScore +
        questionTwoScore +
        questionThreeScore +
        questionFourScore +
        questionFiveScore
    )
    setQuizFormComplete(true); 
  };
  findFact();
  getQuizResult(totalScore);

  const addData = () => {
    setResultData();
  }

  
  const handleCheckBoxChange = (item, setItem, question, setQuestion) => {
    if (item === false) {
      setItem(true);
      setQuestion(question - 1);
    } else {
      setItem(false);
      setQuestion(question + 1);
    }
  };

  console.log(totalScore);
  console.log(questionThreeScore);
  console.log(questionFiveScore);

  return (
    <div>
      {detailsFormComplete ? (
        <h2>
          Hello {name} from {country}.{" "}
          {quizFormComplete ? <p></p> : <p>Please begin the quiz below.</p>}
        </h2>
      ) : (
        <form onSubmit={handleUserDetailsSubmit}>
          <h4>Please enter your details below to begin the quiz:</h4>
          <input
            onChange={handleUserNameChange}
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            onChange={handleUserCountryChange}
            type="text"
            placeholder="country"
            name="country"
          />
          <input type="submit" />
        </form>
      )}

      {!quizFormComplete && detailsFormComplete ? (
        <form onSubmit={handleQuizFormSubmit}>
          <div>
            <h4>What type of transport do you use?</h4>
            <label htmlFor="walk">Walk</label>
            <input
              type="radio"
              name="question1"
              htmlFor="walk"
              value={1}
              onChange={handleQuestionOne}
              required
            />

            <label htmlFor="walk">Train</label>
            <input
              type="radio"
              name="question1"
              htmlFor="train"
              value={2}
              onChange={handleQuestionOne}
            />

            <label htmlFor="walk">Bus</label>
            <input
              type="radio"
              name="question1"
              htmlFor="bus"
              value={3}
              onChange={handleQuestionOne}
            />

            <label htmlFor="walk">Car</label>
            <input
              type="radio"
              name="question1"
              htmlFor="car"
              value={4}
              onChange={handleQuestionOne}
            />

            <label htmlFor="walk">Plane</label>
            <input
              type="radio"
              name="question1"
              htmlFor="plane"
              value={5}
              onChange={handleQuestionOne}
            />
          </div>

          <div>
            <h4>How much meat do you eat?</h4>
            <label htmlFor="never">Never eat meat or dairy</label>
            <input
              type="radio"
              name="question2"
              htmlFor="never"
              value={1}
              onChange={handleQuestionTwo}
              required
            />

            <label htmlFor="nevermeat">Never eat meat</label>
            <input
              type="radio"
              name="question2"
              htmlFor="nevermeat"
              value={2}
              onChange={handleQuestionTwo}
            />

            <label htmlFor="sometimes">I sometimes eat meat</label>
            <input
              type="radio"
              name="question2"
              htmlFor="sometimes"
              value={3}
              onChange={handleQuestionTwo}
            />

            <label htmlFor="mostly">I mostly eat meals during meals</label>
            <input
              type="radio"
              name="question2"
              htmlFor="mostly"
              value={4}
              onChange={handleQuestionTwo}
            />

            <label htmlFor="every">I eat meat during every meal</label>
            <input
              type="radio"
              name="question2"
              htmlFor="every"
              value={5}
              onChange={handleQuestionTwo}
            />
          </div>

          <div>
            <h4>What do you recycle?</h4>
            <label htmlFor="glass">Glass</label>
            <input
              type="checkbox"
              name="question3"
              htmlFor="glass"
              checked={glass}
              onChange={() => {
                handleCheckBoxChange(
                  glass,
                  setGlass,
                  questionThreeScore,
                  setQuestionThreeScore
                );
              }}
            />

            <label htmlFor="paper">Paper/Cardboard</label>
            <input
              type="checkbox"
              name="question3"
              htmlFor="paper"
              checked={paper}
              onChange={() => {
                handleCheckBoxChange(
                  paper,
                  setPaper,
                  questionThreeScore,
                  setQuestionThreeScore
                );
              }}
            />

            <label htmlFor="food">Food</label>
            <input
              type="checkbox"
              name="question3"
              htmlFor="food"
              checked={food}
              onChange={() => {
                handleCheckBoxChange(
                  food,
                  setFood,
                  questionThreeScore,
                  setQuestionThreeScore
                );
              }}
            />

            <label htmlFor="tins">Tins/Cans</label>
            <input
              type="checkbox"
              name="question3"
              htmlFor="tins"
              checked={tins}
              onChange={() => {
                handleCheckBoxChange(
                  tins,
                  setTins,
                  questionThreeScore,
                  setQuestionThreeScore
                );
              }}
            />

            <label htmlFor="plastics">Plastics</label>
            <input
              type="checkbox"
              name="question3"
              htmlFor="plastics"
              checked={plastic}
              onChange={() => {
                handleCheckBoxChange(
                  plastic,
                  setPlastic,
                  questionThreeScore,
                  setQuestionThreeScore
                );
              }}
            />
          </div>

          <div>
            <h4>How much on average do you spend on electronics per month?</h4>
            <label htmlFor="zero">??0-??25</label>
            <input
              type="radio"
              name="question4"
              htmlFor="zero"
              value={1}
              onChange={handleQuestionFour}
              required
            />

            <label htmlFor="twenty">??26-??100</label>
            <input
              type="radio"
              name="question4"
              htmlFor="twenty"
              value={2}
              onChange={handleQuestionFour}
            />

            <label htmlFor="hundred">??101-??250</label>
            <input
              type="radio"
              name="question4"
              htmlFor="hundred"
              value={3}
              onChange={handleQuestionFour}
            />

            <label htmlFor="loads">??251-??500</label>
            <input
              type="radio"
              name="question4"
              htmlFor="loads"
              value={4}
              onChange={handleQuestionFour}
            />

            <label htmlFor="most">??501+</label>
            <input
              type="radio"
              name="question4"
              htmlFor="most"
              value={5}
              onChange={handleQuestionFour}
            />
          </div>

          <div>
            <h4>What do you have in your home?</h4>
            <label htmlFor="double">Double glazing</label>
            <input
              type="checkbox"
              name="question5"
              htmlFor="double"
              checked={double}
              onChange={() => {
                handleCheckBoxChange(
                  double,
                  setDouble,
                  questionFiveScore,
                  setQuestionFiveScore
                );
              }}
            />

            <label htmlFor="lightbulbs">Energy saving light bulbs</label>
            <input
              type="checkbox"
              name="question5"
              htmlFor="lightbulbs"
              checked={lightbulbs}
              onChange={() => {
                handleCheckBoxChange(
                  lightbulbs,
                  setLightbulbs,
                  questionFiveScore,
                  setQuestionFiveScore
                );
              }}
            />

            <label htmlFor="loft">Loft insulation</label>
            <input
              type="checkbox"
              name="question5"
              htmlFor="loft"
              checked={loft}
              onChange={() => {
                handleCheckBoxChange(
                  loft,
                  setLoft,
                  questionFiveScore,
                  setQuestionFiveScore
                );
              }}
            />

            <label htmlFor="solar">Solar panels</label>
            <input
              type="checkbox"
              name="question5"
              htmlFor="solar"
              checked={solar}
              onChange={() => {
                handleCheckBoxChange(
                  solar,
                  setSolar,
                  questionFiveScore,
                  setQuestionFiveScore
                );
              }}
            />

            <label htmlFor="boiler">Condensing boiler</label>
            <input
              type="checkbox"
              name="question5"
              htmlFor="boiler"
              checked={boiler}
              onChange={() => {
                handleCheckBoxChange(
                  boiler,
                  setBoiler,
                  questionFiveScore,
                  setQuestionFiveScore
                );
              }}
            />
          </div>

          <div>
            <input type="submit"></input>
          </div>
        </form>
      ) : null}
      {quizFormComplete ? (
        <h2>Thank you for taking the quiz. Here are your results:</h2>
      ) : null}
      {quizFormComplete ? <button onClick={addData}><a href="/leaderboard">Click here to log your results and add your score to the leaderboard</a></button>: null}
    </div>
  );
};
export default QuizForm;
