import React from 'react';

import Quiz from './Quiz';

export default function Questions(props) {
  const { questions } = props;
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div class="AssessmentQuestions">
        {function () {
          let JSXarray = [];
          for (let i = 0; i < questions.length; i++) {
            JSXarray.push(
              <Quiz
                answer={this.state.Answer[i + 1]}
                questionId={this.state.questionId + i}
                question={this.state.question[i].question}
                questionTotal={questions.length}
                onAnswerSelected={this.handleAnswerSelected}
              />,
            );
          }
          return JSXarray;
        }.bind(this)()}
      </div>
      <div
        class="row AssessmentButtons"
        style={{
          backgroundColor: '#fff',
          padding: '20px 20px',
          textAlign: 'right',
          paddingTop: '0px',
        }}
      >
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', padding: '0' }}>
          <button class="button1 assessButton" style={{ float: 'unset' }} onClick={this._onAssessClick}>
            Back
          </button>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', padding: '0' }}>
          <button class="button3 assessButton" style={{ float: 'unset' }} onClick={this.evaluateNow}>
            Evaluate
          </button>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', padding: '0' }}>
          <button class="button1 assessButton" style={{ float: 'unset' }} onClick={this.nextAssessmentCategory}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
