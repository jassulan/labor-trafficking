import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Quiz.css';
// import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
  let answer = "";
  return (
      <div class="QuizContainer">
        <div class="QuizContent" key={props.questionId}>
          <div class="QuizCount">
            <span>Question {props.questionId}</span> / <span>{props.questionTotal}</span>
          </div>
          <h2>{props.question}</h2>
          <ul>
            <li>
              <input
                type="radio"
                class="radioCustomButton QuizInput"
                name={"radioGroup" + props.questionId}
                checked={false}
                id={"Yes_" + props.questionId}
                value={"Yes_" + props.questionId}
                onChange={props.onAnswerSelected}
              />
              <label htmlFor={"Yes_" + props.questionId}>
                Yes
              </label>
            </li>

            <li>
              <input
                type="radio"
                class="radioCustomButton QuizInput"
                name={"radioGroup" + props.questionId}
                checked={false}
                id={"No_" + props.questionId}
                value={"No_" + props.questionId}
                onChange={props.onAnswerSelected}
              />
              <label htmlFor={"No_" + props.questionId}>
                No
              </label>
            </li>

            <li>
              <input
                type="radio"
                class="radioCustomButton QuizInput"
                name={"radioGroup" + props.questionId}
                checked={false}
                id={"Maybe_" + props.questionId}
                value={"Maybe_" + props.questionId}
                onChange={props.onAnswerSelected}
              />
              <label htmlFor={"Maybe_" + props.questionId}>
                I don’t know
              </label>
            </li>

          </ul>
        </div>
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
