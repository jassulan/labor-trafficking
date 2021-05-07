import React, { Component } from 'react';

import YellowBox from '../../structures/yellowBox';
import BlueBox from '../../structures/blueBox';
import NormalText from '../../structures/normalText';
import QuestionBox from '../../structures/questionBox';

export default class Resources extends Component {
  state = {
    resourcesPage: 0,
  };

  handleResourcesClick(id) {
    this.setState({ resourcesPage: id });
  }

  render() {
    let blueBoxContainer = 'prepareBlueBoxContainer blueBoxLeft';
    let blueBoxContainerOrganizations = 'prepareBlueBoxContainer';
    let blueBox = 'prepareBlueBox';
    let blueBoxOrganizations = 'immigrationUl prepareBlueBox';
    let qClass = 'immigrationQ';

    const { resourcesPage } = this.state;

    return (
      <div>
        <div className="App hidden-md hidden-lg">
          <p className="pageTitle">Resources</p>
          <p className="Head" style={{ paddingBottom: '15px' }}>
            Victim services
          </p>
        </div>
        <div style={{ borderBottom: '2px solid #EAEAEA' }} className="App hidden-xs hidden-sm">
          <div className="homeContainer" style={{ paddingBottom: '30px' }}>
            <p className="pageTitle">Resources</p>
            <p className="Head" style={{ paddingBottom: '15px' }}>
              Victim services
            </p>
          </div>
        </div>
        <div className="resourcesDiv">
          <div className="menu resourcesMenu">
            <div
              className={`lis new-lis resources-lis ${resourcesPage === 0 && 'resources-lis-active'}`}
              onClick={() => {
                this.handleResourcesClick(0);
              }}
            >
              Emergency
            </div>
            <div
              className={`lis new-lis resources-lis ${resourcesPage === 1 && 'resources-lis-active'}`}
              onClick={() => {
                this.handleResourcesClick(1);
              }}
            >
              Safety
            </div>
            <div
              className={`lis new-lis resources-lis ${resourcesPage === 2 && 'resources-lis-active'}`}
              onClick={() => {
                this.handleResourcesClick(2);
              }}
            >
              Immigration
            </div>
            <div
              className={`lis new-lis resources-lis ${resourcesPage === 3 && 'resources-lis-active'}`}
              onClick={() => {
                this.handleResourcesClick(3);
              }}
            >
              Legal
            </div>
          </div>
        </div>
        <div className="resourcesContent">
          {(() => {
            if (this.state.resourcesPage == 0)
              return (
                <div
                  name="Emergency"
                  style={{
                    display: this.state.resourcesPage == 0 ? 'block' : 'none',
                  }}
                >
                  <NormalText
                    html={
                      <div>
                        <h1>Emergency Victim Services</h1>
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
                        <h2 style={{ fontWeight: 'normal' }}>
                          The hotline is open 24 hours a day, 7 days a week and has resources available in more than 200
                          languages.
                        </h2>
                        <h2 style={{ fontWeight: 'normal' }}>
                          For resources available in your geographic area to assist labor trafficking victims, please
                          contact the National Human Trafficking Resource Center (NHTRC) Hotline. NHTRC connects victims
                          and survivors of human trafficking with support and services.
                        </h2>
                      </div>
                    }
                  />
                  <div className="hidden-md hidden-lg">
                    <BlueBox
                      html={
                        <div>
                          <h1 style={{ fontWeight: 'bold' }}>Emergency Shelter</h1>
                          <h2 style={{ fontWeight: 'normal' }}>
                            Contact the National Human Trafficking Resource Center Hotline for emergency shelter options
                            at <span style={{ fontWeight: 'bold' }}>1-888-373-7880</span>.
                          </h2>
                          <br />
                          {/*<h2 style={{fontWeight:"bold"}}>Trafficking-specific shelter options:</h2>
                        <h2 style={{fontWeight:"normal"}}>Listed below are organizations that place priority on housing for survivors of human trafficking:</h2>
                        <ul>
                          <li>
                            <h2 style={{fontWeight:"normal"}}> Amirah (North Shore, sex trafficking): <span style={{fontWeight:"bold"}}>(781) 462-1758</span></h2>
                          </li>
                          <li>
                            <h2 style={{fontWeight:"normal"}}> Bhakita House (Greater Boston, labor and sex trafficking): <span style={{fontWeight:"bold"}}>(781) 321-0499</span></h2>
                          </li>
                          <li>
                            <h2 style={{fontWeight:"normal"}}> EVA Center (Greater Boston, sex trafficking): <span style={{fontWeight:"bold"}}>(617) 799-2133</span></h2>
                          </li>
                          <li>
                            <h2 style={{fontWeight:"normal"}}> RIA House (Central Massachusetts, sex trafficking): <span style={{fontWeight:"bold"}}>info@riahouse.org </span></h2>
                          </li>
                        </ul>
                        <br />*/}
                          <h2 style={{ fontWeight: 'bold' }}>Domestic Violence Shelter:</h2>
                          <h2 style={{ fontWeight: 'normal' }}>
                            Some domestic violence shelters may house victims of labor trafficking. Click{' '}
                            <a target="_blank" href="https://www.mass.gov/service-details/domestic-violence-programs">
                              here
                            </a>{' '}
                            for a complete list of shelters in Massachusetts. To determine if a shelter space is
                            available, victims can contact the Safelink state-wide hotline at{' '}
                            <span style={{ fontWeight: 'bold' }}>877-785-2020</span> (toll-free),{' '}
                            <span style={{ fontWeight: 'bold' }}>877-521-2601</span> (TTY).
                          </h2>
                        </div>
                      }
                    />
                    <BlueBox
                      html={
                        <div>
                          <h1 style={{ fontWeight: 'bold' }}>Food</h1>
                          <h2 style={{ fontWeight: 'normal' }}>
                            Please click{' '}
                            <a target="_blank" href="https://www.foodpantries.org/st/massachusetts">
                              here
                            </a>{' '}
                            for information about food pantries in Massachusetts.
                          </h2>
                        </div>
                      }
                    />
                  </div>
                  <div className="hidden-xs hidden-sm">
                    <div className="massTitle">
                      <p>Emergency Shelter</p>
                    </div>
                    <NormalText
                      html={
                        <div>
                          <h2 style={{ fontWeight: 'normal' }}>
                            Contact the National Human Trafficking Resource Center Hotline for emergency shelter options
                            at <span style={{ fontWeight: 'bold' }}>1-888-373-7880</span>.
                          </h2>
                          <br />
                          {/*<h2 style={{fontWeight:"bold"}}>Trafficking-specific shelter options:</h2>
                        <h2 style={{fontWeight:"normal"}}>Listed below are organizations that place priority on housing for survivors of human trafficking:</h2>
                        <ul style={{"listStyleType" : "none"}}>
                          <li>
                            <h2 style={{fontWeight:"bold"}}> Amirah (North Shore, sex trafficking): <span style={{fontWeight:"bold"}}>(781) 462-1758</span></h2>
                          </li>
                          <li>
                            <h2 style={{fontWeight:"bold"}}> Bhakita House (Greater Boston, labor and sex trafficking): <span style={{fontWeight:"bold"}}>(781) 321-0499</span></h2>
                          </li>
                          <li>
                            <h2 style={{fontWeight:"bold"}}> EVA Center (Greater Boston, sex trafficking): <span style={{fontWeight:"bold"}}>(617) 799-2133</span></h2>
                          </li>
                          <li>
                            <h2 style={{fontWeight:"bold"}}> RIA House (Central Massachusetts, sex trafficking): <span style={{fontWeight:"bold"}}>info@riahouse.org </span></h2>
                          </li>
                        </ul>
                        <br /> */}
                          <h2 style={{ fontWeight: 'bold' }}>Domestic Violence Shelter:</h2>
                          <h2 style={{ fontWeight: 'normal' }}>
                            Some domestic violence shelters may house victims of labor trafficking. Click{' '}
                            <a target="_blank" href="https://www.mass.gov/service-details/domestic-violence-programs">
                              here
                            </a>{' '}
                            for a complete list of shelters in Massachusetts. To determine if a shelter space is
                            available, victims can contact the Safelink state-wide hotline at{' '}
                            <span style={{ fontWeight: 'bold' }}>877-785-2020</span> (toll-free),{' '}
                            <span style={{ fontWeight: 'bold' }}>877-521-2601</span> (TTY).
                          </h2>
                        </div>
                      }
                    />
                    <div className="massTitle">
                      <p>Food</p>
                    </div>
                    <NormalText
                      html={
                        <div>
                          <h2
                            style={{
                              fontWeight: 'normal',
                              textDecoration: 'underline',
                              color: '#11416D',
                            }}
                          >
                            <a target="_blank" href="https://www.foodpantries.org/st/massachusetts">
                              Please click here for information about food pantries in Massachusetts.
                            </a>
                          </h2>
                        </div>
                      }
                    />
                    <br /> <br />
                  </div>
                </div>
              );
          })()}
          {(() => {
            if (this.state.resourcesPage == 1)
              return (
                <div
                  name="Safety"
                  style={{
                    display: this.state.resourcesPage == 1 ? 'block' : 'none',
                  }}
                >
                  <NormalText
                    html={
                      <div>
                        <h1>Safety planning is essential.</h1>
                        <h2 style={{ fontWeight: 'normal' }}>
                          It is important to engage in trauma-informed safety planning with the victim to ensure that
                          the victim is safe throughout the investigation. At the earliest stage possible, it is
                          recommended that investigators get a victim advocate involved and make appropriate referrals
                          to victim services agencies that can assist with safety planning.
                        </h2>
                        <br className="hidden-xs hidden-sm" />
                        <h2 style={{ fontWeight: 'normal' }}>
                          In addition, it may be appropriate to ask additional questions to determine the level of risk.
                          This may involve asking any of the following questions:
                        </h2>
                      </div>
                    }
                  />
                  <YellowBox
                    html={
                      <div className="desktopSafety">
                        <h2 style={{ color: '#11416D' }}>Are you safe?</h2>
                        <h2 style={{ color: '#11416D' }}>What are you afraid will happen?</h2>
                        <h2 style={{ color: '#11416D' }}>Have you ever been threatened?</h2>
                        <h2 style={{ color: '#11416D' }}>Do you owe a debt to anyone?</h2>
                        <h2 style={{ color: '#11416D' }}>Are you afraid of deportation?</h2>
                        <h2 style={{ color: '#11416D' }}>
                          What do you think would happen if the perpetrator knew that you had spoken with us?
                        </h2>
                        <h2 style={{ color: '#11416D' }}>Do you feel like you need to work? If so, why?</h2>
                        <h2 style={{ color: '#11416D' }}>What would happen if you did not work?</h2>
                      </div>
                    }
                  />
                  <NormalText
                    html={
                      <div>
                        <h2 style={{ fontWeight: 'normal' }}>
                          Victims should play a primary role in safety planning, and safety plans must take into
                          consideration the victim’s unique circumstances, past trauma history, immigration status,
                          mental health needs, potential need to generate income, and educational needs. Plans must be
                          made on a case-by-case basis tailored to the victim’s needs. In particular, many victims are
                          exploited because they need to generate income to assist their family. It is essential for
                          investigators to address the victim’s concerns about financially supporting family members.
                          Otherwise, the victim may remain at risk to future victimization.
                        </h2>
                      </div>
                    }
                  />
                  <br />
                  <br />
                </div>
              );
          })()}
          {(() => {
            if (this.state.resourcesPage == 2)
              return (
                <div
                  name="Immigration"
                  style={{
                    display: this.state.resourcesPage == 2 ? 'block' : 'none',
                  }}
                >
                  <NormalText
                    html={
                      <div>
                        <h1>Immigration Needs for Victims</h1>
                        <h2 style={{ fontWeight: 'normal' }}>
                          In cases involving noncitizen victims, refer the victim immediately to an experienced
                          immigration attorney to screen for immigration relief and any time-sensitive deadlines.
                          Immigrant victims may be eligible for special forms of immigration relief, such as a T or U
                          visa, based on their status as a victim of human trafficking.
                        </h2>
                      </div>
                    }
                  />
                  <br />
                  <QuestionBox
                    qClass={qClass}
                    title={<h1>Specialized Legal Services for Trafficking Victims</h1>}
                    html={
                      <div>
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBox}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>Ascentria Care Alliance</h1>
                              <h2 style={{ fontWeight: 'normal' }}>Worcester, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(774) 243-3041</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Emergency Cell: <span style={{ textDecoration: 'underline' }}>(774) 437-3237</span>
                              </h2>
                              <h2 style={{ fontWeight: 'bold' }}>Geographic Limitations:</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Can accept cases involving Central Massachusetts residents under 187.5% of the poverty
                                guidelines.
                              </h2>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBox}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>
                                Boston University School of Law Immigrants’ Rights and Human Trafficking Program
                              </h1>
                              <h2 style={{ fontWeight: 'normal' }}>Boston, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(617) 353-2807</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Email: <span style={{ textDecoration: 'underline' }}>Jadahl@bu.edu</span>
                              </h2>
                              <h2 style={{ fontWeight: 'bold' }}>Geographic Limitations:</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Can accept cases involving Massachusetts residents under 187.5% of the poverty
                                guidelines.
                              </h2>
                            </div>
                          }
                        />
                      </div>
                    }
                  />
                  <QuestionBox
                    qClass={qClass}
                    title={<h1>General Immigration Legal Services</h1>}
                    html={
                      <div>
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>
                                Catholic Charities Refugee and Immigration Services
                              </h1>
                              <h2 style={{ fontWeight: 'normal' }}>Boston, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(617) 464-8100</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Fax: <span style={{ textDecoration: 'underline' }}>(617) 464-8150</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Legal Clinic for advice, referral and forms assistance.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Family reunification visas.</h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Immigrant victims of domestic violence and U Visas.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Special Immigrant Juveniles.</h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Immigrant victims of human trafficking.</h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Nominal fees charged for representation.</h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Representation dependent upon income.</h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>Centralwest Justice Center</h1>
                              <h2 style={{ fontWeight: 'normal' }}>Worcester, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(508) 752-3718</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Fax: <span style={{ textDecoration: 'underline' }}>(508) 752-5918</span>
                              </h2>
                              <br />
                              <h2 style={{ fontWeight: 'normal' }}>Springfield, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(413) 781-7814</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Fax: <span style={{ textDecoration: 'underline' }}>(413) 746-3221</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Free representation to noncitizens seeking humanitarian immigration relief,
                                    including asylum, relief under the Violence Against Women Act, Special Immigrant
                                    Juvenile Status, U visas for crime victims, and T visas for trafficking victims.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Services available only to low-income residents of Central and Western Massachusetts
                                    (Berkshire, Franklin, Hampden, Hampshire, and Worcester Counties).
                                  </h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>De Novo</h1>
                              <h2 style={{ fontWeight: 'normal' }}>Cambridge, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(617) 661-1010</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Fax: <span style={{ textDecoration: 'underline' }}>(617) 661-1011</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Represents noncitizens in asylum proceedings and victims of domestic violence
                                    seeking lawful permanent residence.
                                  </h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>Greater Boston Legal Services</h1>
                              <h2 style={{ fontWeight: 'normal' }}>Boston, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(617) 371-1234</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Represents noncitizens in Asylum proceedings.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Representation dependent upon noncitizens meeting income guidelines.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Walk in services 9:30 am - 3 pm (Mon. - Thurs).
                                  </h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>Kids in Need of Defense (KIND)</h1>
                              <h2 style={{ fontWeight: 'normal' }}>Boston, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(617) 207-4138</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Serves victims under age 18 only</h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>
                                Political Asylum/Immigration Representation Project (PAIR)
                              </h1>
                              <h2 style={{ fontWeight: 'normal' }}>Boston, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(617) 742-9296</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Fax: <span style={{ textDecoration: 'underline' }}>(617) 742-9385</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>Represents asylum applicants.</h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Represents detained persons on a limited basis.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Conducts Know Your Rights presentation for persons detained in the Suffolk County
                                    House of Corrections, the Bristol County Jail & House of Corrections, and Plymouth
                                    County Correctional Facility.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Conducts phone intake for detainees and families of detainees from 1-3 pm, M-Th.
                                    Clients must meet low-income guidelines for representation.
                                  </h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                        <BlueBox
                          blueBoxContainer={blueBoxContainerOrganizations}
                          blueBox={blueBoxOrganizations}
                          html={
                            <div>
                              <h1 style={{ fontWeight: 'bold' }}>
                                University of Massachusetts School of Law Dartmouth Immigration Law Clinic
                              </h1>
                              <h2 style={{ fontWeight: 'normal' }}>Dartmouth, MA</h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Tel.: <span style={{ textDecoration: 'underline' }}>(508) 985-1174</span>
                              </h2>
                              <h2 style={{ fontWeight: 'normal' }}>
                                Fax: <span style={{ textDecoration: 'underline' }}>(508) 985-1136</span>
                              </h2>
                              <ul>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Eligibility is based on income. Interpreters provided upon request. Inquiries are
                                    accepted by telephone or mail.
                                  </h2>
                                </li>
                                <li>
                                  <h2 style={{ fontWeight: 'normal' }}>
                                    Limited representation is available during May to August.
                                  </h2>
                                </li>
                              </ul>
                            </div>
                          }
                        />
                      </div>
                    }
                  />

                  <br />
                  <div className="massTitle hidden-xs hidden-sm">
                    <p>Immigration Protection for Immigrant Victims of Human Trafficking</p>
                  </div>
                  <NormalText
                    html={
                      <div>
                        <h1 className="hidden-md hidden-lg">
                          Immigration Protection for Immigrant Victims of Human Trafficking
                        </h1>
                        <h2 style={{ fontWeight: 'normal' }}>
                          Undocumented victims are especially vulnerable to human trafficking. Certain immigration
                          options are available to victims that may allow them to apply for work authorization and
                          permission to remain in the United States. It is essential that victims consult with an
                          experienced immigration attorney about available options and understand the risks of pursuing
                          immigration relief. Below is a list of potential immigration remedies commonly available to
                          victims of crime. This list is not exhaustive, and it is important that every victim be
                          screened individually by an experienced immigration attorney for eligibility.
                        </h2>
                      </div>
                    }
                  />
                  <br />
                  <QuestionBox
                    qClass={qClass}
                    title={<h1>T Nonimmigrant Status (“T visa”)</h1>}
                    html={
                      <BlueBox
                        blueBoxContainer={blueBoxContainer}
                        blueBox={blueBox}
                        html={
                          <div>
                            <h2 style={{ fontWeight: 'bold' }}>What is T nonimmigrant status or a T visa? </h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              T nonimmigrant status is a form of immigration status for victims of severe forms of
                              trafficking in persons under federal law. T nonimmigrant status provides the victim with
                              immigration status for four years, ability to work legally, and eligibility to apply for
                              certain derivative family members and permanent residency. In addition, victims may be
                              able to access public benefits, including refugee cash assistance and food stamps. Please
                              note that victims are not eligible for employment authorization until the application is
                              approved.
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>Who is eligible?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              This benefit is only available to victims who meet the federal definition of a victim of a
                              severe form of human trafficking, which is defined as:
                            </h2>
                            <ul>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Sex trafficking in which a commercial sex act is induced by force, fraud, or coercion,
                                  or in which the person induced to perform such act has not attained 18 years of age;
                                  or
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Labor or services, through the use of force, fraud, or coercion for the purpose of
                                  subjection to involuntary servitude, peonage, debt bondage, or slavery.
                                </h2>
                              </li>
                            </ul>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>The victim must also show that he or she:</h2>
                            <ul>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Is a victim of a severe form of human trafficking;
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Is physically present in the United States on account of trafficking;
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Has complied with any reasonable request by federal, state, or local law enforcement
                                  agency to assist in the investigation or prosecution of such trafficking (unless
                                  unable to cooperate due to psychological trauma or the victim is under 18 years old);
                                  and
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Would suffer extreme hardship involving unusual and severe harm upon removal (i.e.,
                                  deportation).
                                </h2>
                              </li>
                            </ul>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>What is T visa certification?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              To apply for T nonimmigrant status, U.S. Citizenship and Immigration Services asks for the
                              victim to submit a certification form from a qualifying government agency confirming that
                              the applicant was a victim of a severe form of human trafficking and responded to a
                              reasonable request for assistance from law enforcement. The certification form is known as
                              Form I-914, Supplement B, Declaration of Law Enforcement Officer for Victim of Trafficking
                              in Persons. The form is available online{' '}
                              <span
                                style={{
                                  textDecoration: 'underline',
                                  color: '#11416D',
                                }}
                              >
                                <a target="_blank" href="https://www.uscis.gov/i-914">
                                  here
                                </a>
                              </span>
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>What is the role of the investigator?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              Investigators can play an important role by completing the certification form (
                              <span
                                style={{
                                  textDecoration: 'underline',
                                  color: '#11416D',
                                }}
                              >
                                <a target="_blank" href="https://www.uscis.gov/i-914">
                                  Form I-914, Supplement B
                                </a>
                              </span>
                              ) to confirm the status of the victim and his or her role in the investigation. This
                              certification does not provide immigration status but assists the victim to prove to U.S.
                              Citizenship and Immigration Services that he or she meets the requirements to qualify for
                              T nonimmigrant status.
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>Who can complete the T visa certification?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              The certification form (
                              <span
                                style={{
                                  textDecoration: 'underline',
                                  color: '#11416D',
                                }}
                              >
                                <a target="_blank" href="https://www.uscis.gov/i-914">
                                  Form I-914, Supplement B
                                </a>
                              </span>
                              ) can be completed by any government agency that has responsibility for the detection,
                              investigation, and/or prosecution of severe forms of human trafficking in Persons.
                            </h2>
                          </div>
                        }
                      />
                    }
                  />
                  <QuestionBox
                    qClass={qClass}
                    title={<h1>U Nonimmigrant Status (“U visa”)</h1>}
                    html={
                      <BlueBox
                        blueBoxContainer={blueBoxContainer}
                        blueBox={blueBox}
                        html={
                          <div>
                            <h2 style={{ fontWeight: 'bold' }}>What is U nonimmigrant status or a U visa? </h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              U nonimmigrant status is a form of immigration status for victims of violent crime,
                              including victims of human trafficking under state or federal law, among other crimes. U
                              nonimmigrant status provides the victim with immigration status for four years and
                              eligibility to apply for certain derivative family members in addition to a pathway to
                              permanent residency. Please note that victims are not eligible for employment
                              authorization until the application is approved, and current processing times are very
                              long.
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>Who is eligible?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              A victim may be eligible for U nonimmigrant status if he or she:
                            </h2>
                            <ul>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Has suffered substantial physical or mental abuse as a result of having been a victim
                                  of a qualifying crime, including human trafficking, involuntary servitude, peonage,
                                  and slave trade, or substantially similar criminal activity;
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Possesses information about the criminal activity;
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  Has been helpful, is being helpful, or is likely to be helpful to a Federal, State, or
                                  local law enforcement official, to a Federal, State, or local prosecutor, to a Federal
                                  or State judge, to United States Citizenship and Immigration Services, or to other
                                  Federal, State, or local authorities investigating or prosecuting the criminal
                                  activity; and
                                </h2>
                              </li>
                              <li>
                                <h2 style={{ fontWeight: 'normal' }}>
                                  The criminal activity violated the laws of the United States or occurred in the United
                                  States (including in Indian country and military institutions) or the territories and
                                  possessions of the United States.
                                </h2>
                              </li>
                            </ul>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>What is U visa certification?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              To qualify for a U visa, a victim must obtain a U Nonimmigrant Status Certification (Form
                              I-918, Supplement B) from a qualifying government agency, confirming that he or she was a
                              victim and was, is, or will be helpful in the investigation. The certification form is
                              known as Form I-918, Supplement B, U Nonimmigrant Status Certification. The form is
                              available online{' '}
                              <span
                                style={{
                                  textDecoration: 'underline',
                                  color: '#11416D',
                                }}
                              >
                                <a target="_blank" href="https://www.uscis.gov/i-918">
                                  here
                                </a>
                              </span>
                              .
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>What is the role of the investigator?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              Investigators can play an important role to assist the victim to obtain immigration status
                              by completing a U Nonimmigant Status Certification (
                              <span
                                style={{
                                  textDecoration: 'underline',
                                  color: '#11416D',
                                }}
                              >
                                <a target="_blank" href="https://www.uscis.gov/i-918">
                                  Form I-918, Supplement B
                                </a>
                              </span>
                              ), confirming the status of the victim and his or her role in the investigation. Such a
                              certification does not provide immigration status but assists the victim to prove to U.S.
                              Citizenship and Immigration Services that he or she meets the requirements to qualify for
                              immigration status.
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>Who can complete the U visa certification?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              A federal, state, local law enforcement agency, prosecutor, judge, or other authority that
                              has the responsibility for the investigation or prosecution of a qualifying crime or
                              criminal activity is eligible to sign a U Nonimmigrant Status Certification (Form I-918,
                              Supplement B). This includes agencies with criminal investigative jurisdiction in their
                              respective areas of expertise, including but not limited to child and adult protective
                              services, the Equal Employment Opportunity Commission, and Federal and State Departments
                              of Labor.
                            </h2>
                          </div>
                        }
                      />
                    }
                  />
                  <QuestionBox
                    qClass={qClass}
                    title={<h1>Continued Presence</h1>}
                    html={
                      <BlueBox
                        blueBoxContainer={blueBoxContainer}
                        blueBox={blueBox}
                        html={
                          <div>
                            <h2 style={{ fontWeight: 'bold' }}>What is Continued Presence?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              Continued Presence is a short-term form of immigration relief available to individuals
                              identified as victims of human trafficking in a potential criminal investigation. The
                              application for Continued Presence must be submitted by federal law enforcement. However,
                              local and state investigators can play an important role by coordinating with a federal
                              law enforcement agency to submit an application.
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'normal' }}>
                              This is generally the fastest way to ensure that the victim has access to employment
                              authorization and access to important government benefits. This benefit provides access to
                              work authorization for two years, and it is renewable subject to law enforcement approval.
                              Continued Presence also allows the victim to qualify for certain public benefits.
                            </h2>
                            <br />
                            <h2 style={{ fontWeight: 'bold' }}>What is the role of the investigator?</h2>
                            <h2 style={{ fontWeight: 'normal' }}>
                              To assist a victim to apply for Continued Presence, contact a federal law enforcement
                              agency with the authority to submit an application.
                            </h2>
                          </div>
                        }
                      />
                    }
                  />
                  <QuestionBox
                    qClass={qClass}
                    title={<h1>Other Options to Consider</h1>}
                    html={
                      <BlueBox
                        blueBoxContainer={blueBoxContainer}
                        blueBox={blueBox}
                        html={
                          <div>
                            <h2 style={{ fontWeight: 'normal' }}>
                              There are various other immigration options for which victims may qualify, including
                              asylum, relief under the Violence Against Women Act, and Special Immigrant Juvenile
                              Status, among others. For this reason, it is strongly recommended that a victim consult
                              with an experienced immigration attorney as early as possible in the process.
                            </h2>
                          </div>
                        }
                      />
                    }
                  />
                  <br />
                  {/*<NormalText html={(
                    <div>
                      <h2 style={{fontWeight:"bold"}}>These organizations provide specialized legal services to trafficking survivors:</h2>
                    </div>
                  )} /> */}

                  {/* <NormalText html={(
                    <div>
                      <h2 style={{fontWeight:"bold"}}>The following organizations provide general immigration legal services to income-eligible Massachusetts residents:</h2>
                    </div>
                  )} /> */}
                  <br />
                  <br />
                </div>
              );
          })()}
          {(() => {
            if (this.state.resourcesPage == 3)
              return (
                <div
                  name="Legal"
                  style={{
                    display: this.state.resourcesPage == 3 ? 'block' : 'none',
                  }}
                >
                  <NormalText
                    html={
                      <div>
                        <h1>Victim Rights Legal Services</h1>
                        <h2 style={{ fontWeight: 'normal' }}>
                          The following organizations provide specialized legal services to victims:
                        </h2>
                      </div>
                    }
                  />
                  <BlueBox
                    html={
                      <div>
                        <h1 style={{ fontWeight: 'normal' }}>Boston, MA</h1>
                        <h1>
                          <a
                            target="_blank"
                            href="https://www.bu.edu/law/current-students/jd-student-resources/experiential-learning/clinics/immigrants-rights-human-trafficking-clinic/"
                            style={{
                              fontWeight: 'bold',
                              color: '#11416D',
                              textDecoration: 'underline',
                            }}
                          >
                            Boston University School of Law Immigrants’ Rights and Human Trafficking Program
                          </a>
                        </h1>
                        <h2>
                          Tel.: <span style={{ textDecoration: 'underline' }}>(617) 353-2807</span>
                        </h2>
                        <h2>
                          Email: <span style={{ textDecoration: 'underline' }}>Jadahl@bu.edu</span>
                        </h2>
                      </div>
                    }
                  />
                  <BlueBox
                    html={
                      <div>
                        <h1 style={{ fontWeight: 'normal' }}>State-wide</h1>
                        <h1>
                          <a
                            target="_blank"
                            href="https://massclavc.org/"
                            style={{
                              fontWeight: 'bold',
                              color: '#11416D',
                              textDecoration: 'underline',
                            }}
                          >
                            Civil Legal Aid for Victims of Crime
                          </a>
                        </h1>
                        <h2>
                          Tel.: <span style={{ textDecoration: 'underline' }}>(617) 367-8544</span>
                        </h2>
                      </div>
                    }
                  />
                  <BlueBox
                    html={
                      <div>
                        <h1 style={{ fontWeight: 'normal' }}>Boston, MA</h1>
                        <h1>
                          <a
                            target="_blank"
                            href="https://www.victimrights.org/"
                            style={{
                              fontWeight: 'bold',
                              color: '#11416D',
                              textDecoration: 'underline',
                            }}
                          >
                            Victim Rights Law Center
                          </a>
                        </h1>
                        <h2>
                          Tel.: <span style={{ textDecoration: 'underline' }}>(617) 399-6720</span>
                        </h2>
                        <h2 style={{ fontWeight: 'normal' }}>
                          Limitations: Can only accept cases involving victims of sexual assault.
                        </h2>
                      </div>
                    }
                  />
                  <div className="massTitle hidden-xs hidden-sm">
                    <p>Victim Compensation</p>
                  </div>
                  <NormalText
                    html={
                      <div>
                        <h2 className="hidden-md hidden-lg">Victim Compensation:</h2>
                        <h2 style={{ fontWeight: 'normal' }}>
                          Victims of labor trafficking may also be eligible for victim compensation. To apply for
                          compensation, the victim should complete the application{' '}
                          <a
                            target="_blank"
                            href="https://www.mass.gov/files/documents/2018/11/13/victim-comp-app.pdf"
                            style={{
                              fontWeight: 'bold',
                              color: '#11416D',
                              textDecoration: 'underline',
                            }}
                          >
                            here
                          </a>{' '}
                          or contact the{' '}
                          <a
                            target="_blank"
                            href="https://www.mass.gov/massachusetts-victims-of-violent-crime-compensation"
                            style={{
                              fontWeight: 'bold',
                              color: '#11416D',
                              textDecoration: 'underline',
                            }}
                          >
                            Massachusetts Office of Victim Assistance
                          </a>{' '}
                          at 844-878-MOVA (6682).
                        </h2>
                      </div>
                    }
                  />
                  <br />
                  <br />
                </div>
              );
          })()}
        </div>
      </div>
    );
  }
}
