import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <div class="row menu">
        <div class="col-md-2 col-lg-2 lis new-lis">
          <Link to="/prepare" class={pathname == '/prepare' ? 'active' : ''}>
            Prepare
          </Link>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <Link to="/assess" class={pathname == '/assess' ? 'active' : ''}>
            Assess
          </Link>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <Link to="/resources" class={pathname == '/resources' ? 'active' : ''}>
            Resources
          </Link>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <Link to="/statute" class={pathname == '/statute' ? 'active' : ''}>
            Massachusetts Law
          </Link>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <Link to="/about" class={pathname == '/about' ? 'active' : ''}>
            About Us
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
