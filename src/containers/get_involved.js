import React from 'react'
import { withSiteData, Head } from 'react-static'

// import YouTubeWarn from './partials/youtube_warn';
import CustomVideo from './partials/custom_video';
import FAQItem from './partials/faq_item';
import PageEnd from './partials/page_end';
import CONST from '../constants';
import faq from '../content/getInv_faq.json';
import { getAppLink } from '../utils';

class Banner extends React.Component {
  render() {
    return (
      <div className="get-inv-bnr">
        <div className="get-inv-bnr-bg header-adjust"></div>
        <div className="get-inv-bnr-b">
          <h1 className="get-inv-cnt-h bnr-head">It’s the dawn of a new web. Be part of creating it.</h1>
          <p className="get-inv-cnt-para bnr-para">The SAFE Network is an Open Source and collaborative effort between developers and the community using it. You can get involved by testing, suggesting, coding, or promoting. Here’s how.</p>
        </div>
      </div>
    )
  }
}

class Community extends React.Component {
  render() {
    const browserLink = getAppLink('browser');
    return (
      <div className="get-inv-community get-inv-lay">
        <div className="get-inv-community-b get-inv-lay-b">
          <div className="get-inv-community-cntr1 get-inv-lay-cntr1 get-inv-cnt">
            <div className="get-inv-community-cntr1-b">
              <h2 className="get-inv-cnt-h1">Be part of the community</h2>
              <p className="get-inv-cnt-para1">The SAFE Network community is comprised of thousands of people from all over the world passionate about the unfettered access and sharing of data.</p>
              <p className="get-inv-cnt-para1"><a href={CONST.links.getInv.community.safenetwork}>Safenetforum.org</a> is the main discussion forum of this growing community and is a great place to help test new releases by the development teams, receive support, discuss the latest Internet trends and read the weekly dev updates. To meet others in person, take a look at the various <a href={CONST.links.getInv.community.meetup}>meetups</a> taking place around the world.</p>
              <a href={CONST.links.getInv.community.join} className="get-inv-cnt-lnk-btn red with-arrow">Join the Community</a>
            </div>
          </div>
          <div className="get-inv-community-cntr2 get-inv-lay-cntr2 get-inv-cnt">
            <div className="get-inv-community-cntr2-b">
              <h3 className="get-inv-cnt-h2">Get the SAFE Browser</h3>
              <p className="get-inv-cnt-para2">The SAFE Browser is the Network’s dedicated web browser. To access the network while it is in Alpha you'll need to have a forum account with <a href="https://safenetforum.org/t/trust-level-1-basic-user-requirements/15200">basic trust level</a> and get an <a href="https://invite.maidsafe.net">invite token</a>.  Then just download and start browsing.</p>
              <a href={browserLink} className="get-inv-cnt-lnk-btn blue">Download Now</a>
            </div>
          </div>
          <div className="get-inv-community-cntr3">
            <div className="get-inv-community-cntr3-para">Browse the Test Network using the SAFE Browser.</div>
          </div>
        </div>
      </div>
    );
  }
}

class TestNet extends React.Component {
  render() {
    return (
      <div className="get-inv-test-net get-inv-lay">
        <div className="get-inv-test-net-b get-inv-lay-b">
          <div className="get-inv-test-net-cntr1 get-inv-lay-cntr1 get-inv-cnt">
            <div className="get-inv-test-net-cntr1-b">
              <h2 className="get-inv-cnt-h1">Test the Network</h2>
              <p className="get-inv-cnt-para1">SAFE represents a step change in technology, and how we’ll all interact with the web and our own data. A leap as big as this requires continuous testing and feedback from the people who it is designed for—and that’s where you can help.</p>
              <p className="get-inv-cnt-para1">The network is currently in Alpha testing, meaning that it lacks some features, and will contain bugs that could make the network unstable. By running these earlier versions and providing feedback via the forum you will be not only helping to improve future releases, you will be helping to shape the new Internet.</p>
            </div>
          </div>
          <div className="get-inv-test-net-cntr2 get-inv-lay-cntr2 get-inv-cnt">
            <div className="get-inv-test-net-cntr2-b">
              <h3 className="get-inv-cnt-h2">Ready to use Apps or add Data?</h3>
              <p className="get-inv-cnt-para2">When you are ready to use Apps, or to try adding data to the Alpha network, you’ll use the browser’s built in Authenticator to create and manage your Safe Account.</p>
              <p className="get-inv-cnt-para2">Here’s a step-by-step guide to getting up and running.</p>
              <div className="get-inv-test-net-vid">
                {/* <div className="utube-warn-parent">
                  <YouTubeWarn name="testnet" location="getInvolved" />
                  <iframe src="https://www.youtube-nocookie.com/embed/ivwQVe12OAY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div> */}
                <CustomVideo links={CONST.videoLinks.safe_network}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Develop extends React.Component {
  render() {
    return (
      <div className="get-inv-develop get-inv-lay">
        <div className="get-inv-develop-b get-inv-lay-b">
          <div className="get-inv-develop-cntr1 get-inv-lay-cntr1 get-inv-cnt">
            <div className="get-inv-develop-cntr1-b">
              <h2 className="get-inv-cnt-h1">Start Developing</h2>
              <p className="get-inv-cnt-para1">The SAFE Network is a platform for creating decentralised applications. It is secure, privacy focussed, has a built-in revenue stream, and next to no infrastructure costs.</p>
              <p className="get-inv-cnt-para1">If you’re interested in developing apps you will find all the tools you need on our <a href={CONST.links.getInv.develop.devHub} target="_blank">DevHub</a>, such as key concepts, APIs and documentation.</p>
              <a href={CONST.links.getInv.develop.devHub} className="get-inv-cnt-lnk-btn red with-arrow">Visit the DevHub</a>
            </div>
          </div>
          <div className="get-inv-develop-cntr2 get-inv-lay-cntr2 get-inv-cnt">
            <div className="get-inv-develop-cntr2-b">
              <h3 className="get-inv-cnt-h2">Core Development</h3>
              <p className="get-inv-cnt-para2">You can also get involved by helping to maintain the Networks underlying open source libraries. As we reach beta launch it will be possible to be compensated in Safecoin for fixing bugs, optimising code and developing new features.</p>
            </div>
          </div>
          <div className="get-inv-develop-cntr3 get-inv-lay-cntr2 get-inv-cnt">
            <div className="get-inv-develop-cntr3-b">
              <h3 className="get-inv-cnt-h2">Join the Developer Community</h3>
              <p className="get-inv-cnt-para2">In addition to the developer hub, we also have a growing developer community. It’s a great way to get support and collaborate.</p>
              <a href={CONST.links.getInv.develop.devForum} className="get-inv-cnt-lnk-btn with-arrow underline yellow">Developer Forum</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class FAQ extends React.Component {
  constructor() {
    super();
    this.faqs = faq;
  }

  render() {
    return (
      <div className="get-inv-faq">
        <div className="get-inv-faq-b">
          <div className="get-inv-faq-h">
            <h2 className="get-inv-faq-title">Getting Started: Frequently Asked Questions</h2>
            <div className="get-inv-faq-h-opt"><button className="btn" onClick={() => {
              location.assign(CONST.links.getInv.faq.all);
            }}>See All FAQs</button></div>
          </div>
          <div className="faq-cntr">
            <div className="faq-cntr-b">
              {
                this.faqs.map((faq, i) => (
                  <FAQItem key={`faq-item-${i}`} data={faq} />
                ))
              }
            </div>
          </div>
          <div className="get-inv-faq-more"><a className="lnk-underline" href={CONST.links.getInv.faq.more}>More Getting Started FAQs</a></div>
        </div>
      </div>
    );
  }
}
class GetInvolved extends React.Component {
  render() {
    return (
      <section className="get-inv">
        <Head>
          <title>{CONST.meta.getInv.title}</title>
          <meta name="description" content={CONST.meta.getInv.desc} />
        </Head>
        <div className="get-inv-b">
          <Banner />
          <Community />
          <TestNet />
          <Develop />
          <FAQ />
          <PageEnd />
        </div>
      </section>
    )
  }
}

export default withSiteData(() => (
  <GetInvolved />
));
