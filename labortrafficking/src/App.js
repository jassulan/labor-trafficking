import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import update from 'react-addons-update';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     page: 1,
     result: '',
     answersCount: {
       No: 0,
       Yes: 0,
       Maybe: 0
     },
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this._onAssessClick = this._onAssessClick.bind(this);
    this._onStartClick = this._onStartClick.bind(this);
    this._onPrepareClick = this._onPrepareClick.bind(this);
    this.QuizFunc = this.QuizFunc.bind(this);
    this._onCompleteClick = this._onCompleteClick.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    return array;
  };

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Maybe' });
    }
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  renderHome() {
    return (
      <p className="App-intro">
          Description goes here....................................
          <br></br>
          <br></br>
          Home page....................................
          <br></br>
          <br></br>
          Some informative graphics here............
      </p>
    );
  }

  prepareFunc() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
  }

  _onAssessClick() {
    this.setState({
      page: 2,
    });
  }

  _onPrepareClick() {
    this.setState({
      page: 3,
    });
  }
  _onStartClick() {
    this.setState({
      page: 4,
    });
  }

  QuizFunc() {
    this.setState({
      page: 5,
    });
  }

  _onCompleteClick() {
    this.setState({
      page: 6,
    });
  }

  renderPrepare() {
    return (
      <div class = "prep">
      <p>Prepare for Assessment</p>
      <p>Preliminary Interview Information</p>
      <button class="collapsible" onClick = {this.prepareFunc}>Open Section 1</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button class="collapsible" onClick = {this.prepareFunc}>Open Section 2</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <button class="collapsible" onClick = {this.prepareFunc}>Open Section 3</button>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <br></br><br></br><br></br>
      <button class="button" onClick = {this._onStartClick}>Start</button>
      </div>
    );
  }

  renderAssessmentSteps() {
    return (
      <div class = "prep">
      <p>Assessment Steps</p>
      <button class="btn category" onClick = {this.QuizFunc}>Serious Harm</button>
      <br></br><br></br>
      <button class="btn category" onClick = {this.QuizFunc}>Physical Restraint</button>
      <br></br><br></br>
      <button class="btn category" onClick = {this.QuizFunc}>Legal Abuse</button>
      <br></br><br></br>
      <button class="btn category" onClick = {this.QuizFunc}>Extortion</button>
      <br></br><br></br>
      <button class="btn category" onClick = {this.QuizFunc}>Financial Harm</button>
      <br></br><br></br>
      <button class="btn category" onClick = {this.QuizFunc}>Identity Documents</button>
      <br></br><br></br><br></br>
      <button class="button"  onClick = {this._onCompleteClick}>Complete</button>
      </div>
    );
  }

  renderAssessment() {
    return (
    <div className="Assess">
      <p className="asse">
          <strong>Assessment</strong>
      </p>
      <button type="button" class="button" onClick={this._onPrepareClick}>Prepare</button>
      <br></br>
      <br></br>
      <br></br>
      <button type="button" onClick={this._onStartClick} class="button">Start</button>
    </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Labor Trafficking Identification Tool</h1>
        </header>

        <label for="show-menu" class="show-menu">Show Menu</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu" class="menu">
        <li class="lis"><a href="#Home" onClick= {this._onCompleteClick}>Home</a></li>
        <li class="lis"><a href="#Assess" onClick= {this._onAssessClick}><strong>Assess</strong></a></li>
        <li class="lis"><a href="#Investigate"><strong>Investigate</strong></a></li>
        <li class="lis"><a href="#VictimServices"><strong>Victim Services</strong></a></li>
        </ul>

        

        {this.state.page == 1 ? this.renderHome() : this.state.page == 2 ? this.renderAssessment() : 
          this.state.page == 3 ? this.renderPrepare() : this.state.page == 4 ? this.renderAssessmentSteps() :
          this.state.page == 5 ? (this.state.result ? this.renderResult() : this.renderQuiz()) : this.renderHome()}
      </div>
    );
  }
}

export default App;
