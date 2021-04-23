import React from 'react';
import ReactDOM from 'react-dom';
import './blueBox.css';


class BlueBox extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      blueBoxContainer : props.blueBoxContainer==null?"":props.blueBoxContainer,
      blueBox : props.blueBox==null?"":props.blueBox,
    }

  }

  render(){
    return (
      <div class={"blueBoxContainer " + this.state.blueBoxContainer}>
        <div class={"blueBox " + this.state.blueBox}>
          {this.props.html}
        </div>
      </div>
    );
  }
}

export default BlueBox;
