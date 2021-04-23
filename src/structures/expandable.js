import React from 'react';
import ReactDOM from 'react-dom';
import './expandable.css';


class Expandable extends React.Component{
  constructor(props){
    super(props)
    let height = '200px';
    if(this.props.height != null)
      height = this.props.height;
    this.state = {
      expand : true,
      height : 10000,
      mount : false,
      expandHeight : height,
    }
    this.onExpandClick = this.onExpandClick.bind(this);
  }

  onExpandClick(){
    this.setState({
      expand : !this.state.expand,
    });
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height : height, mount : true});
    this.onExpandClick();
  }

  render(){
    return (
      <div  style={this.state.mount? ({"opacity" : "1"}) : ({"opacity" : "0"})}>
        <div
            class={"expandable " + (this.state.expand?"expandableExpanded":"")}
            style={this.state.expand? {"maxHeight": this.state.height}:{"maxHeight" : this.state.expandHeight}}
            ref={ (divElement) => this.divElement = divElement}
            onClick={this.onExpandClick}
        >
          {this.props.content}
        </div>
        <div class="expandContainer" onClick={this.onExpandClick}>
          {
            (function(){
              if(!this.state.expand)
                return <div><p>Click here to read more</p><p class="downArrow expandDown">&#8964;</p></div>;
              else
                return <div class="expandContainerInvert"><p class="downArrow">&#8963;</p><p class="expandDown">Click here to hide</p></div>;
            }).bind(this)()
          }
        </div>
      </div>
    );
  }
}

export default Expandable;
