import React, { Component } from 'react';

import NormalText from '../structures/normalText';
import BlueBox from '../structures/blueBox';
import ResultImg from '../ResultWordmark.svg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #EAEAEA' }} className="App hidden-md hidden-lg">
          <div class="pageTitle hidden-lg hidden-md" style={{ textAlign: 'center', paddingBottom: '10px' }}>
            <img src={ResultImg} style={{ height: '24px', marginBottom: '5px' }} alt="RESULT" />
          </div>
          <div class="massTitle" style={{ paddingTop: '0px' }}>
            <p style={{ borderBottom: 'none' }}>Recognize and Evaluate Signs to Uncover Labor Trafficking</p>
          </div>
        </div>

        <div style={{ borderBottom: '1px solid #EAEAEA' }} className="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '10px' }}>
            <img class="HomeHead" src={ResultImg} height="30px" alt="RESULT" />
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
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', paddingTop: '20px' }}>
          <div class="massTitle">
            <p>Our goal</p>
          </div>
          <NormalText
            html={
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontWeight: 'bold' }}>
                  To bring insight and understanding about the signs <br class="hidden-xs hiden-sm" /> and signals of
                  labor trafficking to your fingertips.
                </h2>
              </div>
            }
          />
          <br />
          <BlueBox
            blueBox={'massBlueBox immigrationUl'}
            html={
              <div>
                <h2>Who We Are</h2>
                <h2 style={{ fontWeight: 'normal' }}>
                  A coalition of individuals focused on shining a light to bring labor trafficking out of the shadows.
                </h2>
                <br class="hidden-md hidden-lg" />
                <ul>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>BU Spark!</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>BU Law Immigrants’ Rights and Human Trafficking Program</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Fair Labor Division, Massachusetts Office of the Attorney General
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Human Trafficking Division, Massachusetts Office of the Attorney General
                    </h2>
                  </li>
                </ul>
                <hr />
                <h2>Why this App?</h2>
                <br class="hidden-md hidden-lg" />
                <ul>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>Because labor trafficking is everywhere.</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>Because labor trafficking is difficult to see.</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>Because you always have your phone in your hand.</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>Because we want to help you answer questions.</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Because we want victims of labor trafficking to know help is out there.
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>Because we all have a role in unmasking labor trafficking.</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Because the RESULT can aid in eradicating labor trafficking in Massachusetts.
                    </h2>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}
