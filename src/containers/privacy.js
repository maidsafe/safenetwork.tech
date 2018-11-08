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
          <div className={`terms-base-title ${!sno ? 'no-sno' : ''}`}>
            <h3 className="head">{head}</h3>
            {sno ? <span className="sno">{sno}</span> : null}
          </div>
        ) : null}
        {
          para ? para.map((p, i) => {
            if (p.type && p.type === 'list') {
              return (
                <div key={`terms-para-list-${i}`} className="terms-base-para">
                 {Parser(`<ul>${p.text}</ul>`)}
                </div>
              )
            }

            const text = typeof p === 'string' ? p : p.text;

            return (
              <div key={`terms-para-${i}`} className={`terms-base-para ${!p.sno || p.head ? 'no-sno' : ''}`}>
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
class Privacy extends React.Component {
  render() {
    return (
      <section className="terms">
        <Head>
          <title>{CONST.meta.home.title}</title>
          <meta name="description" content={CONST.meta.home.desc} />
        </Head>
        <div className="terms-b header-adjust">
          <h1 className="terms-h bnr-head">Privacy Policy</h1>
          <div className="terms-intro">
            <Container
              head="Data controller: MaidSafe.Net Limited"
              para={[
                'We take our duty to process your personal data very seriously. This policy explains how we collect, manage, use and protect your personal data.',
                'We may change this policy from time to time to reflect the latest view of what we do with your information. Please check back frequently to see if we have made any changes.'
              ]}
            />
            <Container
              head="What does this policy cover?"
              para={[
                'This privacy policy applies only to your use of our site. Our site may contain links to other websites. Please note that we have no control over how your data is collected, stored, or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.',
              ]}
            />
            <Container
              head="What is personal data?"
              para={[
                'Personal data means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data. In this case, it means personal data that you give to us via Our Site. This definition shall, where applicable, incorporate the definitions provided in the EU Regulation 2016/679 – the General Data Protection Regulation (“GDPR”).',
              ]}
            />
            <Container
              head="What information does the organisation collect?"
              para={[
                'We do not place cookies on your computer or device however, the organisation collects information about you as follows:',
                {
                  text: '<li>Your IP Address</li>',
                  type: 'list'
                },
                'During the Alpha phase of the SAFE Network development we record the currently active IP address of your login in order to avoid spamming attempts. The IP address is recorded only when the “Set Registered IP” or “Update Registered IP” buttons are pressed. The data will be stored on an external server (Digital Ocean) and will be deleted as soon as it is apparent that the information is no longer needed for the purpose for which it was retained.',
                {
                  text: '<li>Your email address</li>',
                  type: 'list'
                },
                'If you choose to subscribe to our email newsletter we collect your email address.',
                {
                  text: '<li>Voluntarily Submitted Information</li>',
                  type: 'list'
                },
                'In addition, we may collect and retain information you voluntarily submit to us by contacting us via email. It is up to you whether to submit information to us, and how much information to provide.',
              ]}
            />
            <Container
              head="Why does the organisation process personal data?"
              para={[
                'The organisation has a legitimate interest in processing personal data (current IP address) in order to ensure that the SAFE Network can be accessed, during the Alpha development phase without being left open to attack by malicious agents.',
                'Collecting IP addresses is a temporary measure but essential at this stage as it acts as a form of spam protection - preventing someone creating thousands of accounts and attacking the Network whilst it is in Alpha stage. The company will only collect this information if you with your consent press the button “Set Registered IP” or “Update Registered IP”.',
                'Collecting email addresses with your consent enables us to email you, and keep you up to date with all news related to the SAFE Network.'
              ]}
            />
            <Container
              head="Who has access to data?"
              para={[
                'Your information may be shared internally for the purposes of the development of the SAFE Network. This includes members of the Marketing, QA, Development and Payroll teams.',
                'When you consent for your IP address to be collected, this will be stored on an external server hosted by Digital Ocean with whom the QA and Development teams have access. More information on their privacy policy can be found here - <a href="https://www.digitalocean.com/legal/privacy-policy/">https://www.digitalocean.com/legal/privacy-policy/</a>',
                'To determine the global location for the crust dashboard the organisation uses the external geolocation service provider <a href="https://ipapi.co/">ipapi.co</a>. For more information see ipapi.co’s <a href="https://ipapi.co/privacy/">privacy policy</a>.',
                'When you consent for your email address to be collected, by  signing up for the newsletter, your email address will be stored on an external server hosted by <a href="https://mailchimp.com/">MailChimp</a> to which the MaidSafe Marketing team has access. Only your email address will be stored by MailChimp.',
                'If you wish to unsubscribe from the newsletter, MailChimp will immediately anonymise your personal data and we will permanently delete this remaining anonymised data each May and November.',
                'More information on their privacy policy can be found here - <a href="https://mailchimp.com/legal/privacy/">https://mailchimp.com/legal/privacy/</a>'
              ]}
            />

            <Container
              head="How does the organisation protect data?"
              para={[
                'The organisation has limited the amount of personal data it collects.',
                'The organisation has limited the number of people who have access to Digital Ocean and Mailchimp',
              ]}
            />

            <Container
              head="For how long does the organisation keep data?"
              para={[
                'IP addresses will be stored until the SAFE Network progresses to Beta Stage. This enables us to investigate any issues and trends that happen across our tests.',
                'Email addresses will be stored until you choose to unsubscribe from our newsletter.'
              ]}
            />
            <Container
              head="Your rights"
              para={[
                'As a data subject, you have a number of rights. You have:',
                {
                  type: 'list',
                  text: `<li>The right to be informed about Our collection and use of personal data;</li>
                    <li>The right of access to the personal data we hold about you;</li>
                    <li>The right to rectification if any personal data We hold about you is inaccurate or incomplete;</li>
                    <li>The right to be forgotten – i.e. the right to ask Us to delete any personal data We hold about you;</li>
                    <li>The right to restrict (i.e. prevent) the processing of your personal data;</li>
                    <li>The right to data portability (obtaining a copy of your personal data to re-use with another service or organisation);</li>
                    <li>The right to object to Us using your personal data for particular purposes; and</li>
                    <li>Rights with respect to automated decision making and profiling.</li>
                    `
                },
                'If you would like to exercise any of these rights, please contact <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>.',
                'If you believe that the organisation has not complied with your data protection rights, you can complain to the Information Commissioner.'
              ]}
            />
            <Container
              head="What if you do not provide personal data?"
              para={[
                'You are under no statutory or contractual obligation to provide your IP address, however, if you do not provide us with this information you may not be able to fully use or test our suite of products.',
                'You are under no statutory or contractual obligation to provide your email address, however, if you do not provide us with this information you will not be able to receive our newsletter.'
              ]}
            />
            <Container
              head="Automated decision-making"
              para={[
                'There is no automated decision making'
              ]}
            />
            <Container
              head="MaidSafe's Privacy Policy"
              para={[
                'To view MaidSafe’s privacy policy head over to the <a href="https://maidsafe.net/privacy">privacy page</a> on maidsafe.net.'
              ]}
            />
            <Container
              head="How do I make a complaint?"
              para={[
                'You have the right to make a complaint about anything regarding processing, storage, or retention of your data. We would hope to resolve any complaint internally and if you would like to lodge a complaint with us in the first instance please contact  <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>. However, you also have the right to lodge a complaint at any time to the Information Commissioner (ICO) in respect of our processing of your personal data. Information can be found at <a href="https://www.ico.org.uk">www.ico.org.uk</a>.'
              ]}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <Privacy />
));
