import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

  return (
      <div>
      <br></br><br></br><br></br>
        Labor Trafficking Case : <strong>{props.quizResult}</strong>!
      </div>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
