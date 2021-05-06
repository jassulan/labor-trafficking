import React, { Component } from 'react';

import ResultImg from '../ResultWordmark.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <br class="hidden-lg hidden-md" />
        <div class="Head hidden-lg hidden-md" style={{ textAlign: 'left' }}>
          <img src={ResultImg} style={{ height: '24px', marginBottom: '5px', marginTop: '5px' }} alt="RESULT" />
        </div>
        {/* <p className="Head hidden-lg hidden-md">Recognize and Evaluate Signs <br />to Uncover Labor Trafficking</p>*/}
        <div class="ButBar hidden-lg hidden-md">
          {/*<p class="HomeHead1" style={{"fontWeight" : "bold", "color" : "#808080", "marginBottom": "20px"}}> </p>*/}
          <p className="HomeHead1">
            A tool to help investigators identify potential <br class="hidden-xs" /> labor trafficking under
            Massachusetts law.
            <br></br>
          </p>
        </div>

        <div class="homeContainer hidden-sm hidden-xs">
          {/*<p class="MassTitle">Massachusetts Attorney General’s Office</p>*/}
          <img class="HomeHead" src={ResultImg} height="30px" alt="RESULT" />
          {/*<p class="HomeHead" style={{"lineHeight": "36px"}}>RESULT</p>*/}
          <p
            class="HomeHead1"
            style={{
              fontWeight: 'bold',
              color: '#808080',
              marginBottom: '20px',
            }}
          >
            Recognize and Evaluate Signs to Uncover Labor Trafficking{' '}
          </p>
          <p class="HomeHead1">
            A tool to help investigators identify potential <br /> labor trafficking under Massachusetts law.
          </p>
        </div>

        <div class="buttonContainer hidden-sm hidden-xs">
          <a href="/prepare">
            <button class="button4">
              <div class="b4_container">
                <h1>Prepare</h1>
                <div class="home_yellow"></div>
                <p style={{ fontWeight: 'bold' }}>Find tips for interviewing victims</p>
                {/*<p>What to think about before you interview the victim.</p>*/}
              </div>
            </button>
          </a>
          <a href="/assess">
            <button class="button4">
              <div class="b4_container">
                <h1>Assess</h1>
                <div class="home_yellow"></div>
                <p style={{ fontWeight: 'bold' }}>Determine if your case is labor trafficking</p>
                {/*<p>These questions are designed for investigators to help determine if circumstances rise to the level of labor trafficking under Massachusetts law.</p>*/}
              </div>
            </button>
          </a>
          <br class="HomeBR" />
          <button class="button4">
            <div class="b4_container">
              <a href="/resourcesHome">
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '100%',
                    height: '100%',
                  }}
                ></div>
              </a>
              <h1>Resources</h1>
              <div class="home_yellow"></div>
              <p style={{ fontWeight: 'bold' }}>Learn how to refer to law enforcement or find victim services</p>
              {/*<p style={{"fontWeight" : "bold", textDecoration : "underline", position: "relative"}}>
                <a href="/report"><div style={{position : "absolute", width: "100%", height: "100%", zIndex: "100", left : "0", top : "0"}}></div></a>
                Refer
              </p>

              <p style={{"fontWeight" : "bold", textDecoration : "underline", position : "relative"}}>
                <a href="/resources?id=0"><div style={{position : "absolute", width: "100%", height: "100%", zIndex: "100", left : "0", top : "0"}}></div></a>
                Victim Services
              </p>*/}
            </div>
          </button>
          <a href="/statute">
            <button class="button4">
              <div class="b4_container">
                <h1>Massachusetts Law</h1>
                <div class="home_yellow"></div>
                <p style={{ fontWeight: 'bold' }}>View the Massachusetts labor trafficking statute</p>
              </div>
            </button>
          </a>
        </div>
        <div class="buttonContainer hidden-md hidden-lg">
          <a href="/prepare">
            <button class="button4">
              <h1>Prepare</h1>
              <p>Find tips for interviewing victims</p>
            </button>
          </a>
          <a href="/assess">
            <button class="button4">
              <h1>Assess</h1>
              <p>Determine if your case is labor trafficking</p>
            </button>
          </a>
          <a href="/resourcesHome">
            <button class="button4">
              <h1>Resources</h1>
              <p>Learn how to refer to law enforcement or find victim services</p>
            </button>
          </a>
          {/*<button class="button4">
            <a href="/resourcesHome"><div style={{position: "absolute", left : "0", top : "0", width: "100%", height: "100%"}}></div></a>
            <h1>Resources</h1>
            <p class="hidden-md hidden-lg">
              <span style={{textDecoration : "underline", position : "relative"}}>
                <a href="/report"><div style={{position : "absolute", width: "100%", height: "100%", zIndex: "100", left : "0", top : "0"}}></div></a>
                Learn how to refer to law enforcement
              </span>&nbsp;or&nbsp;<br/>
              <span style={{textDecoration : "underline", position : "relative"}}>
                <a href="/resources?id=0"><div style={{position : "absolute", width: "100%", height: "100%", zIndex: "100", left : "0", top : "0"}}></div></a>
                find Victim Services
              </span>
            </p>
            <p class="hidden-xs hidden-md hidden-lg">
              <span style={{textDecoration : "underline", position : "relative"}}>
                <a href="/report"><div style={{position : "absolute", width: "100%", height: "100%", zIndex: "100", left : "0", top : "0"}}></div></a>
                Learn how to refer to law enforcement
              </span>&nbsp;or&nbsp;
              <span style={{textDecoration : "underline", position : "relative"}}>
                <a href="/resources?id=0"><div style={{position : "absolute", width: "100%", height: "100%", zIndex: "100", left : "0", top : "0"}}></div></a>
                find Victim Services
              </span>
            </p>
            <p style={{"fontWeight" : "bold"}}>View the Massachusetts labor trafficking statute</p>
          </button>*/}
          <a href="/statute">
            <button class="button4">
              <h1>Massachusetts Law</h1>
              <p>View the Massachusetts labor trafficking statute</p>
            </button>
          </a>
        </div>
      </div>
    );
  }
}
