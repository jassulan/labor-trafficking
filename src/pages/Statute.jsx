import React, { Component } from 'react';

import NormalText from '../structures/normalText';
import BlueBox from '../structures/blueBox';

export default class Statute extends Component {
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #EAEAEA' }} className="App hidden-md hidden-lg">
          <p class="pageTitle">Massachusetts Law</p>
          <p class="Head" style={{ paddingBottom: '15px' }}>
            View the Massachusetts labor trafficking law
          </p>
        </div>

        <div style={{ borderBottom: '1px solid #EAEAEA' }} className="App hidden-xs hidden-sm">
          <div class="homeContainer" style={{ paddingBottom: '30px' }}>
            <p class="pageTitle">Massachusetts Law</p>
            <p class="Head" style={{ paddingBottom: '15px' }}>
              View the Massachusetts labor trafficking law
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', paddingTop: '20px' }}>
          <NormalText
            html={
              <div>
                <h2 style={{ fontWeight: 'normal' }}>
                  The Massachusetts anti-trafficking statute was enacted in 2012, and the law is still evolving. For
                  those reasons, we often look for guidance from federal definitions and federal case law.
                </h2>
              </div>
            }
          />
          <div class="massTitle">
            <p>Massachusetts Law</p>
          </div>
          <BlueBox
            blueBox={'massBlueBox immigrationUl'}
            html={
              <div>
                <h2 style={{ textAlign: 'center' }}>Crime of Trafficking in Persons for Forced Services</h2>
                <h2 style={{ textAlign: 'center' }}>M.G.L. ch. 265, § 51</h2>
                <h2 style={{ fontWeight: 'normal' }}>
                  {' '}
                  Under Massachusetts law, the crime of labor trafficking is known as Trafficking in Persons for Forced
                  Services. This crime involves whoever knowingly:
                </h2>
                <br class="hidden-md hidden-lg" />
                <ul>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      subjects, or attempts to subject, another person to forced services, or recruits, entices,
                      harbors, transports, provides or obtains by any means, or attempts to recruit, entice, harbor,
                      transport, provide or obtain by any means, another person, intending or knowing that such person
                      will be subjected to forced services; or
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      benefits, financially or by receiving anything of value, as a result of a violation of the above
                    </h2>
                  </li>
                </ul>
                <hr />
                <h2 style={{ textAlign: 'center' }}>Definition of Forced Services</h2>
                <h2 style={{ textAlign: 'center' }}>M.G.L. ch. 265, § 49</h2>
                <h2 style={{ fontWeight: 'normal' }}>
                  If one or more of the six prongs listed below are met, the conduct may be categorized as Trafficking
                  in Persons for Forced Services.
                </h2>
                <br />
                <h2 style={{ fontWeight: 'normal' }}>
                  “Forced Services” is defined as services performed or provided by a person that are obtained or
                  maintained by another person who:
                </h2>
                <br class="hidden-md hidden-lg" />
                <ul>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>causes or threatens to cause serious harm to any person</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      physically restrains or threatens to physically restrain another person
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>abuses or threatens to abuse the law or legal process</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      knowingly destroys, conceals, removes, confiscates or possesses any actual or purported passport
                      or other immigration document, or any other actual or purported government identification
                      document, of another person
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>engages in extortion under Massachusetts law</h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>causes or threatens to cause financial harm to any person</h2>
                  </li>
                </ul>
                <br />
                <h2 style={{ fontWeight: 'normal' }}>
                  “Services” are any act performed by a person under the supervision of or for the benefit of another
                  including, but not limited to, commercial sexual activity and sexually explicit performances.
                </h2>
                <hr />
                <h2 style={{ textAlign: 'center' }}>Overlap with Other Crimes</h2>
                <h2 style={{ fontWeight: 'normal' }}>
                  Labor trafficking may overlap with other crimes, such as sex trafficking, sexual assault, wage theft,
                  and other crimes. An investigator should be keep in mind that other violations of law may surface.
                </h2>
              </div>
            }
          />
          <div class="massTitle">
            <p>Criminal Penalties</p>
          </div>
          <BlueBox
            blueBox={'massBlueBox immigrationUl'}
            html={
              <div>
                <ul>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      The crime of Trafficking in Persons for Forced Services shall be punished by imprisonment in the
                      state prison for not less than 5 years but not more than 20 years and by a fine of not more than
                      $25,000. M.G.L. ch. 265, § 51(a).
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      Whoever commits the crime of trafficking of persons for forced services upon a person under 18
                      years of age shall be punished by imprisonment in the state prison for life or for any term of
                      years, but not less than 5 years. M.G.L. ch. 265, § 51(b).
                    </h2>
                  </li>
                  <li>
                    <h2 style={{ fontWeight: 'normal' }}>
                      A business entity that commits trafficking of persons for forced labor services shall be punished
                      by a fine of not more than $1,000,000.” M.G.L. ch. 265, § 51(c).
                    </h2>
                  </li>
                </ul>
              </div>
            }
          />
          <div class="massTitle">
            <p>Federal Criminal Statutes</p>
          </div>
          <BlueBox
            blueBox={'massBlueBox'}
            html={
              <div>
                <h2 style={{ fontWeight: 'normal' }}>
                  There are also federal criminal statutes that address labor trafficking crimes, such as forced labor
                  and involuntary servitude.{' '}
                  <a
                    target="_blank"
                    href="https://www.justice.gov/crt/human-trafficking-prosecution-unit-htpu"
                    style={{
                      fontWeight: 'normal',
                      textDecoration: 'underline',
                      color: '#11416D',
                    }}
                  >
                    Click here to read more about the federal crimes of labor trafficking
                  </a>
                  .
                </h2>
                <br />
                <h2 style={{ fontWeight: 'normal' }}>
                  Violations under federal law must be referred to federal authorities.
                </h2>
                <br />
                <h2 style={{ fontWeight: 'normal' }}>
                  To report to federal law enforcement, please contact the National Human Trafficking Resource Center
                  Hotline at <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>1-888-373-7888</span>,
                  which will send the information to federal law enforcement within a given jurisdiction.
                </h2>
                <br />
                <h2 style={{ fontWeight: 'normal' }}>
                  Victims also may have additional rights to criminal restitution, civil remedies, and government
                  benefits under federal law. Please refer victims to an attorney as soon as possible to explore their
                  rights.
                </h2>
              </div>
            }
          />
          <br /> <br />
        </div>
      </div>
    );
  }
}
