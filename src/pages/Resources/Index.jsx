import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Resources extends Component {
  render() {
    return (
      <div>
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Resources</p>
          {/*<p class="Head">Learn how to refer to law enforcement or find victim services</p>*/}
          <p class="Head">Choose resource</p>
        </div>

        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer">
            <p class="pageTitle">Resources</p>
            <p class="Head">Choose resource</p>
          </div>
        </div>

        <div class="App">
          <div class="buttonContainer hidden-sm hidden-xs">
            <Link to="/report">
              <button class="button4">
                <div class="b4_container">
                  <h1>Refer</h1>
                  <div class="home_yellow"></div>
                  <p style={{ fontWeight: 'bold' }}>Learn how to refer to law enforcement</p>
                  <p>Click here to make a referral to law enforcement.</p>
                </div>
              </button>
            </Link>
            <Link to="/victim-services">
              <button class="button4">
                <div class="b4_container">
                  <h1>Victim Services</h1>
                  <div class="home_yellow"></div>
                  <p style={{ fontWeight: 'bold' }}>Find Victim Services</p>
                  <p>Click here to make a referral to victim services.</p>
                </div>
              </button>
            </Link>
          </div>
          <div class="buttonContainer hidden-md hidden-lg">
            <Link to="/report">
              <button class="button4">
                <h1>Refer</h1>
                <p>Learn how to refer to law enforcement</p>
              </button>
            </Link>
            <Link to="/resources?id=0">
              <button class="button4">
                <h1>Victim Services</h1>
                <p>Find Victim Services</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
