import question1 from "./question1";
import question2 from "./question2";
import question3 from "./question3";
import question4 from "./question4";
import question5 from "./question5";

function createElements() {
  const answers = {
    1: question1(),
    2: question2(),
    3: question3(),
    4: question4(),
    5: question5()
  };

  for (let i = 1; i <= 5; i++) {
    document.querySelector(`[data-id=answer${i}]`).innerHTML = answers[i];
  }
}

createElements();
