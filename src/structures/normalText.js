import React from 'react';
import ReactDOM from 'react-dom';
import './normalText.css';


class NormalText extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div class="normalTextContainer">
        <div class="normalText">
          {this.props.html}
        </div>
      </div>
    );
  }
}

export default NormalText;
