import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function ReturnText(answer) {
	if (answer == 'Yes' || answer == 'Maybe') {
		return (
			<p style={{'text-align':'center'}}>This case <strong>may rise</strong> to the level of human trafficking under Massachusetts
	          law. Please contact a local, state, or federal prosecutor immediately and
	          continue the criminal investigation.</p>
		);
	}
	else {
		return (
			<p style={{'text-align':'center'}}>This case <strong>cannot</strong> be considered to be at the level of human trafficking under Massachusetts
	          law. Please contact a local, state, or federal prosecutor immediately and
	          continue the criminal investigation.</p>
		);
	}
}



function Result(props) {

  return (
      <div>
      <br></br><br></br><br></br>
        {ReturnText(props.quizResult)}
      </div>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
