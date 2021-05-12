import React, { Component } from 'react';
import logo from './logo.svg';
import menu from './menu.svg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import RouteHandler from './RouteHandler';
import instructions from './instructions.jpg';
import instructions1 from './instructions1.jpg';
import instructions2 from './instructions2.jpg';
import instructions3 from './instructions3.jpg';
import instructions4 from './instructions4.jpg';
import YesImg from './Yes.png';
import NoImg from './No.png';
import MaybeImg from './Maybe.png';
import Warning from './Warning.svg';
import ResultImg from './ResultWordmark.svg';
import ResultImgLight from './ResultWordmarkLightBlue.svg';
import ResultImgMobile from './ResultLockup.svg';
import './App.css';
import Question from './components/Question';
import SeriousHarmquizQuestions from './api/SeriousHarmquizQuestions';
import AbuseofLawquizQuestions from './api/AbuseofLawquizQuestions';
import ExtortionquizQuestions from './api/ExtortionquizQuestions';
import FinancialHarmquizQuestions from './api/FinancialHarmquizQuestions';
import RestraintquizQuestions from './api/RestraintquizQuestions';
import IdentityDocumentsquizQuestions from './api/IdentityDocumentsquizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import update from 'react-addons-update';
import Popup from 'reactjs-popup';
import jsPDF from 'jspdf';
import AssessmentBox from './structures/assessmentBox';
import Expandable from './structures/expandable';
import AssessmentPDF from './LaborTraffickingAssessmentDoc.pdf';
import About from './pages/About';
import Resources from './pages/Resources/Index';
import VictimServices from './pages/Resources/VictimServices';
import Statute from './pages/Statute';
import Report from './pages/Resources/Report';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Prepare from './pages/Prepare';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      qcategory: 1,
      qcategory_old: 1,
      question: [],
      Answer: new Array(14).fill(''),
      assessedCategories: [0],
      oneRegYes: -1,
      oneYes: -1,
      line: 0,
      page: 1,
      page_old: 1,
      addpage: 0,
      result: '',
      doc: new jsPDF(),
      answersCount: {
        No: 0,
        Yes: 0,
        Maybe: 0,
      },
      mobileMenu: false,
      // resourcesPage: 0,
      disclaimer: false,
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.evaluateNow = this.evaluateNow.bind(this);
    this._onAssessClick = this._onAssessClick.bind(this);
    this._onPrepareClick = this._onPrepareClick.bind(this);
    this._onResourcesClick = this._onResourcesClick.bind(this);
    this._onMassClick = this._onMassClick.bind(this);
    this._onReportClick = this._onReportClick.bind(this);
    this.sHarmQuizFunc = this.sHarmQuizFunc.bind(this);
    this.restraintQuizFunc = this.restraintQuizFunc.bind(this);
    this.abuseQuizFunc = this.abuseQuizFunc.bind(this);
    this.identitydocQuizFunc = this.identitydocQuizFunc.bind(this);
    this.extortionQuizFunc = this.extortionQuizFunc.bind(this);
    this.fharmQuizFunc = this.fharmQuizFunc.bind(this);
    this.downloadPdf = this.downloadPdf.bind(this);
    this.nextAssessmentCategory = this.nextAssessmentCategory.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.renderFederalIntro = this.renderFederalIntro.bind(this);
    this._onResourcesHomeClick = this._onResourcesHomeClick.bind(this);
  }

  componentDidMount() {
    this.scrollToTop();
  }

  componentDidUpdate() {
    //this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  shuffleArray(array) {
    return array;
  }

  writePdf(answer) {
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
    this.state.doc.text(String(this.state.question[0]), 10, b);
    this.state.doc.text('Chosen Answer: ' + String(answer), 10, c);
    this.setState({ line: c });
  }

  downloadPdf() {
    this.state.doc.save('Assessment Results.pdf');
  }

  getResults() {
    let answerKey = [];
    answerKey[1] = [1, 3, 4, 9];
    answerKey[2] = [3, 5, 7];
    answerKey[3] = [1];
    answerKey[4] = [1, 2, 3, 4, 5];
    answerKey[5] = [2];
    answerKey[6] = [5];

    if (this.state.qcategory == 6) {
      let temp = this.state.Answer;
      if (temp[7] == 'No') temp[7] = 'Yes';
      else if (temp[7] == 'Yes') temp[7] = 'No';
      this.setState({ Answer: temp });
    }

    for (let i = 0; i < answerKey[this.state.qcategory].length; i++) {
      let answer = answerKey[this.state.qcategory][i];
      if (this.state.Answer[answer] == 'Yes') {
        this.setState({ oneYes: 1 });
        return ['yes-one'];
      }
    }

    let assessedCategories = this.state.assessedCategories;
    if (!assessedCategories.includes(this.state.qcategory)) {
      assessedCategories.push(this.state.qcategory);
      this.setState({ assessedCategories: assessedCategories });
    }

    if (this.state.oneYes != -1) return ['yes-one'];

    if (assessedCategories.length == answerKey.length) return ['unclear-all'];

    for (let i = 1; i <= this.state.Answer.length; i++) {
      if (this.state.Answer[i] == 'Yes') {
        if (this.state.oneRegYes != -1) return ['yes-all'];
        else {
          if (this.state.qcategory == 6) {
            this.setState({ oneRegYes: 2 });
            return ['fharm'];
          } else {
            this.setState({ oneRegYes: 1 });
            return ['yes-reg'];
          }
        }
      }
    }

    if (this.state.oneRegYes == 1) return ['yes-reg'];
    else if (this.state.oneRegYes == 2) return ['fharm'];

    return ['unclear-one'];
  }

  setResults(result) {
    this.setState({ Answer: new Array(14).fill('') });
    if (result.length === 1) {
      // const a = this.state.line + 20;
      // this.state.doc.text('Labor Trafficking case: ' + String(result[0]), 10, a);
      this.setState({ result: result[0], page: 5 });
    } else {
      // const a = this.state.line + 20;
      // this.state.doc.text('Labor Trafficking case: Maybe', 10, a);
      this.setState({ result: 'Maybe', page: 5 });
    }
  }

  nextAssessmentCategory() {
    this.getResults();
    this.setState({ Answer: new Array(14).fill('') });
    switch (this.state.qcategory) {
      case 1:
        this.restraintQuizFunc();
        break;
      case 2:
        this.abuseQuizFunc();
        break;
      case 3:
        this.identitydocQuizFunc();
        break;
      case 4:
        this.extortionQuizFunc();
        break;
      case 5:
        this.fharmQuizFunc();
        break;
      case 6:
        this.evaluateNow();
        break;
    }
  }

  handleAnswerSelected(event) {
    let ul = event.currentTarget.parentElement.parentElement;
    let active = ul.getElementsByClassName('QuizActive');
    for (let item of active) {
      item.classList.remove('QuizActive');
    }
    event.currentTarget.parentElement.classList.add('QuizActive');

    const answer = event.currentTarget.value;
    //this.writePdf(answer);
    var ans = answer.split('_');
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 },
    });

    if (typeof ans[1] == 'string')
      if (ans[1] >= 1 && ans[1] <= this.state.Answer.length) this.state.Answer[ans[1]] = ans[0];
  }

  evaluateNow() {
    this.setResults(this.getResults());
  }

  prepareFunc() {
    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight && panel != null) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }

  sHarmQuizFunc() {
    this.setState({
      page: 4,
      questionId: 1,
      question: SeriousHarmquizQuestions,
      qcategory: 1,
    });
  }

  restraintQuizFunc() {
    this.setState({
      page: 4,
      questionId: 1,
      question: RestraintquizQuestions,
      qcategory: 2,
    });
  }

  abuseQuizFunc() {
    this.setState({
      page: 4,
      questionId: 1,
      question: AbuseofLawquizQuestions,
      qcategory: 3,
    });
  }

  identitydocQuizFunc() {
    this.setState({
      page: 4,
      questionId: 1,
      question: IdentityDocumentsquizQuestions,
      qcategory: 4,
    });
  }

  extortionQuizFunc() {
    this.setState({
      page: 4,
      questionId: 1,
      question: ExtortionquizQuestions,
      qcategory: 5,
    });
  }

  fharmQuizFunc() {
    this.setState({
      page: 4,
      questionId: 1,
      question: FinancialHarmquizQuestions,
      qcategory: 6,
    });
  }

  _onPrepareClick() {
    this.setState({
      page: 2,
      mobileMenu: false,
    });
  }

  _onAssessClick() {
    this.setState({
      page: 3,
      mobileMenu: false,
      Answer: new Array(14).fill(''),
    });
  }

  _onResultClick() {
    this.setState({
      page: 5,
      mobileMenu: false,
    });
  }

  _onResourcesClick() {
    let params = new URLSearchParams(window.location.search);
    let id = 0;
    if (params.get('id')) {
      if (params.get('id') === '0') id = 0;
      else if (params.get('id') === '1') id = 1;
      else if (params.get('id') === '2') id = 2;
      else if (params.get('id') === '3') id = 3;
    }
    this.setState({
      page: 6,
      mobileMenu: false,
      // resourcesPage: id,
    });
  }

  _onMassClick() {
    this.setState({
      page: 7,
      mobileMenu: false,
    });
  }

  _onReportClick() {
    this.setState({
      page: 8,
      mobileMenu: false,
    });
  }

  _onResourcesHomeClick() {
    this.setState({
      page: 10,
      mobileMenu: false,
    });
  }

  handleMenuClick() {
    this.setState({
      mobileMenu: !this.state.mobileMenu,
    });
  }

  renderAssessmentSteps() {
    return (
      <div>
        <div class="AssessmentDisclaimer" style={this.state.disclaimer ? { display: 'none' } : { display: 'block' }}>
          <div class="WarningDiv">
            <img src={Warning} class="AssessmentWarning" />
            <p class="pageTitle"> Legal Disclaimer</p>
          </div>
          <p style={{ fontWeight: 'bold' }}>
            All materials on this website and app are for general informational purposes only. The information presented
            is not legal advice, may not be current, and is subject to change without notice.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            This tool is designed for law enforcement and investigators only. For this reason, the tool uses terms, such
            as "victim" and "perpetrator," recognized in the criminal law context. If you are a victim in need of
            services, please contact the National Human Trafficking Resource Center hotline at (888) 373-7888 for more
            information.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Communication of information by, in, to or through this website and your receipt or use of it:
          </p>
          <ul>
            <li>
              <p>is not provided in the course of and does not create or constitute an attorney-client relationship</p>
            </li>
            <li>
              <p>is not intended as a solicitation</p>
            </li>
            <li>
              <p>is not a substitute for obtaining legal advice from a qualified attorney</p>
            </li>
          </ul>
          <p style={{ fontWeight: 'bold' }}>
            Your answers to the following question will not be saved or shared with other parties. This tool is for
            educational purposes only.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Click below to acknowledge that you have read and understand the disclaimer.
          </p>
          <div class="DisclaimerButton">
            <button
              class="button3"
              onClick={() => {
                this.setState({ disclaimer: !this.state.disclaimer });
              }}
            >
              {' '}
              I understand{' '}
            </button>
          </div>
        </div>
        <div style={this.state.disclaimer ? { display: 'block' } : { display: 'none' }}>
          <div style={{ borderBottom: '1px solid #EAEAEA' }} class="App hidden-md hidden-lg">
            <p class="pageTitle">Assess</p>
            {/*<p class="Head">Determine if your case is labor trafficking</p>*/}
            <p class="HomeHead1">
              These questions are designed for investigators to help determine if circumstances rise to the level of
              labor trafficking under Massachusetts law.
            </p>
          </div>

          <div style={{ borderBottom: '1px solid #EAEAEA' }} class="App hidden-xs hidden-sm">
            <div class="homeContainer">
              <p class="pageTitle">Assess</p>
              <p class="Head">Determine if your case is labor trafficking</p>
              <p class="HomeHead1">
                These questions are designed for investigators to help determine <br />
                if circumstances rise to the level of labor trafficking under Massachusetts law.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#fff' }}>
            <div class="AssesmentContent">
              <div class="App hidden-md hidden-lg">
                <p class="regularText" style={{ fontStyle: 'italic' }}>
                  Select a category to view its questions
                </p>
                <p class="regularText" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  <a target="_blank" href={AssessmentPDF}>
                    Or click here to download the questions
                  </a>
                </p>
              </div>
              <div class="App hidden-xs hidden-sm">
                <p class="regularText" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                  Select a category to view its questions
                </p>
                <p
                  class="regularText"
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    textAlign: 'center',
                  }}
                >
                  <a target="_blank" href={AssessmentPDF}>
                    Or click here to download the questions
                  </a>
                </p>
              </div>
              <br />
              <div>
                <button class="AssessmentButton" onClick={this.sHarmQuizFunc}>
                  <AssessmentBox
                    title={'Serious Harm'}
                    content={'Causes or threatens to cause serious harm to any person'}
                  />
                </button>
                <button class="AssessmentButton" onClick={this.restraintQuizFunc}>
                  <AssessmentBox
                    title={'Physical Restraint'}
                    content={'Physically restrains or threatens to physically restrain another person'}
                  />
                </button>
                <button class="AssessmentButton" onClick={this.abuseQuizFunc}>
                  <AssessmentBox
                    title={'Abuse of the Law'}
                    content={'Abuses or threatens to abuse the law or legal process'}
                  />
                </button>
                <button class="AssessmentButton" onClick={this.identitydocQuizFunc}>
                  <AssessmentBox
                    title={'Identity Documents'}
                    content={
                      'Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported passport or other immigration document, or any other actual or purported government identification document, of another person'
                    }
                  />
                </button>
                <button class="AssessmentButton" onClick={this.extortionQuizFunc}>
                  <AssessmentBox title={'Extortion'} content={'Engages in extortion under Massachusetts law'} />
                </button>
                <button class="AssessmentButton" onClick={this.fharmQuizFunc}>
                  <AssessmentBox
                    title={'Financial Harm'}
                    content={'Causes or threatens to cause financial harm to any person'}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderNavHome() {}

  renderFederalIntro() {
    return (
      <div>
        <p class="regularText">
          The Massachusetts anti-trafficking statute was enacted in 2012, and the law is still evolving. For those
          reasons, we often look for guidance from federal definitions and federal case law.
        </p>
        <br />
      </div>
    );
  }

  renderQuestions(questions) {
    return (
      <div style={{ backgroundColor: '#fff' }}>
        <div class="AssessmentQuestions">
          {function () {
            let JSXarray = [];
            for (let i = 0; i < questions.length; i++) {
              JSXarray.push(
                <Quiz
                  answer={this.state.Answer[i + 1]}
                  questionId={this.state.questionId + i}
                  question={this.state.question[i].question}
                  questionTotal={questions.length}
                  onAnswerSelected={this.handleAnswerSelected}
                />,
              );
            }
            return JSXarray;
          }.bind(this)()}
        </div>
        <div
          class="row AssessmentButtons"
          style={{
            backgroundColor: '#fff',
            padding: '20px 20px',
            textAlign: 'right',
            paddingTop: '0px',
          }}
        >
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', padding: '0' }}>
            <button class="button1 assessButton" style={{ float: 'unset' }} onClick={this._onAssessClick}>
              Back
            </button>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', padding: '0' }}>
            <button class="button3 assessButton" style={{ float: 'unset' }} onClick={this.evaluateNow}>
              Evaluate
            </button>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', padding: '0' }}>
            <button class="button1 assessButton" style={{ float: 'unset' }} onClick={this.nextAssessmentCategory}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderHarmQuiz() {
    return (
      <div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Assess</p>
          <p class="Head">Question: Serious Harm</p>
          <p class="regularText" style={{ fontWeight: 'bold' }}>
            Causes or threatens to cause serious harm to any person
          </p>
        </div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Assess</p>
            <p class="Head">Question: Serious Harm</p>
            <p class="HomeHead1">Causes or threatens to cause serious harm to any person</p>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <Expandable
            content={
              <div class="App">
                <br />
                {this.renderFederalIntro()}
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Lay Definition
                </p>
                <p class="regularText">
                  Serious harm may be physical and nonphysical, including psychological, financial, or reputational
                  harm. Generally, the test contemplates whether it is sufficiently serious, under all the surrounding
                  circumstances, to compel a reasonable person of the same background and in the same circumstances to
                  perform or to continue performing labor or services in order to avoid incurring that harm.{' '}
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Legal Definition
                </p>
                <p class="regularText">
                  There is currently no statutory or case law definition of serious harm under Massachusetts law.
                  Serious harm is defined under federal law as any harm, whether physical or nonphysical, including
                  psychological, financial, or reputational harm, that is sufficiently serious, under all the
                  surrounding circumstances, to compel a reasonable person of the same background and in the same
                  circumstances to perform or to continue performing labor or services in order to avoid incurring that
                  harm. 18 USC § 1589(c)(2).{' '}
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Examples
                </p>
                <ul>
                  <li>
                    <p class="regularText">
                      An employer kicks the worker in the morning to wake her up and to start working.
                    </p>
                  </li>
                  <li>
                    <p class="regularText">
                      When the worker asks for his wages, the employers gets angry and hits the worker.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div class="hidden-xs hidden-sm">
          <div
            class="App"
            style={{
              paddingBottom: '30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <br />
            {this.renderFederalIntro()}
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Lay Definition
            </p>
            <p class="regularText">
              Serious harm may be physical and nonphysical, including psychological, financial, or reputational harm.
              Generally, the test contemplates whether it is sufficiently serious, under all the surrounding
              circumstances, to compel a reasonable person of the same background and in the same circumstances to
              perform or to continue performing labor or services in order to avoid incurring that harm.{' '}
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Legal Definition
            </p>
            <p class="regularText">
              There is currently no statutory or case law definition of serious harm under Massachusetts law. Serious
              harm is defined under federal law as any harm, whether physical or nonphysical, including psychological,
              financial, or reputational harm, that is sufficiently serious, under all the surrounding circumstances, to
              compel a reasonable person of the same background and in the same circumstances to perform or to continue
              performing labor or services in order to avoid incurring that harm. 18 USC § 1589(c)(2).{' '}
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Examples
            </p>
            <ul>
              <li>
                <p class="regularText">
                  An employer kicks the worker in the morning to wake her up and to start working.
                </p>
              </li>
              <li>
                <p class="regularText">
                  When the worker asks for his wages, the employers gets angry and hits the worker.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {this.renderQuestions(SeriousHarmquizQuestions)}
      </div>
    );
  }

  renderRestraintQuiz() {
    return (
      <div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Assess</p>
          <p class="Head">Question: Physical Restraint</p>
          <p class="regularText" style={{ fontWeight: 'bold' }}>
            Physically restrains or threatens to physically restrain another person{' '}
          </p>
        </div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Assess</p>
            <p class="Head">Question: Physical Restraint</p>
            <p class="HomeHead1">Physically restrains or threatens to physically restrain another person </p>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <Expandable
            content={
              <div class="App">
                <br />
                {this.renderFederalIntro()}
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Lay Definition
                </p>
                <p class="regularText">
                  Physical restraint is not defined under Massachusetts law. Federally, it has been defined generally as
                  purposely limiting or obstructing the freedom of a person’s bodily movement. This can range from using
                  locks on doors or windows to more subtle forms of control that restrict another person’s ability to
                  move around.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Example
                </p>
                <ul>
                  <li>
                    <p class="regularText">
                      A domestic worker is brought to the United States by an employer. The employer does not permit her
                      to leave the house unaccompanied, and her movement is monitored by cameras.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div class="hidden-xs hidden-sm">
          <div
            class="App"
            style={{
              paddingBottom: '30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <br />
            {this.renderFederalIntro()}
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Lay Definition
            </p>
            <p class="regularText">
              Physical restraint is not defined under Massachusetts law. Federally, it has been defined generally as
              purposely limiting or obstructing the freedom of a person’s bodily movement. This can range from using
              locks on doors or windows to more subtle forms of control that restrict another person’s ability to move
              around.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Example
            </p>
            <ul>
              <li>
                <p class="regularText">
                  A domestic worker is brought to the United States by an employer. Her employers do not permit her to
                  leave the house unaccompanied, and her movement is monitored by cameras.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {this.renderQuestions(RestraintquizQuestions)}
      </div>
    );
  }

  renderAbuseQuiz() {
    return (
      <div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Assess</p>
          <p class="Head">Question: Abuse of the Law</p>
          <p class="regularText" style={{ fontWeight: 'bold' }}>
            Abuses or threatens to abuse the law or legal process{' '}
          </p>
        </div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Assess</p>
            <p class="Head">Question: Abuse of the Law</p>
            <p class="HomeHead1">Abuses or threatens to abuse the law or legal process </p>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <Expandable
            content={
              <div class="App">
                <br />
                {this.renderFederalIntro()}
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Lay Definition
                </p>
                <p class="regularText">
                  Abuse of the legal process under federal law includes the use or threatened use of a law or legal
                  process, whether administrative, civil, or criminal, in any manner or for any purpose for which the
                  law was not designed. A common example is a threat of deportation by an employer.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Legal Definition
                </p>
                <p class="regularText">
                  There is currently no statutory or case law definition of abuse of legal process under Massachusetts
                  law. Abuse of the legal process is defined federally as the use or threatened use of a law or legal
                  process, whether administrative, civil, or criminal, in any manner or for any purpose for which the
                  law was not designed, in order to exert pressure on another person to cause that person to take some
                  action or refrain from taking some action. 22 U.S.C. § 7102(1).
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Examples
                </p>
                <ul>
                  <li>
                    <p class="regularText">
                      An employer threatens to deport the worker or "call immigration" if he stops working for the
                      employer.
                    </p>
                  </li>
                  <li>
                    <p class="regularText">
                      An employer threatens to falsely accuse the worker of a crime if she fails to work.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div class="hidden-xs hidden-sm">
          <div
            class="App"
            style={{
              paddingBottom: '30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <br />
            {this.renderFederalIntro()}
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Lay Definition
            </p>
            <p class="regularText">
              Abuse of the legal process under federal law includes the use or threatened use of a law or legal process,
              whether administrative, civil, or criminal, in any manner or for any purpose for which the law was not
              designed. A common example is a threat of deportation by an employer.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Legal Definition
            </p>
            <p class="regularText">
              There is currently no statutory or case law definition of abuse of legal process under Massachusetts law.
              Abuse of the legal process is defined federally as the use or threatened use of a law or legal process,
              whether administrative, civil, or criminal, in any manner or for any purpose for which the law was not
              designed, in order to exert pressure on another person to cause that person to take some action or refrain
              from taking some action. 22 U.S.C. § 7102(1).
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Examples
            </p>
            <ul>
              <li>
                <p class="regularText">
                  An employer threatens to deport the worker or "call immigration" if he stops working for the employer.
                </p>
              </li>
              <li>
                <p class="regularText">
                  An employer threatens to falsely accuse the worker of a crime if she fails to work.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {this.renderQuestions(AbuseofLawquizQuestions)}
      </div>
    );
  }

  renderIdentityQuiz() {
    return (
      <div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Assess</p>
          <p class="Head">Question: Identity Documents</p>
          <p class="regularText" style={{ fontWeight: 'bold' }}>
            Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported passport or other
            immigration document, or any other actual or purported government identification document, of another
            person.
          </p>
        </div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Assess</p>
            <p class="Head">Question: Identity Documents</p>
            <p class="HomeHead1">
              Knowingly destroys, conceals, removes, confiscates or possesses any actual <br /> or purported passport or
              other immigration document, or any other actual <br /> or purported government identification document, of
              another person.
            </p>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <Expandable
            content={
              <div class="App">
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Lay Definition
                </p>
                <p class="regularText">
                  This includes taking someone’s identity document for any period of time, even if it is brief. In
                  addition, it can include tearing or mutilating identity documents related to work.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Legal Definition
                </p>
                <p class="regularText">
                  Under Massachusetts law, this includes anyone who knowingly destroys, conceals, removes, confiscates
                  or possesses any actual or purported passport or other immigration document, or any other actual or
                  purported government identification document, of another person. M.G.L. ch. 265, § 49.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Example
                </p>
                <ul>
                  <li>
                    <p class="regularText">
                      An employer demands that the worker’s passport remain with the employer. The employer keeps it in
                      an undisclosed location.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div class="hidden-xs hidden-sm">
          <div
            class="App"
            style={{
              paddingBottom: '30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Lay Definition
            </p>
            <p class="regularText">
              This includes taking someone’s identity document for any period of time, even if it is brief. In addition,
              it can include tearing or mutilating identity documents related to work.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Legal Definition
            </p>
            <p class="regularText">
              Under Massachusetts law, this includes anyone who knowingly destroys, conceals, removes, confiscates or
              possesses any actual or purported passport or other immigration document, or any other actual or purported
              government identification document, of another person. M.G.L. ch. 265, § 49.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Example
            </p>
            <ul>
              <li>
                <p class="regularText">
                  An employer demands that the worker’s passport remain with the employer. The employer keeps it in an
                  undisclosed location.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {this.renderQuestions(IdentityDocumentsquizQuestions)}
      </div>
    );
  }

  renderExtortionQuiz() {
    return (
      <div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Assess</p>
          <p class="Head">Question: Extortion</p>
          <p class="regularText" style={{ fontWeight: 'bold' }}>
            Engages in extortion under Massachusetts law{' '}
          </p>
        </div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Assess</p>
            <p class="Head">Question: Extortion</p>
            <p class="HomeHead1">Engages in extortion under Massachusetts law </p>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <Expandable
            content={
              <div class="App">
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Lay Definition
                </p>
                <p class="regularText">
                  Extortion is the practice of trying to get something through force, threats, or blackmail.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Legal Definition
                </p>
                <p class="regularText">
                  "Whoever, verbally or by a written or printed communication, maliciously threatens to accuse another
                  of a crime or offence, or by a verbal or written or printed communication maliciously threatens an
                  injury to the person or property of another, or any police officer or person having the powers of a
                  police officer, or any officer, or employee of any licensing authority who verbally or by written or
                  printed communication maliciously and unlawfully uses or threatens to use against another the power or
                  authority vested in him, with intent thereby to extort money or any pecuniary advantage, or with
                  intent to compel any person to do any act against his will, shall be punished by imprisonment in the
                  state prison for not more than fifteen years, or in the house of correction for not more than two and
                  one half years, or by a fine of not more than five thousand dollars, or both." M.G.L. ch. 265, § 25.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Example
                </p>
                <ul>
                  <li>
                    <p class="regularText">
                      An employer threatens to release embarrassing photographs, unless the worker continues to work.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div class="hidden-xs hidden-sm">
          <div
            class="App"
            style={{
              paddingBottom: '30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Lay Definition
            </p>
            <p class="regularText">
              Extortion is the practice of trying to get something through force, threats, or blackmail.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Legal Definition
            </p>
            <p class="regularText">
              "Whoever, verbally or by a written or printed communication, maliciously threatens to accuse another of a
              crime or offence, or by a verbal or written or printed communication maliciously threatens an injury to
              the person or property of another, or any police officer or person having the powers of a police officer,
              or any officer, or employee of any licensing authority who verbally or by written or printed communication
              maliciously and unlawfully uses or threatens to use against another the power or authority vested in him,
              with intent thereby to extort money or any pecuniary advantage, or with intent to compel any person to do
              any act against his will, shall be punished by imprisonment in the state prison for not more than fifteen
              years, or in the house of correction for not more than two and one half years, or by a fine of not more
              than five thousand dollars, or both." M.G.L. ch. 265, § 25.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Example
            </p>
            <ul>
              <li>
                <p class="regularText">
                  An employer threatens to release embarrassing photographs, unless the worker continues to work.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {this.renderQuestions(ExtortionquizQuestions)}
      </div>
    );
  }

  renderfHarmQuiz() {
    return (
      <div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-md hidden-lg">
          <p class="pageTitle">Assess</p>
          <p class="Head">Question: Financial Harm</p>
          <p class="regularText" style={{ fontWeight: 'bold' }}>
            Causes or threatens to cause financial harm to any person
          </p>
        </div>
        {/*style={{borderBottom : "1px solid #EAEAEA"}}*/}
        <div class="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Assess</p>
            <p class="Head">Question: Financial Harm</p>
            <p class="HomeHead1">Causes or threatens to cause financial harm to any person</p>
          </div>
        </div>
        <div class="hidden-md hidden-lg">
          <Expandable
            content={
              <div class="App">
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Lay Definition
                </p>
                <p class="regularText">
                  Financial harm is when a perpetrator puts the worker in a detrimental position in relation to wealth,
                  property, or other monetary benefits through extortion, criminal usury, or illegal employment
                  contracts. This might include a situation where the perpetrator uses an illegal employment contract to
                  lure a worker to work in demeaning conditions.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Legal Definition
                </p>
                <p class="regularText">
                  “Financial harm” is defined as a detrimental position in relation to wealth, property or other
                  monetary benefits that occurs as a result of another person’s illegal act including, but not limited
                  to, extortion under by section 25, a violation of section 49 of chapter 271 (“Criminal Usury”), or
                  illegal employment contracts.” M.G.L. ch. 265, § 49.
                </p>
                <br />
                <p class="regularText" style={{ fontWeight: 'bold' }}>
                  Examples
                </p>
                <ul>
                  <li>
                    <p class="regularText">An employer refuses to pay wages to the worker for the work she has done.</p>
                  </li>
                  <li>
                    <p class="regularText">
                      A worker makes one mistake on the job, and the employer refuses to pay him that week.
                    </p>
                  </li>
                  <li>
                    <p class="regularText">
                      An employer tells the worker that he has no wages to be paid out because of the costs the employer
                      is incurring to house, feed, transport him to the worksite each day.
                    </p>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div class="hidden-xs hidden-sm">
          <div
            class="App"
            style={{
              paddingBottom: '30px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Lay Definition
            </p>
            <p class="regularText">
              Financial harm is when a perpetrator puts the worker in a detrimental position in relation to wealth,
              property, or other monetary benefits through extortion, criminal usury, or illegal employment contracts.
              This might include a situation where the perpetrator uses an illegal employment contract to lure a worker
              to work in demeaning conditions.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Legal Definition
            </p>
            <p class="regularText">
              “Financial harm” is defined as a detrimental position in relation to wealth, property or other monetary
              benefits that occurs as a result of another person’s illegal act including, but not limited to, extortion
              under by section 25, a violation of section 49 of chapter 271 (“Criminal Usury”), or illegal employment
              contracts.” M.G.L. ch. 265, § 49.
            </p>
            <br />
            <p class="regularText" style={{ fontWeight: 'bold' }}>
              Examples
            </p>
            <ul>
              <li>
                <p class="regularText">An employer refuses to pay wages to the worker for the work she has done.</p>
              </li>
              <li>
                <p class="regularText">
                  A worker makes one mistake on the job, and the employer refuses to pay him that week.
                </p>
              </li>
              <li>
                <p class="regularText">
                  An employer tells the worker that he has no wages to be paid out because of the costs the employer is
                  incurring to house, feed, transport him to the worksite each day.
                </p>
              </li>
            </ul>
            <p class="regularText" style={{ fontWeight: 'normal' }}>
              **For more information about minimum wage in Massachusetts,{' '}
              <a
                style={{
                  fontWeight: 'normal',
                  textDecoration: 'underline',
                  color: '#11416D',
                }}
                target="_blank"
                href="https://www.mass.gov/guides/pay-and-recordkeeping"
              >
                click here
              </a>
            </p>
          </div>
        </div>
        {this.renderQuestions(FinancialHarmquizQuestions)}
      </div>
    );
  }

  renderImgTick() {
    return <img src={Warning} class="modalImg" alt="Result" />;
  }

  renderImgCross() {
    return <img src={NoImg} class="modalImg" alt="Result" />;
  }

  renderImgQues() {
    return <img src={MaybeImg} class="modalImg" alt="Result" />;
  }

  renderResult() {
    return (
      <div>
        <Popup
          open={true}
          contentStyle={{
            maxWidth: '600px',
            height: '400px',
            width: '90%',
            overflow: 'auto',
          }}
        >
          {(close) => (
            <div style={{ display: 'table', height: '100%', width: '100%' }}>
              <button
                class="modalClose"
                onClick={() => {
                  close(); /*this._onPrepareClick()*/
                }}
              >
                &#215;
              </button>
              <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                <div className="header">
                  <p class="modalCategory">Results for:</p>
                </div>
                <div className="header">
                  <p>
                    {this.state.qcategory == 1
                      ? 'Serious Harm'
                      : this.state.qcategory == 2
                      ? 'Physical Restraint'
                      : this.state.qcategory == 3
                      ? 'Abuse of the Law'
                      : this.state.qcategory == 4
                      ? 'Identity Documents'
                      : this.state.qcategory == 5
                      ? 'Extortion'
                      : 'Financial Harm'}
                  </p>
                </div>
                {(() => {
                  switch (this.state.result) {
                    case 'yes-one':
                    case 'yes-all':
                      return this.renderImgTick();
                    default:
                      return this.renderImgQues();
                  }
                })()}
                <div style={{ paddingTop: '20px' }} class="header">
                  <p>Learn How to Refer to Law Enforcement or Find Victim Services</p>
                </div>
                <Result quizResult={this.state.result} />
                <div class="actions" style={{ textAlign: 'center' }}>
                  <button onClick={this._onAssessClick} className="button1" style={{ float: 'unset' }}>
                    Re-evaluate
                  </button>
                  {/*<div>
                      <a href="/report"><button className="button1" style={{float : "unset", marginRight: "10px"}}>Refer</button></a>
                      <a href="/resources?id=0"><button className="button3" style={{float : "unset"}}>Victim Services</button></a>
                    </div>*/}
                </div>
                <br />
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }

  render() {
    if (this.state.qcategory_old != this.state.qcategory || this.state.page_old != this.state.page) {
      this.setState({
        qcategory_old: this.state.qcategory,
        page_old: this.state.page,
      });
      this.scrollToTop();
    }
    return (
      <Router>
        <div className="Assess" ref="main" style={this.state.mobileMenu ? { left: '-70vw' } : { left: '0' }}>
          <div class="topRowContainer row">
            <div class="topRow col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <a href="/">
                <img src={ResultImgLight} class="topDivHL" alt="RESULT" />
              </a>
            </div>

            <div class="topRow1 col-xs-6 col-sm-6 col-md-9 col-lg-9">
              <img
                src={menu}
                class="show-menu"
                onClick={() => {
                  this.handleMenuClick();
                }}
              />
              <input type="checkbox" id="show-menu" role="button" />
              <NavBar />
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/prepare" component={Prepare} />
            <Route
              exact
              path="/assess"
              render={(props) => (
                <RouteHandler
                  init={this._onAssessClick}
                  render={(() => {
                    switch (this.state.page) {
                      case 3:
                        return this.renderAssessmentSteps.bind(this);
                        break;
                      case 4:
                        switch (this.state.qcategory) {
                          case 1:
                            return this.renderHarmQuiz.bind(this);
                            break;
                          case 2:
                            return this.renderRestraintQuiz.bind(this);
                            break;
                          case 3:
                            return this.renderAbuseQuiz.bind(this);
                            break;
                          case 4:
                            return this.renderIdentityQuiz.bind(this);
                            break;
                          case 5:
                            return this.renderExtortionQuiz.bind(this);
                            break;
                          default:
                            return this.renderfHarmQuiz.bind(this);
                            break;
                        }
                        break;
                      case 5:
                        let JSXlist = () => {
                          return [this.renderAssessmentSteps.bind(this)(), this.renderResult.bind(this)()];
                        };
                        return JSXlist;
                        break;
                      default:
                        return this.renderAssessmentSteps.bind(this);
                        break;
                    }
                  })()}
                />
              )}
            />
            <Route exact path="/victim-services" component={VictimServices} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/about" component={About} />
            <Route exact path="/statute" component={Statute} />
            <Route exact path="/resources" component={Resources} />
          </Switch>
        </div>
        <MobileMenu mobileMenu={this.state.mobileMenu} page={this.state.page} />
      </Router>
    );
  }
}

export default App;
