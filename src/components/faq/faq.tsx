import { Questions } from "../../types/types";
import { generateId } from "../../utils/util";
import Question from "../question/question";

type FAQProps = {
  questions: Questions;
}

function Faq({questions} : FAQProps) : JSX.Element {
  return (
    <section className="faq">
      <div className="small-container">
        <h2>Вопрос/Ответ</h2>
        {questions.map((ask) => <Question question={ask.question} answer={ask.answer} key={generateId()}/>)}
      </div>
    </section>
  )
}

export default Faq;
