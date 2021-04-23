import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function ReturnText(answer) {
	switch(answer){
		/* No traits in a category */
		case 'unclear-one':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Unclear if this is labor trafficking; consider evaluating more categories. </p>
			);
		/* No traits in all categories */
		case 'unclear-all':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Unclear if this is labor trafficking, but other crimes may be implicated.  If this is an emergency, call <span style={{fontWeight: "bold"}}>911</span>. If this is a non-emergency, consider calling the Fair Labor Division Hotline at <span style={{fontWeight: "bold"}}>617-727-3465</span> or filing a wage complaint at&nbsp;
					<span style={{fontWeight:"normal", textDecoration: "underline", color : "#11416D"}}><a href="https://www.mass.gov/ago/fld ">www.mass.gov/ago/fld</a></span>, or send an email to:&nbsp;
					<span style={{fontWeight:"normal", textDecoration: "underline", color : "#11416D"}}><a href="mailto:labortrafficking@mass.gov">labortrafficking@mass.gov.</a></span>
				</p>
			);
		/* Yes unweighted in a category */
		case 'yes-reg':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Potential signs of labor trafficking but need more information; consider evaluating more categories. </p>
			);
		/* Yes weighted in a category */
		case 'yes-one':
			return (
				<p class="alertText" style={{'text-align':'center'}}>There appear to be likely indicators of labor trafficking. Continue evaluation or consider referring to law enforcement at this time.</p>
			);
		/* Yes weighted in 2+ categories */
		case 'yes-all':
			return (
				<p class="alertText" style={{'text-align':'center'}}>There appear to be likely indicators of labor trafficking. Continue evaluation or consider referring to law enforcement at this time.</p>
			);
		case 'fharm':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Potential signs of labor trafficking but need more information; consider evaluating more categories or filing a wage complaint with the AGO FLD at:&nbsp;
					<span style={{fontWeight:"normal", textDecoration: "underline", color : "#11416D"}}><a href="https://www.mass.gov/ago/fld">www.mass.gov/ago/fld.</a></span>
				</p>
			)
		default:
			return (
				<p class="alertText" style={{'text-align':'center'}}>Unclear if this is labor trafficking; consider evaluating more categories. </p>
			);
	}
}

/*
	unclear-one: cat no / idk
					 Unclear if this is LT; consider evaluating more categories.
	unclear-all: all cat no / idk
					Unclear if this is LT, but other crimes may be implicated.  If this is an emergency, call 911.  If this is a non-emergency, consider calling the Fair Labor Division Hotline at 617-727-3465 or filing a wage complaint at www.mass.gov/ago/fld, or send an email to: labortrafficking@mass.gov.
	yes-reg: cat reg yes
					potential signs of labor trafficking but need more information; consider evaluating more categories.
	yes-one: cat yes
					There appear to be likely indicators of potential labor trafficking; continue evaluation if you have more information, if not consider referring to law enforcement at this time.
	yes-all: TWO cat yes
					There appear to be likely indicators of potential labor trafficking; continue evaluation if you have more information, if not consider referring to law enforcement at this time.

	switch(answer){
		case 'unclear-one':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Unclear if this is labor trafficking; consider evaluating more categories. </p>
			);
		case 'unclear-all':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Unclear if this is labor trafficking, but other crimes may be implicated.  If this is an emergency, call <span style={{fontWeight: bold}}>911</span>.  If this is a non-emergency, consider calling the Fair Labor Division Hotline at <span style={{fontWeight: bold}}>617-727-3465</span> or filing a wage complaint at
					<span style={{fontWeight:"normal", textDecoration: "underline", color : "#11416D"}}><a href="https://www.mass.gov/ago/fld ">www.mass.gov/ago/fld</a></span>, or send an email to:
					<span style={{fontWeight:"normal", textDecoration: "underline", color : "#11416D"}}><a href="mailto:labortrafficking@mass.gov">labortrafficking@mass.gov.</a></span>
				</p>
			);
		case 'yes-reg':
			return (
				<p class="alertText" style={{'text-align':'center'}}>Potential signs of labor trafficking but need more information; consider evaluating more categories. </p>
			);
		case 'yes-one':
			return (
				<p class="alertText" style={{'text-align':'center'}}>There appear to be likely indicators of potential labor trafficking; continue evaluation if you have more information, if not consider referring to law enforcement at this time.</p>
			);
		case 'yes-all':
			return (
				<p class="alertText" style={{'text-align':'center'}}>There appear to be likely indicators of potential labor trafficking; continue evaluation if you have more information, if not consider referring to law enforcement at this time.</p>
			);
		default:
			return(
				<p class="alertText" style={{'text-align':'center'}}>Unclear if this is labor trafficking; consider evaluating other categories. </p>
			);
}



if (answer == 'Yes') {
	return (
		<p class="alertText" style={{'text-align':'center'}}>Based on the information provided, this case may meet the definition of labor trafficking under Massachusetts law.
						Please contact the local police department, local District Attorney’s Office, or state Attorney General’s Office immediately.</p>
	);
}
else if(answer == 'Maybe'){
	return (
		<p class="alertText" style={{'text-align':'center'}}>Based on the information provided, this case may meet the definition of labor trafficking under Massachusetts law.
						Consider going back to the "Assess" menu and assessing more categories, or, contact the local police department, local District Attorney’s office, or
						state Attorney General’s Office.</p>
	);
}
else {
	return (
		<p class="alertText" style={{'text-align':'center'}}>This case cannot be considered to be at the level of human trafficking under Massachusetts
					law. Please contact a local, state, or federal prosecutor immediately and
					continue the criminal investigation.</p>
	);
}
*/


function Result(props) {

  return (
      <div>
        {ReturnText(props.quizResult)}
      </div>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
