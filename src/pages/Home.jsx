import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResultImg from '../ResultWordmark.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <br className="hidden-lg hidden-md" />
        <div className="Head hidden-lg hidden-md" style={{ textAlign: 'left' }}>
          <img src={ResultImg} style={{ height: '24px', marginBottom: '5px', marginTop: '5px' }} alt="RESULT" />
        </div>
        <div className="ButBar hidden-lg hidden-md">
          <p className="HomeHead1">
            A tool to help investigators identify potential <br className="hidden-xs" /> labor trafficking under
            Massachusetts law.
            <br></br>
          </p>
        </div>

        <div className="homeContainer hidden-sm hidden-xs">
          <img className="HomeHead" src={ResultImg} height="30px" alt="RESULT" />
          <p
            className="HomeHead1"
            style={{
              fontWeight: 'bold',
              color: '#808080',
              marginBottom: '20px',
            }}
          >
            Recognize and Evaluate Signs to Uncover Labor Trafficking{' '}
          </p>
          <p className="HomeHead1">
            A tool to help investigators identify potential <br /> labor trafficking under Massachusetts law.
          </p>
        </div>

        <div class="main__container">
          <div className="card__container">
            <div className="card">
              <img src="/icons/cards.svg" className="card__icon" />
              <div>
                <Link to="/prepare" className="card__button">
                  <p className="card__title">PREPARE</p>
                </Link>
              </div>
            </div>

            <div className="card">
              <img src="/icons/palm.svg" className="card__icon" />
              <div>
                <Link to="/assess" className="card__button">
                  <p className="card__title">ASSESS</p>
                </Link>
              </div>
            </div>

            <div className="card">
              <img src="/icons/check.svg" className="card__icon" />
              <div>
                <Link to="/resources" className="card__button">
                  <p className="card__title">RESOURCES</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bottom__container">
            <div className="container_s">
              <div className="banner">
                <span>
                  <img src="/icons/phone.svg" />
                  Call <a href="tel:1-888-373-7888">1-888-373-7888</a>
                </span>
                <span>
                  <img src="/icons/mobile.svg" />
                  <a href="sms:233733&body=BEFREE">Text "BEFREE" to: 233733</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="buttonContainer hidden-md hidden-lg">
          <a href="/prepare">
            <button className="button4">
              <h1>Prepare</h1>
              <p>Find tips for interviewing victims</p>
            </button>
          </a>
          <a href="/assess">
            <button className="button4">
              <h1>Assess</h1>
              <p>Determine if your case is labor trafficking</p>
            </button>
          </a>
          <a href="/resourcesHome">
            <button className="button4">
              <h1>Resources</h1>
              <p>Learn how to refer to law enforcement or find victim services</p>
            </button>
          </a>

          <a href="/statute">
            <button className="button4">
              <h1>Massachusetts Law</h1>
              <p>View the Massachusetts labor trafficking statute</p>
            </button>
          </a>
        </div> */}
      </div>
    );
  }
}
