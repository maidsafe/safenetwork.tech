import React from 'react'
import { withSiteData, Head } from 'react-static'
import ClassNames from 'classnames';

import SubNav from './partials/sub_nav';
import CONST from '../constants';
import PageEnd from './partials/page_end';
import { genSubNavScrollPos } from '../utils';

class Container1 extends React.Component {
  render() {
    return (
      <div className={ClassNames('tl-cntr1', {
        large: this.props.large,
        dark: this.props.dark
      })}>
        <div className="tl-cntr1-b">
          {this.props.head ? (
            <div className="tl-cntr1-head">
              <h3 className="tl-cntr1-head-title">{this.props.head}</h3>
              {this.props.subHead ? <h2 className="tl-cntr1-head-desc">{this.props.subHead}</h2> : null}
            </div>
          ) : null}
          <div className={ClassNames('tl-cntr1-paras', {
            'theme-red': this.props.theme === 'red',
            'theme-yellow': this.props.theme === 'yellow',
            'theme-orange': this.props.theme === 'orange',
            'theme-white': this.props.theme === 'white',
            'theme-dark': this.props.theme === 'dark',
          })}>
            <p className="tl-cntr1-para">{this.props.para}</p>
          </div>
        </div>
      </div>
    )
  }
}

class Banner extends React.Component {
  render() {
    return (
      <div className="tl-bnr header-adjust">
        <div className="tl-bnr-b">
          <h1 className="tl-bnr-h bnr-head">The <span className="strike">Im</span>Possible Network</h1>
          <p className="tl-bnr-para bnr-para">12 years of research and development is coming to fruition as we put together the final building blocks of what some said was impossible: Secure Access For Everyone.</p>
        </div>
        <SubNav at="timeline" isScrolling={this.props.isScrolling} scrollPos={this.props.scrollPos} />
      </div>
    )
  }
}

class History extends React.Component {
  render() {
    return (
      <div id="History" className="tl-his">
        <div className="tl-his-b">
          <div className="tl-his-2006 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2006</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="red" large head="February 22nd" para="MaidSafe is founded by David Irvine. His Goal? To create a new global network, ensuring equality of access to the world’s data; Secure Access For Everyone." />
              </div>
              <div className="tl-his-cntr2">
                <Container1 theme="yellow" para="Proof of Concept built in Python by David Irvine alone in Czech Republic" />
              </div>
              <div className="tl-his-cntr3">
                <Container1 theme="orange" para="David presents at the Google Scalability Conference in Seattle" />
              </div>
              <div className="tl-his-cntr4">
                <Container1 theme="orange" para="All core patent applications published" />
              </div>
              <div className="tl-his-cntr5">
                <Container1 theme="yellow" para="Early version of Network available in Python" />
              </div>
            </div>
          </div>
          <div className="tl-his-2009 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2009</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="yellow" para="Entire system rewritten in C++ for improved efficiency" />
              </div>
            </div>
          </div>
          <div className="tl-his-2010 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2010</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="orange" para="David donates all his shares (80% of company) to create the MaidSafe Foundation, and the Employee Benefit Trust" />
              </div>
            </div>
          </div>
          <div className="tl-his-2011 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2011</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="yellow" para="9 months testing components of the technology with the NHS" />
              </div>
            </div>
          </div>
          <div className="tl-his-2013 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2013</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="yellow" para="Vault code rewritten from scratch—4 years of work overwritten" />
              </div>
              <div className="tl-his-cntr2">
                <Container1 theme="yellow" para="Smaller, more focused research team rewriting and implementing code on various MaidSafe libraries" />
              </div>
            </div>
          </div>
          <div className="tl-his-2014 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2014</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="orange" para="30 day crowdsale hits target in under 3 days" />
              </div>
            </div>
          </div>
          <div className="tl-his-2015 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2015</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="yellow" para="Switch from C++ to Rust" />
              </div>
            </div>
          </div>
          <div className="tl-his-2016 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2016</h3>
              </div>
              <div className="tl-his-cntr1">
                <Container1 theme="yellow" head="Test 1" subHead="Feb 2016" para="Client test. Release of ΩSAFE Launcher and the SAFE Demo App enabling users to create their own account, and to store/retrieve private data." />
              </div>
              <div className="tl-his-cntr2">
                <Container1 theme="yellow" head="Test 3" subHead="May 2016" para="The first iteration of enabling users run vaults." />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Alpha extends React.Component {
  render() {
    return (
      <div id="Alpha" className="tl-alphas">
        <div className="tl-alphas-b">
          <div className="tl-alpha-2016 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-alpha-cntr1">
                <Container1 theme="white" large head="Alpha 1" subHead="Aug 2016" para="Enabling Users to access MaidSafe-managed nodes using the SAFE Launcher to use several demo applications" />
              </div>
              <div className="tl-alpha-cntr2">
                <Container1 theme="yellow" head="Test 9" subHead="Sep 2016" para="Enable users to send and receive SAFE Email. This new functionality also serves as the first developer tutorial." />
              </div>
            </div>
          </div>
          <div className="tl-alpha-2017 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2017</h3>
              </div>
              <div className="tl-alpha-cntr1">
                <Container1 theme="yellow" head="Test 15" subHead="Mar 2017" para="Enable user to run their own Vaults from home using TCP port forwarding or UPnP" />
              </div>
              <div className="tl-alpha-cntr2">
                <Container1 theme="yellow" head="Test 17" subHead="July 2017" para="The authenticator is bundled with the SAFE Browser and Web Hosting Manager demo app released" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Roadmap extends React.Component {
  render() {
    return (
      <div id="Roadmap" className="tl-roadmap">
        <div className="tl-roadmap-b">
          <div className="tl-roadmap-2017 tl-lay">
            <div className="tl-lay-b">
              <div className="tl-roadmap-cntr1">
                <Container1 theme="dark" dark large head="Alpha 2" subHead="Sep 2017" para="The Authenticator: incorporating a more secure form of network access now bundled with the SAFE Browser, Web Hosting Manager, and SAFE Mail." />
              </div>
              <div className="tl-roadmap-cntr2">
                <div className="tl-roadmap-cntr2-b">
                  <div className="tl-roadmap-cntr2-i"><a target="_blank" href={CONST.links.timeline.roadmap.authenticator}>The Authenticator</a></div>
                  <div className="tl-roadmap-cntr2-i"><a target="_blank" href={CONST.links.timeline.roadmap.safeBrowser}>SAFE Browser</a></div>
                  <div className="tl-roadmap-cntr2-i"><a target="_blank" href={CONST.links.timeline.roadmap.whm}>Web Hosting Manager</a></div>
                  <div className="tl-roadmap-cntr2-i"><a target="_blank" href={CONST.links.timeline.roadmap.safeMail}>SAFE Mail</a></div>
                </div>
              </div>
              <div className="tl-roadmap-cntr3">
                <Container1 theme="orange" dark para="HQ Office move in Scotland" />
              </div>
              <div className="tl-roadmap-cntr4">
                <Container1 theme="dark" dark para="Android version of SAFE Authenticator &amp; SAFE Messages released" />
              </div>
            </div>
          </div>
          <div className="tl-roadmap-2018 tl-lay dark">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>2018</h3>
              </div>
              <div className="tl-roadmap-cntr1">
                <Container1 theme="orange" dark para="Front-End office opened in Chennai, India" />
              </div>
              <div className="tl-roadmap-cntr2">
                <Container1 theme="orange" dark para="SAFE Devcon 2018: First European Developers Conferenence" />
              </div>
              <div className="tl-roadmap-cntr3">
                <Container1 theme="dark" dark para="PARSEC White Paper Published" />
              </div>
              <div className="tl-roadmap-cntr4">
                <Container1 theme="dark" dark para="PARSEC Code Released" />
              </div>
            </div>
          </div>
          <div className="tl-roadmap-2019 tl-lay dark">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                  <h3>2019</h3>
              </div>
              <div className="tl-roadmap-cntr1">
                <Container1 theme="orange" dark para="Java API for Mobile Development" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Future extends React.Component {
  render() {
    return (
      <div className="tl-future">
        <div className="tl-future-b">
          <div className="tl-future-next tl-lay dark">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>Next</h3>
              </div>
              <div className="tl-future-cntr1">
                <Container1 theme="yellow" dark para="Integration of PARSEC in a dynamic permissionless network where nodes are free to join and leave" />
              </div>
              <div className="tl-future-cntr2">
                <Container1 theme="yellow" dark para="Introduction of Disjoint groups with secure message relay" />
              </div>
              <div className="tl-future-cntr3">
                <Container1 theme="yellow" dark para="Enabling disjoint groups to merge and split whilst maintaining consensus" />
              </div>
              <div className="tl-future-cntr4">
                <Container1 theme="yellow" dark para="Secure Message Relay" />
              </div>
              <div className="tl-future-cntr5">
                <Container1 theme="yellow" dark para="Integration with SOLID" />
              </div>
              <div className="tl-future-cntr6">
                <Container1 theme="orange" dark head="Fleming" para="Secure Autonomous Network: an autonomous secure routing layer that will see the network architecture becoming more decentralised, enabling users to run routing nodes and providing secure transient data in the process" />
              </div>
              <div className="tl-future-cntr7">
                <Container1 theme="red" dark head="Maxwell" para="Secure autonomous data services: addition of a storage layer through the reintroduction of user-run Vaults facilitating a much broader range of decentralised apps and use cases" />
              </div>
            </div>
          </div>
          <div className="tl-future-beta tl-lay dark">
            <div className="tl-lay-b">
              <div className="tl-lay-date">
                <h3>Beyond</h3>
              </div>
              <div className="tl-future-cntr1">
                <Container1 theme="yellow" dark para="Data republish (ability to upgrade the network without deleting all the data)" />
              </div>
              <div className="tl-future-cntr2">
                <Container1 theme="yellow" dark para="A security audit of the network" />
              </div>
              <div className="tl-future-cntr3">
                <Container1 theme="yellow" dark para="Test Safecoin" />
              </div>
              <div className="tl-future-cntr4">
                <Container1 theme="yellow" dark para="Real-time network upgrades" />
              </div>
              <div className="tl-future-cntr5">
                <Container1 theme="yellow" dark para="Network validated upgrades" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Live extends React.Component {
  render() {
    return (
      <div className="tl-live">
        <div className="tl-live-b">
          <h3 className="tl-live-h">Live Network Launch</h3>
        </div>
      </div>
    )
  }
}
// Timeline
class Timeline extends React.Component {
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
        { id: 'History', name: 'History', colr: 'yellow' },
        { id: 'Alpha', name: 'Alpha Networks', colr: 'red' },
        { id: 'Roadmap', name: 'Roadmap', colr: 'yellow  ' },
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
      <section className="tl">
        <Head>
          <title>{CONST.meta.timeline.title}</title>
          <meta name="description" content={CONST.meta.timeline.desc} />
        </Head>
        <div className="tl-b">
          <Banner isScrolling={isScrolling} scrollPos={this.state.scrollPos} />
          <History />
          <Alpha />
          <Roadmap />
          <Future />
          <Live />
          <PageEnd light />
        </div>
      </section>
    );
  }
}

export default withSiteData(() => (
  <Timeline />
));

