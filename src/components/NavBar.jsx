import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <div class="row menu">
        <div class="col-md-2 col-lg-2 lis new-lis">
          <a href="/prepare" class={pathname == '/prepare' ? 'active' : ''}>
            Prepare
          </a>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <a href="/assess" class={pathname == '/assess' ? 'active' : ''}>
            Assess
          </a>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <a href="/resourcesHome" class={pathname == '/resourcesHome' ? 'active' : ''}>
            Resources
          </a>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <a href="/statute" class={pathname == '/statute' ? 'active' : ''}>
            Massachusetts Law
          </a>
        </div>
        <div class="col-md-2 col-lg-2 lis new-lis">
          <a href="/about" class={pathname == '/about' ? 'active' : ''}>
            About Us
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
