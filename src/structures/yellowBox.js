import React from 'react';
import ReactDOM from 'react-dom';
import './yellowBox.css';


class YellowBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div class="yellowBoxContainer">
        <div class="yellowBox">
          {this.props.html}
        </div>
      </div>
    );
  }
}

export default YellowBox;
