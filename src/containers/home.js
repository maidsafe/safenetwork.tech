import React from 'react'
import { Head, withSiteData } from 'react-static'
import ClassNames from 'classnames';
//
import SubNav from './partials/sub_nav';
import PageEnd from './partials/page_end';

import { genSubNavScrollPos } from '../utils';
import CONST from '../constants';

class Container1 extends React.Component {
  render() {
    const { head, para } = this.props;

    return (
      <div className="home-cntr1">
        <div className="home-cntr1-b">
          {head ? (<h2 className="home-cntr1-h">{head}</h2>) : null}
          {
            para.length > 0 ? para.map((p, i) => (<p key={`cntr1-${head}-${i}`} className="home-cntr1-para">{p}</p>)) : null
          }
        </div>
      </div>
    );
  }
}

class Container2 extends React.Component {
  render() {
    const { head, para } = this.props;

    return (
      <div className="home-cntr2">
        <div className="home-cntr2-b">
          {head ? (<h2 className="home-cntr2-h">{head}</h2>) : null}
          {
            para && para.length > 0 ? para.map((p, i) => (<p key={`cntr2-${head}-${i}`} className="home-cntr2-para">{p}</p>)) : null
          }
        </div>
      </div>
    );
  }
}

// Introduction
class Intro extends React.Component {
  render() {
    return (
      <div className="home-intro">
        <div className="home-intro-b">
          <div className="home-intro-ctnt-1">
            <h1 className="home-intro-ctnt-1-h bnr-head">We’re Building the New Internet</h1>
            <p className="home-intro-ctnt-1-p bnr-para">
              <a href={CONST.links.home.intro.subNav.freedom}>Freedom</a> of expression, <a href={CONST.links.home.intro.subNav.control}>control</a> of personal data, <a href={CONST.links.home.intro.subNav.security}>private and secure</a> communications, and a whole new <a href={CONST.links.home.intro.subNav.newEco}>economy</a>. Welcome to the SAFE Network.
            </p>
          </div>
          <div className="home-intro-ctnt-2">
            <p className="home-intro-ctnt-2-p">
              Using spare bandwidth and unused disk space on home computers and phones, we’re taking the web off corporate servers, out of government control, and back into the hands of people.
            </p>
            <a href={CONST.links.home.intro.cntr2.hiw} className="home-intro-ctnt-2-a lnk-underline">See How it Works</a>
            <div className="home-intro-bg">
              <div className="home-intro-bg-i"></div>
              <div className="home-intro-bg-i"></div>
              <div className="home-intro-bg-i"></div>
              <div className="home-intro-bg-i"></div>
            </div>
          </div>
        </div>
        <SubNav isScrolling={this.props.isScrolling} scrollPos={this.props.scrollPos} />
      </div>
    );
  }
}

// Freedom
class Freedom extends React.Component {
  render() {
    return (
      <div className="home-lay-2 home-freedom" id="Freedom">
        <div className="home-lay-2-b">
          <div className="home-lay-2-sec lft">
            <div className="home-lay-2-sec-b">
              <div className="sec-lft">
                <Container1
                  head="Decentralised &amp; Autonomous. Freedom of expression by design."
                  para={[
                    'Everyone should be able to collaborate freely and share ideas; free and unrestricted access to information for everyone around the world.',
                    'That’s why we’ve designed a system like no other: an autonomous network that runs itself, distributed across the globe, that can’t be shut down, controlled, or censored.'
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="home-lay-2-sec rgt">
            <div className="home-lay-2-sec-b">
              <div className="sec-rgt">
                <div className="sec-rgt-i">
                  <Container2
                    head="Can’t be censored or shut down."
                    para={['Because it’s autonomous, the SAFE Network can’t be turned off, blocked or controlled. It belongs to everyone.']}
                  />
                  <a className="sec-rgt-i-lnk lnk-underline" href={CONST.links.home.freedom.autonomous}>What is an Autonomous Network?</a>
                </div>
                <div className="sec-rgt-ii">
                  <Container2
                    head="All information is equal"
                    para={['All data on the Network is treated the same, and everyone has equal and free access.  Net neutrality comes as standard.']}
                  />
                </div>
                <div className="sec-rgt-iii">
                  <h3 className="sec-rgt-iii-h">David Irvine</h3>
                  <p className="sec-rgt-iii-p">“Fixing the Internet isn't optional, and now there's a solution we can all be part of”</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-lay-2-bg">
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
          </div>
        </div>
      </div>
    );
  }
}

// Control
class Control extends React.Component {
  render() {
    return (
      <div className="home-lay-2 home-control" id="Control">
        <div className="home-lay-2-b">
          <div className="home-lay-2-sec lft">
            <div className="home-lay-2-sec-b">
              <div className="sec-lft">
                <Container1
                  head="Complete Control of Your Data"
                  para={[
                    'The SAFE Network turns the current data ownership model on its head.',
                    'Gone are the days of personal information being stored on corporate servers. Self Authentication gives you complete control over your data. Grant revocable permission for apps to use that data and prevent any unauthorised company or third party ever gaining access.'
                  ]}
                />
                <a href={CONST.links.home.control.salfAuth} className="sec-lft-lnk lnk-underline yellow">
                  Read more about Self Authentication
                </a>
              </div>
              <div className="sec-lft">
                <Container1
                  head="Pay Once to Upload, Store Forever"
                  para={[
                    'Upload your data and have it stored securely forever. Get free, unrestricted access from any connected device around the world.',
                    'You’ll pay a minimal, one-time, upload charge but you’ll get permanent secure backups with no more monthly fees.'
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="home-lay-2-sec rgt">
            <div className="home-lay-2-sec-b">
              <div className="sec-rgt">
                <div className="sec-rgt-i">
                  <Container2
                    head="One Password. For real this time."
                    para={['All apps are securely accessed from the single password used to create your account. Say goodbye to that password manager.']}
                  />
                </div>
                <div className="sec-rgt-ii">
                  <Container2
                    head="Data Portability"
                    para={['Being in complete control means you can quickly and easily move your data between apps and services. Mix and match to meet your needs, and leave no data behind.']}
                  />
                </div>
                <div className="sec-rgt-iii">
                  <Container2
                    head="Dude, where’s my blockchain?"
                    para={['No blockchain means endless scalability and instant transactions at network speed. Exactly what a global data network needs.']}
                  />
                  <a className="sec-rgt-iii-lnk lnk-underline" href={CONST.links.home.control.whyBlockChain}>Read more about the design</a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-lay-2-bg">
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
          </div>
        </div>
      </div>
    );
  }
}

// New Economy
class NewEconomy extends React.Component {
  render() {
    return (
      <div className="home-lay-2 home-economy" id="NewEconomy">
        <div className="home-lay-2-b">
          <div className="home-lay-2-sec lft">
            <div className="home-lay-2-sec-b">
              <div className="sec-lft">
                <Container1
                  head="The New Digital Economy"
                  para={[
                    'Welcome to the new economy where you no longer pay for your digital life with your personal data. Instead, you’ll use Safecoin, a cryptocurrency that is integrated into and distributed entirely by the Network.',
                    'Users are compensated for providing their resources and can use this to pay developers to use their apps in a virtuous and self sustaining cycle.',
                    'SAFE is a network where wealth is shared based on the value that everyone provides.'
                  ]}
                />
                <a href={CONST.links.home.newEco.safecoins} className="sec-lft-lnk lnk-underline">
                  Read more about Safecoin
                </a>
              </div>
            </div>
          </div>
          <div className="home-lay-2-sec rgt">
            <div className="home-lay-2-sec-b no-pad-btm no-pad-top">
              <div className="sec-rgt">
                <div className="sec-rgt-i">
                  <Container2
                    head="Contribute Resources, Get Paid."
                    para={['By running a Vault, you can offer the Network your unused resources—like hard drive space and bandwidth—and be automatically rewarded with Safecoin.']}
                  />
                </div>
                <div className="sec-rgt-ii">
                  <Container2
                    head="Always Free to Access"
                    para={['Information is always free to access. You’ll never be charged for browsing or downloading. The SAFE Network guarantees equal access to data for everyone. You don’t even need an account, just download the browser']}
                  />
                </div>
                <div className="sec-rgt-iii">
                  <Container2
                    head="No Infrastructure Costs"
                    para={['Without fixed infrastructure costs, each additional member of the Network increases the utility and speed for everyone else. And the system rewards popular apps and  websites with payments directly.']}
                  />
                </div>
                <div className="sec-rgt-iiii">
                  <Container2
                    head="The Perfect Market"
                    para={['As there is no human interaction, the Network autonomously creates a perfect market. Prices are set continually dependent on available resources and user demand.']}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-lay-2-bg">
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
          </div>
        </div>
      </div>
    );
  }
}

// Security
class Security extends React.Component {
  render() {
    return (
      <div className="home-lay-2 home-security" id="Security">
        <div className="home-lay-2-b">
          <div className="home-lay-2-sec lft">
            <div className="home-lay-2-sec-b">
              <div className="sec-lft">
                <Container1
                  head="Total Privacy, Absolute Security."
                  para={[
                    'Privacy and security should be available to everyone, not just those with deep pockets.',
                    'That’s why the SAFE Network encrypts all data by default, automatically splitting it into many pieces which constantly move to locations around the globe that cannot be traced. And your access to them is untraceable too.',
                    'No more hacked data, no more stolen passwords, no more eavesdropping. Private. Secure. Anonymous.'
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="home-lay-2-sec rgt">
            <div className="home-lay-2-sec-b">
              <div className="sec-rgt">
                <div className="sec-rgt-i">
                  <Container2
                    head="Browse and access content anonymously"
                    para={['On the SAFE Network, you are free to browse and download completely anonymously, from anywhere in the world. No account necessary.']}
                  />
                </div>
                <div className="sec-rgt-ii">
                  <Container2
                    head="When we’re given the tools to communicate privately and securely we gain the freedom to collaborate and innovate all as one."
                  />
                  <a href={CONST.links.home.security.hiw} className="sec-rgt-ii-lnk lnk-underline">See How it Works</a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-lay-2-bg">
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
            <div className="home-lay-2-bg-i"></div>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.setupSubNav = this.setupSubNav.bind(this);
    this.state = {
      yPos: 0,
      scrollPos: {},
      subNavPos: 0
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.setupSubNav);
      this.setupSubNav();
    }
  }

  setupSubNav() {
    const subNavData = genSubNavScrollPos(
      [
        { id: 'Freedom', name: 'Freedom', colr: 'yellow' },
        { id: 'Security', name: 'Security', colr: 'half-white' },
        { id: 'Control', name: 'Control', colr: 'grey-blue' },
        { id: 'NewEconomy', name: 'New Economy', colr: 'grey-red', last: true }
      ]
    );
    this.setState({ scrollPos: subNavData.stopPos, subNavPos: subNavData.scrollTop });
  }

  handleScroll(e) {
    this.setState({
      yPos: window.pageYOffset,
    });
  }

  render() {
    const isScrolling = !(this.state.yPos <= this.state.subNavPos);
    return (
      <section className="home header-adjust">
        <Head>
          <title>{CONST.meta.home.title}</title>
          <meta name="description" content={CONST.meta.home.desc} />
        </Head>
        <div className="home-b">
          <Intro isScrolling={isScrolling} scrollPos={this.state.scrollPos} />
          <Freedom />
          <Security />
          <Control />
          <NewEconomy />
          <PageEnd />
        </div>
      </section>
    );
  }
}

export default withSiteData(() => (
  <Home />
));
