import React from 'react'
import { withSiteData, Head } from 'react-static'
import CONST from '../constants';

import MaidSafLogo from '../assets/images/maidSafe_logo.svg';

// Contact
class Contact extends React.Component {
  render() {
    return (
      <section className="contact terms">
      <Head>
        <title>{CONST.meta.about.title}</title>
        <meta name="description" content={CONST.meta.about.desc} />
      </Head>
        <div className="contact-b terms-b">
          <div className="contact-bnr header-adjust">
            <div className="contact-bnr-b terms-h">
              <div className="maidsafe-logo"><img src={MaidSafLogo} alt="MAIDSAFE logo" /></div>
              <p className="bnr-para">The company that originally envisaged the SAFE Network, MaidSafe are driven by one overriding goal: to provide privacy, security and freedom for everyone on the planet.</p>
            </div>
          </div>
          <div className="contact-cntx terms-base">
            <div className="contact-cntx-b terms-base-para">
              <div className="contact-cntx-para">
              <p className="para-text">In 2006, MaidSafe began work on a decentralised internet that is private, secure and free for everybody. Since those early days, the team, led by founder David Irvine, has been focused solely on building the SAFE Network to solve the problems of an increasingly centralised internet that is facing more issues with each day that passes.</p>

              <p className="para-text">MaidSafe are based in Ayr, Scotland but the team is distributed all across the globe. It has has drawn talents from many different cultures and countries, reflecting the users that they serve. Comprised of thinkers, inventors, tinkerers, PHD’s, engineers and designers, they are building software that is <a href="https://github.com/maidsafe">open source and free to use</a> and share in a single mission: a desire to provide security and privacy for everyone. </p>

              <p className="para-text">MaidSafe are guided and influenced by the SAFE Network Community who have helped to fund the work and guide its decisions through discussions across community-run platforms.</p>

              <p className="para-text">The SAFE Network is currently in Alpha Release. Upon full release, MaidSafe will be only one of many thousands of developers making a living by carrying out development on the Network as a result of the built-in incentivisation scheme.</p>

              <p className="para-text">To contact the team directly, visit the company website at <a href="https://maidsafe.net/contact">maidsafe.net</a> for further details.</p>
              </div>
              <div className="contact-cntx-link">
                <a href="https://maidsafe.net/" target="_blank">Contact MaidSafe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withSiteData(() => (
  <Contact />
));
