import React from "react";

const QuizContainer = () => {
  return (
    <form>
      <div>
        <h4>What type of transport do you use?</h4>
        <label htmlFor="walk">Walk</label>
        <input type="radio" name="question1" for="walk" />

        <label htmlFor="walk">Train</label>
        <input type="radio" name="question1" for="train" />

        <label htmlFor="walk">Bus</label>
        <input type="radio" name="question1" for="bus" />

        <label htmlFor="walk">Car</label>
        <input type="radio" name="question1" for="car" />

        <label htmlFor="walk">Plane</label>
        <input type="radio" name="question1" for="plane" />
      </div>



      <div>        
        <h4>How much meat do you eat?</h4>
        <label htmlFor="never">Never eat meat or dairy</label>
        <input type="radio" name="question2" for="never" />

        <label htmlFor="nevermeat">Never eat meat</label>
        <input type="radio" name="question2" for="nevermeat" />

        <label htmlFor="sometimes">I sometimes eat meat</label>
        <input type="radio" name="question2" for="sometimes" />

        <label htmlFor="mostly">I mostly eat meals during meals</label>
        <input type="radio" name="question2" for="mostly" />

        <label htmlFor="every">I eat meat during every meal</label>
        <input type="radio" name="question2" for="every" />
        </div>



      <div>   
             <h4>What do you recycle?</h4>
        <label htmlFor="glass">Glass</label>
        <input type="checkbox" name="question3" for="glass" />

        <label htmlFor="paper">Paper/Cardboard</label>
        <input type="checkbox" name="question3" for="paper" />

        <label htmlFor="food">Food</label>
        <input type="checkbox" name="question3" for="food" />

        <label htmlFor="tins">Tins/Cans</label>
        <input type="checkbox" name="question3" for="tins" />

        <label htmlFor="plastics">Plastics</label>
        <input type="checkbox" name="question3" for="plastics" />
        </div>



      <div>   
             <h4>How much on average do you spend on electronics per month?</h4>
        <label htmlFor="zero">£0-£25</label>
        <input type="radio" name="question4" for="zero" />

        <label htmlFor="twenty">£26-£100</label>
        <input type="radio" name="question4" for="twenty" />

        <label htmlFor="hundred">£101-£250</label>
        <input type="radio" name="question4" for="hundred" />

        <label htmlFor="loads">£251-£500</label>
        <input type="radio" name="question4" for="loads" />

        <label htmlFor="most">£501+</label>
        <input type="radio" name="question4" for="most" />
        </div>


      <div>   
             <h4>What do you have in your home?</h4>
        <label htmlFor="double">Double glazing</label>
        <input type="checkbox" name="question5" for="double" />

        <label htmlFor="lightbulbs">Energy saving light bulbs</label>
        <input type="checkbox" name="question5" for="lightbulbs" />

        <label htmlFor="loft">Loft insulation</label>
        <input type="checkbox" name="question5" for="loft" />

        <label htmlFor="solar">Solar panels</label>
        <input type="checkbox" name="question5" for="solar" />

        <label htmlFor="boiler">Condensing boiler</label>
        <input type="checkbox" name="question5" for="boiler" />
        </div>


      <div>
        <input type="submit"></input>
      </div>
    </form>
  );
};

export default QuizContainer;
