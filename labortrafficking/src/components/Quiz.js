import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
// import AnswerOption from '../components/AnswerOption';

function Quiz(props) {

  return (
      <div key={props.questionId} style = {{'background-color': '#c3def4'}}>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">

          <li class= "answers" className="answerOption">
            <input
              type="radio"
              className="radioCustomButton"
              name={"radioGroup" + props.questionId}
              checked={"Yes" === props.answer}
              id={props.questionId}
              value={"Yes_" + props.questionId}
              onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.questionId}>
              Yes
            </label>
          </li>

          <li class= "answers" className="answerOption">
            <input
              type="radio"
              className="radioCustomButton"
              name={"radioGroup" + props.questionId}
              checked={"No" === props.answer}
              id={props.questionId}
              value={"No_" + props.questionId}
              onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.questionId}>
              No
            </label>
          </li>

          <li class= "answers" className="answerOption">
            <input
              type="radio"
              className="radioCustomButton"
              name={"radioGroup" + props.questionId}
              checked={"Maybe" === props.answer}
              id={props.questionId}
              value={"Maybe_" + props.questionId}
              onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.questionId}>
              Maybe
            </label>
          </li>

        </ul>
      </div>
  );
}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;
