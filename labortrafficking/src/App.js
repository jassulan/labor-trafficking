import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import update from 'react-addons-update';
import Popup from "reactjs-popup";
import jsPDF from 'jspdf';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     line: 0,
     page: 1,
     addpage: 0,
     result: '',
     doc : new jsPDF(),
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
    this._onInvestigateClick = this._onInvestigateClick.bind(this);
    this._onVictimClick = this._onVictimClick.bind(this);
    this.downloadPdf = this.downloadPdf.bind(this);
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

  writePdf(answer) {
    // if (this.state.addpage == 1) {
    //   this.state.doc.addPage();
    // }
    // else {
    //   this.state.addpage = 1;
    // }
    var a = this.state.line + 20;
    if (a > 297) {
      a = 20;
    }
    var b = a + 10;
    if (b > 297) {
      b = 20;
    }
    var c = b + 10;
    if (c > 297) {
      c = 20;
    }
    this.state.doc.text('Question No. ' + String(this.state.questionId), 10, a);
    this.state.doc.text(String(this.state.question), 10, b);
    this.state.doc.text('Chosen Answer: ' + String(answer), 10, c); 
    this.setState({line: c});
  }

  downloadPdf() {
    this.state.doc.save('Assessment Results.pdf');
  }

  setUserAnswer(answer) {
    this.writePdf(answer);
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
      const a = this.state.line + 20;
      this.state.doc.text('Labor Trafficking case: ' + String(result[0]), 10, a);
      this.setState({ result: result[0] });
    } else {
      const a = this.state.line + 20;
      this.state.doc.text('Labor Trafficking case: Maybe', 10, a);
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
      <div>
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
      <br></br><br></br>
      <button class="button" >Interview Tips --></button>
      <br></br><br></br>
      <button class="button" >Fact Patterns --></button>
      <br></br><br></br>
      <button class="button" >Mass Statute --></button>
      <br></br><br></br>
      </div>
    );
  }
  
  renderResult() {
    return (
        <div>
        <br></br><br></br><br></br>
        <Popup
          trigger={<button className="button"> See Assessment Results </button>}
          modal
          contentStyle={{ maxWidth: "600px", width: "90%" }}>
          {close => (
          <div className="modal">
            <div className="header"> <strong>Assessment Results </strong></div>
            <div className="content1">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
              sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
              repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
              alias. Vitae?
              <br></br><br></br>
              <Result quizResult={this.state.result} />
              <br></br><br></br>
            </div>
            <div className="actions">
              <div className="btn-group">
                <button className="button1" onClick={this.downloadPdf}>Download PDF</button>
                <button className="button1" onClick={this._onStartClick}>Next Category</button>
                <button className="button1" onClick={() => { console.log("modal closed ");
                close(); this._onCompleteClick();}}>
                Exit
                </button>
              </div>
            </div>
          </div>
          )}
        </Popup>
        </div>
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

  _onInvestigateClick() {
    this.setState({
      page: 7,
    });
  }

  _onVictimClick() {
    this.setState({
      page: 8,
    });
  }

  renderPrepare() {
    return (
      <div class = "prep">
      <p className="asse">
          <strong>Prepare for Assessment</strong>
      </p>
      <p><strong>Preliminary Interview Information</strong></p>
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
      <p className="asse"><strong>Assessment Steps</strong></p>
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

  renderInvestigate() {
    return (
      <div>
        <p className="asse">Checklist</p>
        <ol>
          <li> Some Text........ </li>
          <li> Some Text........ </li>
          <li> Some Text........ </li>
          <li> Some Text........ </li>
        </ol>
      </div>
    );
  }

  renderVictim() {
    return (
      <div>
        <p className="asse">Hotlines</p>
        <ol>
          <li> Some Text........ </li>
          <li> Some Text........ </li>
          <li> Some Text........ </li>
          <li> Some Text........ </li>
        </ol>
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
        <div>
        <label for="show-menu" class="show-menu">Show/Hide Menu</label>
        <input type="checkbox" id="show-menu" role="button" />
        <ul id="menu" class="menu">
        <li class="lis"><a onClick= {this._onCompleteClick}><strong>Home</strong></a></li>
        <li class="lis"><a onClick= {this._onAssessClick}><strong>Assess</strong></a></li>
        <li class="lis"><a onClick= {this._onInvestigateClick}><strong>Investigate</strong></a></li>
        <li class="lis"><a onClick= {this._onVictimClick}><strong>Victim Services</strong></a></li>
        </ul>
        </div>
        

        {this.state.page == 1 ? this.renderHome() : this.state.page == 2 ? this.renderAssessment() : 
          this.state.page == 3 ? this.renderPrepare() : this.state.page == 4 ? this.renderAssessmentSteps() :
          this.state.page == 5 ? (this.state.result ? this.renderResult() : this.renderQuiz()) : this.state.page == 7 ?
          this.renderInvestigate() : this.state.page == 8 ? this.renderVictim() : this.renderHome()}
      </div>
    );
  }
}

export default App;
