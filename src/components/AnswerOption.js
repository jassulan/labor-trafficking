import React from 'react';

function AnswerOption(props) {

  return (
    <li class= "answers" className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerContent === props.answer}
        id={props.answerType}
        value={props.answerType}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );

}

AnswerOption.propTypes = {
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
