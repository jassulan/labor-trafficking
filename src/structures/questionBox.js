import React from 'react';
import ReactDOM from 'react-dom';
import './questionBox.css';


class QuestionBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      qClass : props.qClass==null?"":props.qClass,
      expand : true,
      height : 10000,
      mount : false,
    }
  }

  onQuestionClick(){
    this.setState({
      expand : !this.state.expand,
    });
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height : height, mount : true});
    this.onQuestionClick();
  }

  render(){
    return (
      <div class={"questionBoxWrapper " + this.state.qClass}>
        <button
          class="questionBoxContainer"
          style={this.state.mount? ({"opacity" : "1"}) : ({"opacity" : "0"})}
          onClick={()=>{this.onQuestionClick()}}
        >
          <div class="questionBoxBorder">
            <div class="questionBoxTitle">
              <div class="questionBoxTitleBefore">
                {this.props.title}
              </div>
              <div class="questionBoxTitleAfter">
                <h1 style={this.state.expand ? ({'line-height' : '10px'}) : ({'line-height' : '16px'})}>{this.state.expand ? '-' : '+'}</h1>
              </div>
            </div>
            <div
              class="questionBoxContent"
              style={this.state.expand ? ({"max-height" : (this.state.height.toString()+'px')}) : ({"max-height" : "0px"})}
              ref={ (divElement) => this.divElement = divElement}
            >
              {this.props.html}
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default QuestionBox;
