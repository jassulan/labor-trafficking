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
     answersCount: {
       No: 0,
       Yes: 0,
       Maybe: 0
     },
     result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this._onAssessClick = this._onAssessClick.bind(this);
    this._onStartClick = this._onStartClick.bind(this);
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

  _onAssessClick() {
    this.setState({
      page: 2,
    });
  }

  _onStartClick() {
    this.setState({
      page: 3,
    });
  }

  renderAssessment() {
    return (
    <div className="Assess">
      <p className="asse">
          <strong>Assessment</strong>
      </p>
      <button type="button" class="button">Prepare</button>
      <br></br>
      <br></br>
      <br></br>
      <button type="button" onClick={this._onStartClick} class="button">Start</button>
    </div>
    );
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Labor Trafficking Identification Tool</h1>
        </header>

        <div class="topnav">
        <a class="button" onClick= {this._onAssessClick}><strong>Assess</strong></a>
        &nbsp;
        <a class="button"><strong>Investigate</strong></a>
        &nbsp;
        <a class="button"><strong>Victim Services</strong></a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i></a>
        </div>
        {this.state.page == 1 ? this.renderHome() : this.state.page == 2 ? this.renderAssessment() : 
          this.state.page == 3 ? (this.state.result ? this.renderResult() : this.renderQuiz()) : this.renderHome()}
      </div>
    );
  }
}

export default App;
