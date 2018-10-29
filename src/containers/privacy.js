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
                'Personal data means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data. In this case, it means personal data that you give to us via Our Site. This definition shall, where applicable, incorporate the definitions provided in the EU Regulation 2016/679 – the General Data Protection Regulation (“GDPR”); and',
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
                'During the Alpha phase of the SAFE Network development we record the currently active IP address of your login in order to avoid spamming attempts.  The IP address is recorded only when the “Set Registered IP” or “Update Registered IP” buttons are pressed. The data will be stored on an external server (<a href="https://www.digitalocean.com">Digital Ocean</a>).'
              ]}
            />
            <Container
              head="Why does the organisation process personal data?"
              para={[
                'The organisation has a legitimate interest in processing personal data (current IP address) in order to ensure that the SAFE Network can be accessed, during the Alpha development phase without being left open to attack by malicious agents.',
                'Collecting IP addresses is a temporary measure but essential at this stage as it acts as a form of spam protection - preventing someone creating thousands of accounts and attacking the Network whilst it is in Alpha stage. The company will only collect this information if you with your consent if you press the button “Set Registered IP” or “Update Registered IP”.'
              ]}
            />
            <Container
              head="Who has access to data?"
              para={[
                'Your information may be shared internally for the purposes of the development of the SAFE Network. This includes members of the QA, Development and payroll  teams.',
                'When you consent for your IP address to be collected, this will be stored on an external server hosted by Digital Ocean with whom the QA and Development teams have access'
              ]}
            />

            <Container
              head="How does the organisation protect data?"
              para={[
                'The organisation has limited the number of people who are required to have access to login to Digital Ocean.',
                'Digital Ocean also have Security measures in place such as:',
                {
                  head: 'Access Control',
                  text: 'Unauthorised persons shall be prevented from gaining physical access to premises, buildings or rooms, where data processing systems are located which process personal data. Exceptions may be granted for the purpose of auditing the facilities to third party auditors as long as they are supervised by DigitalOcean and do not get access to the personal data themselves.',
                },
                {
                  head: 'Systems Access Control',
                  text: 'Data processing systems must be prevented from being used without authorization',
                },
                {
                  head: 'Data Access Control',
                  text: 'Persons entitled to use a data processing system shall gain access only to the data to which they have a right of access, and personal data must not be read, copied, modified or removed without authorization in the course of the processing.',
                },
                {
                  head: 'Data Transmission Control',
                  text: 'Personal data must not be read, copied, modified or removed without authorization during transfer or storage and it shall be possible to establish to whom personal data was transferred',
                },
                {
                  head: 'Data entry Control',
                  text: 'DigitalOcean shall be able retrospectively to examine and establish whether and by whom personal data have been entered into data processing systems, modified or removed.',
                },
                {
                  head: 'Job Control',
                  text: 'Personal data being processed in the performance of a service for the DigitalOcean shall be processed solely in accordance with the services of agreement in place between the DigitalOcean and DigitalOcean and in accordance with the instructions of the DigitalOcean',
                },
                {
                  head: 'Availability Control',
                  text: 'Personal data shall be protected against disclosure, accidental or unauthorized destruction or loss.',
                },
                {
                  head: 'Organizational Requirements',
                  text: 'The internal organisation of DigitalOcean shall meet the specific requirements of data protection. In particular, DigitalOcean shall take technical and organizational measures to avoid the accidental mixing of personal data.',
                },
              ]}
            />

            <Container
              head="For how long does the organisation keep data?"
              para={[
                'The personal data will be stored until the SAFE Network progresses to Beta Stage',
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
                'You are under no statutory or contractual obligation to provide your IP address to the organisation. However, if you do not provide the information, you will be unable to download our software.'
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
                'You have the right to make a complaint about anything regarding processing, storage, retention of your data. We would hope to resolve any complaint internally and if you would like to lodge a complaint with us in the first instance please contact <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>. However, you also have the right to lodge a complaint at any time to the Information Commissioner (ICO) in respect of our processing of your personal data. Information can be found at <a href="https://www.ico.org.uk">www.ico.org.uk</a>.'
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
