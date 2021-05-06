import React, { Component } from 'react';

export default class Prepare extends Component {
  render() {
    let blueBoxContainer = 'prepareBlueBoxContainer blueBoxLeft';
    let blueBox = 'prepareBlueBox';

    return (
      <div>
        <div style={{ borderBottom: '1px solid #EAEAEA' }} class="App hidden-md hidden-lg">
          <p class="pageTitle">Prepare</p>
          <p class="Head">Find tips for interviewing victims</p>
          <p className="HomeHead1">
            What to think about before you interview the victim.<br></br>
          </p>
        </div>

        <div style={{ borderBottom: '1px solid #EAEAEA' }} class="App hidden-xs hidden-sm">
          <div class="homeContainer">
            <p class="pageTitle">Prepare</p>
            <p class="Head">Find tips for interviewing victims</p>
            <p className="HomeHead1">What to think about before you interview the victim.</p>
          </div>
        </div>

        <div className="prep1 resourcesContent">
          <QuestionBox
            title={<h1>Tip 1: Develop trust</h1>}
            html={
              <BlueBox
                blueBoxContainer={blueBoxContainer}
                blueBox={blueBox}
                html={
                  <div>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Be patient</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Establishing trust with the victim may be difficult during initial interviews. Victims may not
                      initially divulge key details due to fear.
                    </h2>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      In the human trafficking context, it is common to engage in multiple interviews as trust develops.
                      It is also common that there may be initial inconsistencies as a result of distrust or the
                      victim’s lack of understanding about the legal process.
                    </h2>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Interview setting</h1>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      Victims should be interviewed in a setting in which they are physically and emotionally
                      comfortable. Interviewers should offer water, avoid noisy areas or areas with heavy foot traffic,
                      and ensure that only essential people are present in the interview.
                    </h2>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Confidentiality limitations</h1>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      You will not be able to keep details disclosed by the victim confidential. Explain this at the
                      beginning so the victim will understand your role and not feel betrayed if you have to share
                      information with prosecutors or other government officials.
                    </h2>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Referrals</h1>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      Make referrals to appropriate legal, social, and mental health services as soon as possible to
                      establish trust and to ensure the victim receives needed support.{' '}
                      <span style={{ 'font-weight': 'bold' }}>See Tip 5 for more information.</span>
                    </h2>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Communication</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      If the victim has limited English proficiency, trust will be nearly impossible to establish
                      without a skilled interpreter.{' '}
                      <span style={{ 'font-weight': 'bold' }}>
                        See Tip 4 below to learn about when to use an interpreter.
                      </span>
                    </h2>
                  </div>
                }
              />
            }
          />
          <QuestionBox
            title={<h1>Tip 2: Understand the impact of immigration status on victim cooperation</h1>}
            html={
              <BlueBox
                blueBoxContainer={blueBoxContainer}
                blueBox={blueBox}
                html={
                  <div>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Undocumented victims are particularly at risk for human trafficking and may fear engaging with law
                      enforcement.
                    </h2>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      Immigration threats are often used as a means of power and control over the victim. If the victim
                      is undocumented or if you are unsure of the victim’s immigration status, make a referral
                      immediately to an experienced immigration attorney.{' '}
                      <a class="prepareLink" href="/resources?id=2">
                        Click here for a list of local immigration legal services providers.
                      </a>
                    </h2>
                  </div>
                }
              />
            }
          />

          <QuestionBox
            title={<h1>Tip 3: Engage in safety planning</h1>}
            html={
              <BlueBox
                blueBoxContainer={blueBoxContainer}
                blueBox={blueBox}
                html={
                  <div>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Safety planning is very important</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Ask about the victim’s immediate safety and take appropriate steps to ensure safety both before
                      and after interviewing.
                    </h2>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      Involve a victim advocate in the process as soon as possible.{' '}
                      <a class="prepareLink" href="/resources?id=1">
                        Click here for a list of questions to consider when thinking about safety planning.
                      </a>
                    </h2>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Remember</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Victims may be fearful of reprisals to themselves and their family members.
                    </h2>
                    <h2 style={{ fontWeight: 'normal', marginBottom: '15px' }}>
                      The victim may need to work to continue to repay debt and/or to support family members here or
                      abroad.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Some undocumented victims may be eligible for work authorization.{' '}
                      <a class="prepareLink" href="/resources?id=2">
                        Click here to learn more about immigration relief.
                      </a>
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Make referrals to organizations that can assist with safety planning.{' '}
                      <a class="prepareLink" href="/resources?id=0">
                        Click here to learn about available victim services.
                      </a>
                    </h2>
                  </div>
                }
              />
            }
          />

          <QuestionBox
            title={<h1>Tip 4: Use a qualified interpreter</h1>}
            html={
              <BlueBox
                blueBoxContainer={blueBoxContainer}
                blueBox={blueBox}
                html={
                  <div>
                    <h2 style={{ fontWeight: 'normal' }}>
                      It is important to use skilled, culturally competent interpreters to assist in interviews with
                      victims who have limited English proficiency.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Always ask the victim about any languages he or she speaks and in what language he or she prefers
                      to communicate.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>In-person interpretation is preferable.</h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Before the interview, screen your interpreter to make sure he or she is not involved in the case
                      and does not have connections to the suspect. Often, ethnic communities can be small, and it is
                      essential that the interpreter has no relationship with the suspect and understands the importance
                      of confidentiality.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Understand that there may be stigma and subtle cultural considerations that can affect the
                      victim’s disclosures to interpreters. For example, a victim may not feel comfortable disclosing a
                      sexual assault in front of someone from his or her same ethnicity, fearing stigma or blame.
                    </h2>
                    <h1 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      Consult with your office about what interpretation resources may be available to you.
                    </h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      You may consider contracting with a court certified interpreter from the{' '}
                      <span
                        style={{
                          fontWeight: 'normal',
                          textDecoration: 'underline',
                          color: '#11416D',
                        }}
                      >
                        <a target="_blank" href="https://www.mass.gov/orgs/office-of-court-interpreter-services">
                          Office of Court Interpreter Services (OCIS)
                        </a>
                      </span>{' '}
                      or contacting the{' '}
                      <span
                        style={{
                          fontWeight: 'normal',
                          textDecoration: 'underline',
                          color: '#11416D',
                        }}
                      >
                        <a
                          target="_blank"
                          href="https://www.languageline.com/paid/personal-interpreter-services-gaw?url=https://www.languageline.com/paid/personal-interpreter-services-gaw&ads_adid=48994643020&ads_cmpid=972166319&ads_creative=236070997915&ads_matchtype=p&ads_network=g&ads_targetid=kwd-297628671103&ttv=2&utm_campaign=Personal%20Interpreter%20-%20Brand&utm_medium=ppc&utm_source=adwords&utm_term=language%20line&gclid=Cj0KCQjwiILsBRCGARIsAHKQWLMaVH3_LhGgKUOVMlJhLw0tK0vXS5_NcqQVp4xA9xi333IKrg4bnCEaAvEHEALw_wcB"
                        >
                          Language Line
                        </a>
                      </span>{' '}
                      for phone interpretation if no in-person interpreter is available.
                    </h2>
                  </div>
                }
              />
            }
          />

          <QuestionBox
            title={<h1>Tip 5: Make referrals to appropriate victim services as soon as possible</h1>}
            html={
              <BlueBox
                blueBoxContainer={blueBoxContainer}
                blueBox={blueBox}
                html={
                  <div>
                    <h1 style={{ fontWeight: 'bold' }}>Referrals to victim services </h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      The first priority is ensuring that the victim’s basic needs are met. This includes access to safe
                      housing, mental health services, medical services, and food.{' '}
                      <a class="prepareLink" href="/resources?id=0">
                        Click here to learn more about available victim services.
                      </a>
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      {' '}
                      It is important to refer the victim to an attorney as soon as possible to ensure that he or she
                      can learn about his or her rights. A victim of labor trafficking may be eligible for certain
                      protections under law, such as victim compensation, criminal restitution, immigration relief, and
                      civil remedies.{' '}
                      <a class="prepareLink" href="/resources?id=3">
                        Click here to learn more about available legal services and how to make referral.
                      </a>
                    </h2>
                  </div>
                }
              />
            }
          />

          {/*<QuestionBox title={<h1>Tip 5: How to engage with the victim</h1>} html={(
            <BlueBox blueBoxContainer={blueBoxContainer} blueBox={blueBox} html={(
              <div>
                <h2 style={{fontWeight:"normal"}}>At the outset, allowing the victim to tell as much or as little of his/her experience as he or she is comfortable is key in building trust and a successful investigation.</h2>
                <h2 style={{fontWeight:"bold"}}>Asking open-ended questions is important to build trust.</h2>
                <h2 style={{fontWeight:"normal"}}>It is important to understand how trauma can affect a victim’s disclosure and how to respond when the signs of trauma present themselves in an interview. Trauma can make victims reluctant to disclose and may affect their memory of an event, causing them to disclose their stories in a non-linear or inconsistent manner. It is important to allow for multiple interviews to help the victim fully disclose the traumatic event and to understand that there may be inconsistencies that emerge in early interviews.</h2>
                <h2>If interviewing a child victim, find your local Children’s Advocacy Center. <a href="https://www.nationalcac.org/find-a-cac/" class="prepareLink">Click here for a list of victim services.</a></h2>
              </div>
            )} />
          )} />  */}

          <QuestionBox
            title={<h1>Tip 6: Educate yourself about trauma</h1>}
            html={
              <BlueBox
                blueBoxContainer={blueBoxContainer}
                blueBox={blueBox}
                html={
                  <div>
                    <h1 style={{ fontWeight: 'bold' }}>Trauma-informed interviewing</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Approach the victim in a trauma-informed manner. It is important to understand how trauma can
                      affect a victim’s disclosure and how to respond when the signs of trauma present themselves in an
                      interview.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      {' '}
                      Often, victims may suffer from post-traumatic stress disorder, depression, and/or other mental
                      health conditions. For this reason, they may have difficulty telling you about key parts of their
                      story. Trauma can make victims reluctant to disclose and may affect their memory of an event,
                      causing them to disclose their stories in a non-linear or inconsistent manner. Facts may emerge
                      over time, and it may be important to engage in multiple interviews or ask for the assistance of a
                      forensic interviewer, when appropriate.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Explore whether the victim has mental health supports in place at the outset and if not, make
                      appropriate referrals to ensure the victim has support throughout the process.{' '}
                      <a class="prepareLink" href="/resources?id=0">
                        Click here for a list of victim services.
                      </a>
                    </h2>
                    <h1 style={{ marginTop: '20px', fontWeight: 'bold' }}>Child victims</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      If a child (any victim under 18) is involved, mandated reporters must file a 51A report with the
                      Massachusetts Department of Children and Families (DCF), which will report the situation to the
                      local District Attorney’s Office. By law, DCF will work to establish a multidisciplinary team to
                      provide comprehensive, tailored services to the child victim, and coordinate an interview.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Please consult with your local{' '}
                      <span
                        style={{
                          fontWeight: 'normal',
                          textDecoration: 'underline',
                          color: '#11416D',
                        }}
                      >
                        <a target="_blank" href="http://machildrensalliance.org/locate-a-cac/">
                          Children’s Advocacy Center
                        </a>
                      </span>{' '}
                      to coordinate, and the multidisciplinary team will work with you to consider if an interview of
                      the child is appropriate and if so, how best to approach the interview.
                    </h2>
                    {/*<ul style={{"list-style-type": "disc", "padding-left": "16px", "margin": "0px", "font-size": "13px"}}>
                  <li>
                  </li>
                </ul>*/}
                    <h1 style={{ marginTop: '20px', fontWeight: 'bold' }}>Culture</h1>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Culture can play an important role in how a victim engages in the interview process. If the victim
                      is from a distinct ethnic or social group, educate yourself about the culture.
                    </h2>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Cultural norms may shape what or how the victim will disclose critical information. Consider
                      connecting with social service providers in your area with expertise serving this population.
                    </h2>
                  </div>
                }
              />
            }
          />

          {/*<QuestionBox title={<h1>Tip 7: Educate yourself about the culture</h1>} html={(
            <BlueBox blueBoxContainer={blueBoxContainer} blueBox={blueBox} html={(
              <div>
                <h1 style={{fontWeight:"bold"}}>Culture can play an important role in how a victim engages in the interview process.</h1>
                <h2 style={{fontWeight:"normal"}}>If the victim is from a distinct ethnic or social group, educate yourself about the culture.</h2>
                <h2 style={{fontWeight:"normal"}}>Cultural norms may shape what or how the victim will disclose critical information. Consider connecting with social service providers with expertise serving this population.</h2>
              </div>
            )} />
          )} /> */}

          <div
            style={{
              padding: '30px 30px 10px 30px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'right',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <a href="/assess">
                <button class="button1" style={{ float: 'none', margin: '0' }}>
                  Assess
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
