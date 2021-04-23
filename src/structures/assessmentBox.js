import React from 'react';
import ReactDOM from 'react-dom';
import './assessmentBox.css';


class AssessmentBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div class="assessmentWrapper">
        <div class="assessmentContent">
          <div class="assessmentTitle">
            <p>{this.props.title}</p>
          </div>
          <div class="assessmentText">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AssessmentBox;
