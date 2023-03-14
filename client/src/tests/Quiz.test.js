import QuizForm from '../components /QuizForm';
import { render, fireEvent } from "@testing-library/react";

describe("Quiz Form", () => {
    let container;
    beforeEach(() => {
      container = render(<QuizForm />);
    });
  
    it("totalScore should increment by 5", () => {
      const planeButton = container.getByTestId("plane-btn");
      const totalScore = container.getByTestId("running-total");
      fireEvent.click(button4);
      expect(runningTotal.textContent).toEqual("15");
    });   
  });
  