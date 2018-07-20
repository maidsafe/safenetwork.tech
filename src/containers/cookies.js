import React from 'react'
import { withSiteData, Head } from 'react-static'

import CONST from '../constants';

import Parser from 'html-react-parser';

class Container extends React.Component {
  render() {
    const { para, head, sno } = this.props;

    return (
      <div className="terms-base">
        {head ? (
          <div className="terms-base-title">
            <h3 className="head">{head}</h3>
            <span className="sno">{sno}</span>
          </div>
        ) : null}
        {
          para ? para.map((p, i) => {
            const text = typeof p === 'string' ? p : p.text;

            return (
              <div className="terms-base-para">
                {p.head ? (<h4 className="para-head">{p.head}</h4>) : null}
                {Parser(`<p key='terms-para-${head}-${i}' className="para-text ${!p.sno || p.head ? 'no-sno' : ''}">${text}</p>`)}
                {p.sno ? <span className="sno">{p.sno}</span> : null}
              </div>
            )
          }) : null
        }
      </div>
    )
  }
}
// Terms
class Cookies extends React.Component {
  render() {
    return (
      <section className="terms">
      <Head>
        <title>{CONST.meta.home.title}</title>
        <meta name="description" content={CONST.meta.home.desc} />
      </Head>
        <div className="terms-b header-adjust">
          <h1 className="terms-h bnr-head">No Cookie Policy</h1>
          <div className="terms-intro">
            <Container
              para={[
                '<a href="https://maidsafe.net">MaidSafe.net</a> Limited understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website so with that in mind, we don’t use cookies on safenetwork.tech.'
              ]}
            />
            <Container
              para={[
                'No session cookie; no persistent cookie; no HttpOnly cookie; no secure cookie; no Third-party cookies. Seriously… NO COOKIES!'
              ]}
            />
          </div>
          />
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <Cookies />
));
