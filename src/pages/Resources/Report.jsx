import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NormalText from '../../structures/normalText';
import BlueBox from '../../structures/blueBox';

export default class Report extends Component {
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #EAEAEA' }} class="App hidden-md hidden-lg">
          <p class="pageTitle">Resources</p>
          <p class="Head" style={{ paddingBottom: '15px' }}>
            Refer
          </p>
        </div>
        <div style={{ borderBottom: '1px solid #EAEAEA' }} class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Resources</p>
            <p class="Head">Refer</p>
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', paddingTop: '20px' }}>
          <NormalText
            html={
              <div>
                <h1 style={{ fontWeight: 'bold' }}>If this is an emergency, call 911.</h1>
                <h2 style={{ fontWeight: 'bold' }}>
                  For non-emergencies, please contact either of the following offices to report suspected labor
                  trafficking:
                </h2>
              </div>
            }
          />
          <BlueBox
            html={
              <div>
                <h1 style={{ fontWeight: 'bold' }}>National Human Trafficking Resource Center</h1>
                <h2>
                  <span style={{ fontWeight: 'normal' }}>
                    Call the Hotline at: <span style={{ textDecoration: 'underline' }}>1-888-373-7888</span>
                  </span>
                </h2>
                <h2>
                  <span style={{ fontWeight: 'normal' }}>
                    Text "BEFREE" to: <span style={{ textDecoration: 'underline' }}>233733</span>
                  </span>
                </h2>
                <h2>
                  <span
                    style={{
                      fontWeight: 'normal',
                      textDecoration: 'underline',
                      color: '#11416D',
                    }}
                  >
                    <a target="_blank" href="https://humantraffickinghotline.org/chat">
                      Click here to access live chat
                    </a>
                  </span>
                </h2>
                <h2>
                  <span
                    style={{
                      fontWeight: 'normal',
                      textDecoration: 'underline',
                      color: '#11416D',
                    }}
                  >
                    <a
                      target="_blank"
                      href="mailto:help@humantraffickinghotline.org%20?subject=MA%20Labor%20Trafficking%20Case"
                    >
                      Click here to email the hotline
                    </a>
                  </span>
                </h2>
              </div>
            }
          />
          <BlueBox
            html={
              <div>
                <h1 style={{ fontWeight: 'bold' }}>Massachusetts Attorney General’s Office</h1>
                <h2 style={{ fontWeight: 'normal' }}>
                  Call the Fair Labor line at <span style={{ textDecoration: 'underline' }}>(617) 727-3465</span>
                </h2>
                <h2 style={{ fontWeight: 'normal' }}>Available Monday–Friday 10:00AM–4:00PM</h2>
              </div>
            }
          />
          <div
            style={{
              textAlign: 'right',
              padding: '10px 30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Link to="/victim-services">
              <button class="button3" style={{ float: 'unset' }}>
                Victim Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
