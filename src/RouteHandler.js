import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class RouteHandler extends Component{

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired,
    init: PropTypes.func,
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.init)
      this.props.init();
  }

  render(){
    return this.props.render();
  }
}
